import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const { id, status } = await req.json();

    await prisma.application.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });

    await prisma.applicationLog.create({
      data: {
        applicationId: id,
        action: `Статус изменён на "${status}"`,
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