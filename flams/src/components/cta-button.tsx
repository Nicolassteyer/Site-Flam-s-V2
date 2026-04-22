import Link from "next/link";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function CtaButton({
  href,
  children,
  variant = "primary",
}: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5";

  const styles =
    variant === "primary"
      ? "bg-black text-white hover:opacity-90"
      : "border border-black text-black hover:bg-black hover:text-white";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
