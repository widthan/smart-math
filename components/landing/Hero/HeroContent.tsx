import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div>
      <span className="mb-5 inline-block rounded-full bg-[#EAF2FA] px-5 py-2 text-sm font-semibold text-[#0F3B6D]">
        Онлайн-курс для родителей
      </span>

      <h1 className="mb-6 text-6xl font-black leading-tight text-zinc-900">
        Научите ребёнка
        <br />
        учиться
        <span className="text-[#0F3B6D]">
          {" "}
          самостоятельно
        </span>
      </h1>

      <p className="mb-10 max-w-xl text-xl leading-8 text-zinc-600">
        Практические методики, игровые упражнения и современные
        инструменты, которые помогут вашему ребёнку учиться легко,
        уверенно и без постоянного контроля родителей.
      </p>

      <HeroButtons />
    </div>
  );
}