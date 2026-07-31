import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import readline from "readline";

const prisma = new PrismaClient();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function main() {
  const login = await ask("Логин: ");
  const password = await ask("Пароль: ");

  const passwordHash = await bcrypt.hash(password, 10);

  await prisma.admin.create({
    data: {
      login,
      passwordHash,
    },
  });

  console.log("✅ Администратор создан.");

  rl.close();
  await prisma.$disconnect();
}

main();