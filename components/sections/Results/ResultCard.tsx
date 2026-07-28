interface ResultCardProps {
  title: string;
  description: string;
}

export default function ResultCard({
  title,
  description,
}: ResultCardProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:shadow-xl">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-pink-600 text-2xl text-white">
        ✓
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