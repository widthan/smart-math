interface ProgramCardProps {
  number: string;
  title: string;
  description: string;
}

export default function ProgramCard({
  number,
  title,
  description,
}: ProgramCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-pink-600 text-xl font-bold text-white">
        {number}
      </div>

      <h3 className="mb-4 text-2xl font-bold">
        {title}
      </h3>

      <p className="leading-7 text-zinc-600">
        {description}
      </p>
    </div>
  );
}