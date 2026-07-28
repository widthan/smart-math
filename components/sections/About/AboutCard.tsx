interface AboutCardProps {
  value: string;
  label: string;
}

export default function AboutCard({
  value,
  label,
}: AboutCardProps) {
  return (
    <div className="rounded-2xl bg-pink-50 p-6 text-center">
      <div className="text-4xl font-bold text-pink-600">
        {value}
      </div>

      <div className="mt-2 text-zinc-600">
        {label}
      </div>
    </div>
  );
}