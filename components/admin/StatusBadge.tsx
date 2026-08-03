interface Props {
  status: string;
}

export default function StatusBadge({ status }: Props) {
  const styles: Record<string, string> = {
    Новая: "bg-blue-100 text-blue-700",
    "Связались": "bg-yellow-100 text-yellow-700",
    Оплачено: "bg-green-100 text-green-700",
    Обучается: "bg-purple-100 text-purple-700",
    Завершил: "bg-zinc-200 text-zinc-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-semibold ${
        styles[status] ?? "bg-zinc-100 text-zinc-700"
      }`}
    >
      {status}
    </span>
  );
}