"use client";

import { useState } from "react";

interface Props {
  id: number;
  notes: string | null;
}

export default function NotesEditor({
  id,
  notes,
}: Props) {
  const [text, setText] = useState(notes ?? "");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  async function save() {
    setSaving(true);
    setSaved(false);

    const response = await fetch("/admin/application/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        notes: text,
      }),
    });

    setSaving(false);

    if (response.ok) {
      setSaved(true);

      setTimeout(() => {
        setSaved(false);
      }, 2000);
    }
  }

  return (
    <div className="mt-10">

      <h2 className="mb-3 text-xl font-semibold">
        Заметки администратора
      </h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="min-h-[220px] w-full rounded-xl border border-zinc-300 p-5 outline-none transition border-[#BFD5E8]"
      />

      <div className="mt-4 flex items-center gap-4">

        <button
          onClick={save}
          disabled={saving}
          className="rounded-xl bg-[#EAF2FA] px-6 py-3 font-semibold text-white transition hover:bg-pink-700 disabled:opacity-60"
        >
          {saving ? "Сохранение..." : "Сохранить"}
        </button>

        {saved && (
          <span className="font-medium text-green-600">
            ✓ Сохранено
          </span>
        )}

      </div>

    </div>
  );
}