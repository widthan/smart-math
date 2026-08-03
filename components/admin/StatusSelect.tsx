"use client";

import { useState } from "react";

interface Props {
  id: number;
  status: string;
}

const statuses = [
  "Новая",
  "Связались",
  "Оплачено",
  "Обучается",
  "Завершил",
];

export default function StatusSelect({
  id,
  status,
}: Props) {
  const [value, setValue] = useState(status);

  async function changeStatus(
    newStatus: string
  ) {
    setValue(newStatus);

    await fetch("/api/application/status", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        status: newStatus,
      }),
    });
  }

  return (
    <select
      value={value}
      onChange={(e) => changeStatus(e.target.value)}
      className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm"
    >
      {statuses.map((status) => (
        <option
          key={status}
          value={status}
        >
          {status}
        </option>
      ))}
    </select>
  );
}