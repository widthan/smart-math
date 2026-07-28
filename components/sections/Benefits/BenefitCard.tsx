interface BenefitCardProps {
  emoji: string;
  title: string;
  description: string;
}

export default function BenefitCard({
  emoji,
  title,
  description,
}: BenefitCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 text-5xl">{emoji}</div>

      <h3 className="mb-3 text-xl font-bold">
        {title}
      </h3>

      <p className="text-zinc-600 leading-7">
        {description}
      </p>
    </div>
  );
}