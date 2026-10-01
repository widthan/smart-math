import Button from "@/components/ui/Button";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">
<a
  href="#contact"
  className="rounded-xl bg-[#EAF2FA] px-8 py-4 font-semibold text-white transition hover:bg-[#18508F]"
>
  Записаться
</a>

      <a href="#about">
  <Button variant="secondary">
    Подробнее
  </Button>
</a>
    </div>
  );
}