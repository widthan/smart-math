interface Props {
  title: string;
  description: string;
}

export default function BenefitCard({
  title,
  description,
}: Props) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#0F3B6D]/20 hover:shadow-2xl">

      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0F3B6D]/10">

        <div className="h-8 w-8 rounded-lg bg-[#0F3B6D]" />

      </div>

      <h3 className="text-2xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-slate-600">
        {description}
      </p>

      <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#0F3B6D] transition-transform duration-500 group-hover:scale-x-100" />

    </article>
  );
}