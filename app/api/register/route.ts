import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const {
      fullName,
      phone,
      email,
      city,
      workplace,
      experience,
      telegram,
      reason,
      source,
    } = await request.json();
console.log({
  fullName,
  phone,
  email,
  city,
  workplace,
  experience,
  telegram,
  reason,
  source,
});
    if (!fullName || !phone || !email || !experience) {
      return NextResponse.json(
        { error: "Заполните обязательные поля." },
        { status: 400 }
      );
    }

    await prisma.application.create({
      data: {
        fullName,
        phone,
        email,
        city,
        workplace,
        experience,
        telegram,
        reason,
        source,
        status: "Новая",
      },
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Smart Math" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: "Новая заявка с сайта Smart Math",
      html: `
        <h2>Новая заявка</h2>

        <p><b>ФИО:</b> ${fullName}</p>
        <p><b>Телефон:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Город:</b> ${city || "—"}</p>
        <p><b>Место работы:</b> ${workplace || "—"}</p>
        <p><b>Стаж:</b> ${experience}</p>
        <p><b>Telegram:</b> ${telegram ? "Да" : "Нет"}</p>
        <p><b>Причина участия:</b> ${reason || "—"}</p>
        <p><b>Источник:</b> ${source || "—"}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Ошибка отправки заявки",
      },
      {
        status: 500,
      }
    );
  }
}