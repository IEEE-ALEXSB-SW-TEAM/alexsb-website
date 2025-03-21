import { prisma } from "../config/prisma.js";
import { sendEmail } from '../services/emailService.js';

/**
 * Retrieve paginated list of events
 * @param {Object} req The request object with query parameters of page and per_page
 * @param {Object} res The response object
 * @returns {JSON} A paginated list of events
 */

export const getEvents = async (req, res) => {
    const { page = 1, per_page = 10 } = req.query;
    const skip = (page - 1) * per_page;
    const take = parseInt(per_page);

    try {
        const events = await prisma.event.findMany({
            skip,
            take,
        });
        const totalEvents = await prisma.event.count();
        res.status(200).json({
            data: events,
            meta: {
                page: parseInt(page),
                per_page: take,
                total: totalEvents,
                total_pages: Math.ceil(totalEvents / take),
            },
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve events", error: error });
    }
};

/**
 * Register user for an event
 * @param {Object} req The request object with the event_id and user object that contains the user_id
 * @param {Object} res The response object 
 * @returns {JSON} A success message or an error message
 */

export const registerForEvent = async (req, res) => {
    const { event_id } = req.params;
    const user_id = req.user.userId
    try {
        const user = await prisma.user.findUnique({
            where: { user_id: parseInt(user_id) },
            select: { email: true, name: true },
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const event = await prisma.event.findUnique({
            where: { event_id: parseInt(event_id) },
            select: { name: true, start: true},
        });

        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        const existingRegistration = await prisma.registration.findUnique({
            where: {
                user_id_event_id: {
                    user_id: parseInt(user_id),
                    event_id: parseInt(event_id),
                },
            },
        });
        
        if (existingRegistration) {
            return res.status(409).json({ message: "User already registered for this event." });
        }
        
        const registration = await prisma.registration.create({
            data: {
                user_id: parseInt(user_id),
                event_id: parseInt(event_id),
            },
        });
      
        await sendEmail(user.email, "eventRegistration", {
            name: user.name,
            eventName: event.name,
            date: event.start.toISOString().split("T")[0], 
            location: event.location || "Not specified",   
        });

        res.status(201).json(registration);
    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ message: "Failed to register for event", error: error.message });
    }
};
