import Link from 'next/link';
import Reveal from '@/components/Reveal';

type ProductCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function ProductCard({ title, description, href }: ProductCardProps) {
  return (
    <Reveal>
      <div className="rounded-xl border bg-white p-6 shadow-subtle hover:shadow transition-shadow">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="mt-2 text-muted">{description}</p>
        <div className="mt-4">
          <Link href={href} className="text-primary font-medium hover:text-primaryHover">Learn more →</Link>
        </div>
      </div>
    </Reveal>
  );
}


