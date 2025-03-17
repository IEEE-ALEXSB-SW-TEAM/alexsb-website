import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { prisma } from '../config/prisma.js';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET 
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const ACCESS_TOKEN_LIFE = process.env.ACCESS_TOKEN_LIFE
const REFRESH_TOKEN_LIFE = process.env.REFRESH_TOKEN_LIFE
const NODE_ENV=process.env.NODE_ENV

export const generateTokens = (user) => {
    const accessToken = jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_LIFE });
    const refreshToken = jwt.sign(user, REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_LIFE });
    return { accessToken, refreshToken };
}
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

        const tokens = generateTokens({ userId: user.id });

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

export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken 

        if (!refreshToken) {
            return res.status(401).json({ message: "No refresh token provided" });
        }

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.status(403).json({ message: "Invalid or expired refresh token" });

            const newAccessToken = jwt.sign(
                { userId: decoded.userId },
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