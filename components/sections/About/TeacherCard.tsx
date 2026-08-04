import Image from "next/image";

interface Props {
  image: string;
  name: string;
  role: string;
  description: string;
}

export default function TeacherCard({
  image,
  name,
  role,
  description,
}: Props) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

      <div className="relative h-[420px]">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />

      </div>

      <div className="p-8">

        <div className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#0F3B6D]">
          {role}
        </div>

        <h3 className="text-2xl font-bold text-slate-900">
          {name}
        </h3>

        <p className="mt-5 leading-8 text-slate-600">
          {description}
        </p>

      </div>

    </article>
  );
}