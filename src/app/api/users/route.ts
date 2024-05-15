import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        const newUser = await prisma.user.create({
            data: {
                name: "Usuario de prueba",
            },
        });
        return NextResponse.json({
            message: "funciona",
            newUser,
        });
    } catch (error) {
        return NextResponse.json({
            error,
        });
    }
}
