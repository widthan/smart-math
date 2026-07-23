import Button from "@/components/ui/Button";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>
        Записаться
      </Button>

      <Button variant="secondary">
        Подробнее
      </Button>
    </div>
  );
}