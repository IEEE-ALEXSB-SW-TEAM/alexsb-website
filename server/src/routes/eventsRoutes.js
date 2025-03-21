import express from "express";
import { getEvents, registerForEvent } from "../controllers/event-controller.js";
import verifyToken from "../middlewares/authMiddleware.js";
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: Get all events and register for an event
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       properties:
 *         event_id:
 *           type: integer
 *         name:
 *           type: string
 *         start:
 *           type: string
 *           format: date-time
 *         end:
 *           type: string
 *           format: date-time
 *         brief:
 *           type: string
 *         description:
 *           type: string
 *         image_url:
 *           type: string
 *         instructions:
 *           type: string
 *         deadline:
 *           type: string
 *           format: date-time
 *     Registration:
 *       type: object
 *       properties:
 *         reg_id:
 *           type: integer
 *         user_id:
 *           type: integer
 *         event_id:
 *           type: integer
 */
/**
 * @swagger
 * /events:
 *   get:
 *     summary: Retrieve paginated list of events
 *     description: Retrieve a paginated list of events.
 *     tags:
 *       - Events    
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: The page number to retrieve.
 *       - in: query
 *         name: per_page
 *         schema:
 *           type: integer
 *         description: The number of events per page.
 *     responses:
 *       200:
 *         description: A paginated list of events.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       event_id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       start:
 *                         type: string
 *                         format: date-time
 *                       end:
 *                         type: string
 *                         format: date-time
 *                       brief:
 *                         type: string
 *                       description:
 *                         type: string
 *                       image_url:
 *                         type: string
 *                       instructions:
 *                         type: string
 *                       deadline:
 *                         type: string
 *                         format: date-time
 *                 meta:
 *                   type: object
 *                   properties:
 *                     page:
 *                       type: integer
 *                     per_page:
 *                       type: integer
 *                     total:
 *                       type: integer
 *                     total_pages:
 *                       type: integer
 *       500:
 *         description: Failed to retrieve events.
 */
router.get("/events", getEvents);

/**
 * @swagger
 * /events/register/{event_id}:
 *   post:
 *     summary: Register the authenticated user for an event
 *     description: Registers the user identified by the access token for a specified event.
 *     tags:
 *       - Events  
*     parameters:
 *       - in: path
 *         name: event_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the event to register for.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Successfully registered for the event.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reg_id:
 *                   type: integer
 *                 user_id:
 *                   type: integer
 *                 event_id:
 *                   type: integer
 *       401:
 *         description: Unauthorized. Missing or invalid token.
 *       500:
 *         description: Failed to register for the event.
 */

router.post("/events/register/:event_id",verifyToken, registerForEvent);

export default router;