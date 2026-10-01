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
      "rounded-xl bg-[#0F3B6D] px-8 py-4 font-semibold text-white transition hover:bg-[#18508F]",

    secondary:
      "rounded-xl border border-[#0F3B6D] px-8 py-4 font-semibold text-[#0F3B6D] transition hover:bg-[#18508F]",
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