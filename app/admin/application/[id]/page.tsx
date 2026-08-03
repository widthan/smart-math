import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

import StatusSelect from "@/components/admin/StatusSelect";
import NotesEditor from "@/components/admin/NotesEditor";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ApplicationPage({
  params,
}: Props) {
  const { id } = await params;

  const app = await prisma.application.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!app) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-100 p-10">
      <div className="mx-auto max-w-4xl">

        <div className="mb-6">
          <Link
            href="/admin"
            className="text-pink-600 hover:underline"
          >
            ← Назад к заявкам
          </Link>
        </div>

        <div className="rounded-3xl bg-white p-10 shadow-xl">

          <div className="mb-8 flex items-center justify-between">

            <h1 className="text-4xl font-bold text-zinc-900">
              {app.fullName}
            </h1>

            <StatusSelect
              id={app.id}
              status={app.status}
            />

          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            <Info
              title="Телефон"
              value={app.phone}
            />

            <Info
              title="Email"
              value={app.email}
            />

            <Info
              title="Город"
              value={app.city}
            />

            <Info
              title="Место работы"
              value={app.workplace}
            />

            <Info
              title="Стаж"
              value={app.experience}
            />

            <Info
              title="Telegram"
              value={app.telegram ? "Да" : "Нет"}
            />

            <Info
              title="Источник"
              value={app.source}
            />

            <Info
              title="Дата регистрации"
              value={app.createdAt.toLocaleString("ru-RU")}
            />

          </div>

          <div className="mt-10">

            <h2 className="mb-3 text-xl font-semibold text-zinc-900">
              Почему хочет попасть на интенсив
            </h2>

            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 text-zinc-700">
              {app.reason ?? "Не указано"}
            </div>
            

          </div>
          <NotesEditor
  id={app.id}
  notes={app.notes}
/>

        </div>

      </div>
    </main>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string | number | null;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">

      <div className="mb-2 text-sm text-zinc-500">
        {title}
      </div>

      <div className="text-lg font-semibold text-zinc-900">
        {value ?? "—"}
      </div>

    </div>
  );
}