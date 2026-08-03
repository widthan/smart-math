import Link from "next/link";
import { prisma } from "@/lib/prisma";

import LogoutButton from "./LogoutButton";
import StatusSelect from "@/components/admin/StatusSelect";
export default async function AdminPage() {
  const applications = await prisma.application.findMany({
  orderBy: {
    createdAt: "desc",
  },
});

type Application = (typeof applications)[number];

  return (
  <main className="min-h-screen bg-zinc-100 p-10">
    <div className="mx-auto max-w-7xl">

      <div className="mb-8 flex items-center justify-between">

  <h1 className="text-4xl font-bold text-zinc-900">
    Заявки Smart Math
  </h1>

  <LogoutButton />

</div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-xl">

        <table className="w-full">

          <thead className="bg-pink-600 text-white">
            <tr>
  <th className="p-5 text-left">ФИО</th>
  <th className="p-5 text-left">Телефон</th>
  <th className="p-5 text-left">Город</th>
  <th className="p-5 text-left">Стаж</th>
  <th className="p-5 text-left">Telegram</th>
  <th className="p-5 text-left">Статус</th>
  <th className="p-5 text-left">Дата</th>
</tr>
          </thead>

          <tbody>
  {applications.map((app: Application) => (
    <tr
      key={app.id}
      className="border-b border-zinc-200 hover:bg-pink-50"
    >
      <td className="p-5 font-semibold">
        <Link
          href={`/admin/application/${app.id}`}
          className="text-pink-600 hover:underline"
        >
          {app.fullName}
        </Link>
      </td>

      <td className="p-5">
        <a
          href={`tel:${app.phone}`}
          className="text-pink-600 hover:underline"
        >
          {app.phone}
        </a>
      </td>

      <td className="p-5">
        {app.city || "—"}
      </td>

      <td className="p-5">
        {app.experience}
      </td>

      <td className="p-5">
        {app.telegram ? "Да" : "Нет"}
      </td>

      <td className="p-5">
        <StatusSelect
          id={app.id}
          status={app.status}
        />
      </td>

      <td className="p-5 text-zinc-500">
        {app.createdAt.toLocaleString("ru-RU")}
      </td>
    </tr>
  ))}
</tbody>

        </table>

      </div>

    </div>
  </main>
);
}