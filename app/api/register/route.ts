import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, phone, email, message } = await request.json();

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Не все обязательные поля заполнены." },
        { status: 400 }
      );
    }

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

        <p><b>Имя:</b> ${name}</p>

        <p><b>Телефон:</b> ${phone}</p>

        <p><b>Email:</b> ${email}</p>

        <p><b>Сообщение:</b></p>

        <p>${message || "—"}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Ошибка отправки письма",
      },
      {
        status: 500,
      }
    );
  }
}