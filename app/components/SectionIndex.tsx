type Props = {
  num: string;
  label: string;
  className?: string;
};

export function SectionIndex({ num, label, className }: Props) {
  return (
    <span className={["section-index", className].filter(Boolean).join(" ")}>
      <span className="num">{num}</span>
      <span className="slash">/</span>
      <span className="label">{label}</span>
    </span>
  );
}
