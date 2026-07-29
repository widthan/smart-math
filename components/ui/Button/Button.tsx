interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const styles = {
    primary:
      "rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700",

    secondary:
      "rounded-xl border border-violet-600 px-8 py-4 font-semibold text-violet-600 transition hover:bg-violet-50",
  };

  return (
  <button
  type="button"
  onClick={onClick}
  className={`${styles[variant]} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
>
      {children}
    </button>
  );
}