import Button from "@/components/ui/Button";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">
<a
  href="#contact"
  className="rounded-xl bg-pink-600 px-8 py-4 font-semibold text-white transition hover:bg-pink-700"
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