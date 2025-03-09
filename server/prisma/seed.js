import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    console.log("🌱 Seeding database...");

    // Create users
    const users = await prisma.user.createMany({
        data: [
            {
                user_id: 1,
                email: "john@example.com",
                name: "John Doe",
                password: "hashedpassword123", // Store hashed passwords in real applications
                university: "Harvard",
                faculty: "Engineering",
                department: "Computer Science",
                grad_year: 2025,
                phone_num: "+1234567890",
            },
            {
                user_id: 2,
                email: "jane@example.com",
                name: "Jane Smith",
                password: "hashedpassword456",
                university: "MIT",
                faculty: "Science",
                department: "Physics",
                grad_year: 2024,
                phone_num: "+1987654321",
            },
        ],
    });

    // Create events
    const events = await prisma.event.createMany({
        data: [
            {
                event_id: 1,
                name: "Tech Conference 2025",
                start: new Date("2025-06-01T09:00:00Z"),
                end: new Date("2025-06-01T17:00:00Z"),
                brief: "A conference about the latest tech trends.",
                description: "Join top tech leaders discussing AI, cloud, and more.",
                image_url: "https://example.com/event1.jpg",
                instructions: "Check your email for event details.",
                deadline: new Date("2025-05-20T23:59:59Z"),
            },
            {
                event_id: 2,
                name: "Hackathon 2025",
                start: new Date("2025-07-15T10:00:00Z"),
                end: new Date("2025-07-17T18:00:00Z"),
                brief: "A 48-hour hackathon with amazing prizes.",
                description: "Compete in teams to build the best tech project.",
                image_url: "https://example.com/event2.jpg",
                instructions: "Register early to get your team slot.",
                deadline: new Date("2025-07-01T23:59:59Z"),
            },
        ],
    });

    // Create contacts
    const contacts = await prisma.contact.createMany({
        data: [
            {
                contact_id: 1,
                email: "support@example.com",
                phone_num: "+1122334455",
                name: "Support Team",
                message: "How can we help you?",
            },
            {
                contact_id: 2,
                email: "info@example.com",
                phone_num: "+2233445566",
                name: "Info Desk",
                message: "Reach out for more details.",
            },
        ],
    });

    // Create registrations
    const registrations = await prisma.registration.createMany({
        data: [
            {
                reg_id: 1,
                user_id: 1,
                event_id: 1,
            },
            {
                reg_id: 2,
                user_id: 2,
                event_id: 2,
            },
        ],
    });

    console.log("✅ Seeding complete!");
}

main()
    .catch((e) => {
        console.error("❌ Error seeding database:", e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
