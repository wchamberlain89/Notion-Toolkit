import { PrismaClient } from '@prisma/client';

// Initialize Prisma client
const prisma = new PrismaClient();

// Define request handler function
export async function POST(req, res) {
    const newWidget = await prisma.counterWidget.create({ data: {} });
    return Response.json({ newWidget })
}

export async function GET(req, res) {
    return Response.json({ response: "Hello from API router" })
}