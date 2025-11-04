type InvestorBlockProps = {
  name: string;
  blurb: string;
};

export default function InvestorBlock({ name, blurb }: InvestorBlockProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-subtle">
      <div className="font-semibold">{name}</div>
      <p className="mt-2 text-sm text-muted">{blurb}</p>
    </div>
  );
}


