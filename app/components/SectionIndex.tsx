type Props = {
  num: string;
  label: string;
  className?: string;
  tone?: "light" | "dark";
};

export function SectionIndex({ num, label, className, tone = "light" }: Props) {
  return (
    <span
      className={[
        "section-index",
        tone === "dark" && "section-index-dark",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="num">{num}</span>
      <span className="slash">/</span>
      <span className="label">{label}</span>
    </span>
  );
}
