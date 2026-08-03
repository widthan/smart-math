import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { id, notes } = await req.json();

    await prisma.application.update({
      where: {
        id,
      },
      data: {
        notes,
      },
    });
await prisma.applicationLog.create({
  data: {
    applicationId: id,
    action: "Изменена заметка администратора",
  },
});
    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}