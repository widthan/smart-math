interface ReviewCardProps {
  text: string;
  author: string;
}

export default function ReviewCard({
  text,
  author,
}: ReviewCardProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-6 text-5xl text-[#0F3B6D]">
        ❝
      </div>

      <p className="leading-8 text-zinc-600 italic">
        {text}
      </p>

      <div className="mt-8 font-bold text-lg">
        {author}
      </div>
    </div>
  );
}