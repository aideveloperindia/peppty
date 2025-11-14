import Link from 'next/link';

type ProductCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function ProductCard({ title, description, href }: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-8 transition-colors duration-[150ms] hover:border-slate-300 focus-visible:border-primary"
    >
      <h3 className="text-xl font-medium text-slate-900">{title}</h3>
      <p className="mt-4 flex-1 text-base leading-relaxed text-slate-600">{description}</p>
      <span className="mt-8 text-sm font-medium text-slate-700 transition-colors duration-[150ms] group-hover:text-primary">View details →</span>
    </Link>
  );
}
