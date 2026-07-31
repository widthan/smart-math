import { prisma } from "@/lib/prisma";
import LogoutButton from "./LogoutButton";

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
              <th className="p-5 text-left">Имя</th>
              <th className="p-5 text-left">Телефон</th>
              <th className="p-5 text-left">Email</th>
              <th className="p-5 text-left">Сообщение</th>
              <th className="p-5 text-left">Дата</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app: Application) => (
              <tr
                key={app.id}
                className="border-b border-zinc-200 hover:bg-pink-50"
              >
                <td className="p-5 font-medium text-zinc-900">
                  {app.fullName}
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
                  <a
                    href={`mailto:${app.email}`}
                    className="text-pink-600 hover:underline"
                  >
                    {app.email}
                  </a>
                </td>

                <td className="p-5 text-zinc-700">
                  {app.reason || "—"}
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