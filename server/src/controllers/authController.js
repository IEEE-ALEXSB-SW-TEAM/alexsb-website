import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { prisma } from '../config/prisma.js';
import redisClient from '../config/redis.js'
import { sendEmail } from '../services/emailService.js';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const ACCESS_TOKEN_LIFE = process.env.ACCESS_TOKEN_LIFE
const REFRESH_TOKEN_LIFE = process.env.REFRESH_TOKEN_LIFE
const NODE_ENV = process.env.NODE_ENV

/**
 * Generates access and refresh tokens for a user.
 * @param {Object} user - The user object.
 * @param {string} user.userId - The user's ID.
 * @returns {{ accessToken: string, refreshToken: string }} Tokens object containing accessToken and refreshToken.
 */
export const generateTokens = (user) => {
    const accessToken = jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_LIFE });
    const refreshToken = jwt.sign(user, REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_LIFE });
    return { accessToken, refreshToken };
}

/**
 * Handles user registration.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>} A promise that resolves when the response is sent.
 */
export const signup = async (req, res) => {
    try {
        const { email, name, password, university, faculty, department, grad_year, phone_num } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
                university,
                faculty,
                department,
                grad_year,
                phone_num
            },
        });
        await sendEmail(email, "welcome", { name: name });
        return res.status(201).json({
            message: "User created successfully",
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                university: user.university,
                faculty: user.faculty,
                department: user.department,
                grad_year: user.grad_year,
                phone_num: user.phone_num
            }
        });

    } catch (error) {
        console.error("Signup Error:", error);

        if (error.code === "P2002") {
            return res.status(409).json({ message: "Email is already in use." });
        }

        return res.status(500).json({ message: "Internal Server Error" });
    }
};

/**
 * Handles user login and generates authentication tokens.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>} A promise that resolves when the response is sent.
 */
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        const user = await prisma.user.findUnique({
            where: { email },
        });
        
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        const tokens = generateTokens({ userId: user.user_id });

        res.cookie("refreshToken", tokens.refreshToken, {
            httpOnly: true,
            secure: NODE_ENV === "production",
            sameSite: NODE_ENV === "production" ? "Strict" : "Lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({ message: "Login successful", accessToken: tokens.accessToken });

    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

/**
 * Generates a new access token using a valid refresh token.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>} A promise that resolves when the response is sent.
 */
export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken

        if (!refreshToken) {
            return res.status(401).json({ message: "No refresh token provided" });
        }

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.status(403).json({ message: "Invalid or expired refresh token" });

            const newAccessToken = jwt.sign(
                { userId: req.user.userId },
                ACCESS_TOKEN_SECRET,
                { expiresIn: ACCESS_TOKEN_LIFE }
            );

            return res.status(200).json({ accessToken: newAccessToken });
        });

    } catch (error) {
        console.error("Refresh Token Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

/**
 * Sends a password reset verification code via email.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>} A promise that resolves when the response is sent.
 */
export const logout = async (req, res) => {
    try {
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: NODE_ENV === "production",
            sameSite: NODE_ENV === "production" ? "Strict" : "Lax",
        });

        return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error("Logout Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

/**
 * Sends a password reset verification code via email.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>}
 */
export const forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(404).send("User not found.");
        }

        const resetCode = crypto.randomInt(100000, 999999).toString();

        await redisClient.set(`resetCode:${email}`, resetCode, "EX", 600);

        await sendEmail(email, "forgotPassword", { name: user.name, code: resetCode });

        res.send("Verification code sent to your email.");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error sending verification code.");
    }
};

/**
 * Verifies the password reset code.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>}
 */
export const verifyResetCode = async (req, res) => {
    const { email, code } = req.body;

    try {
        const resetCode = await redisClient.get(`resetCode:${email}`);

        if (!resetCode || code !== resetCode) {
            return res.status(400).send("Invalid or expired code.");
        }

        // Generate a temporary token (valid for 10 minutes)
        const tempToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "10m" });

        res.status(200).json({ message: "Code verified successfully.", tempToken });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error verifying code.");
    }
};

/**
 * Resets the user password after verification.
 * @param {import('express').Request} req - Express request object. Requires authentication middleware to attach `req.user.email`.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>} A promise that resolves when the password is reset.
 */
export const resetPassword = async (req, res) => {
    const { newPassword } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email: req.user.email } });

        if (!user) {
            return res.status(404).send("User not found.");
        }

        const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);

        await prisma.user.update({
            where: { email: req.user.email },
            data: { password: hashedPassword },
        });

        // Remove the reset code from Redis after successful password reset
        await redisClient.del(`resetCode:${req.user.email}`);

        res.send("Password reset successfully.");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error resetting password.");
    }
};
