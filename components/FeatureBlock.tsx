import Image from 'next/image';

type FeatureBlockProps = {
  eyebrow?: string;
  title: string;
  copy: string;
  align?: 'left' | 'right';
  image?: string;
  imageAlt?: string;
};

export default function FeatureBlock({ eyebrow, title, copy, align = 'left', image, imageAlt }: FeatureBlockProps) {
  const isRight = align === 'right';
  return (
    <section className="py-16">
      <div className={`mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 lg:px-8 ${isRight ? 'md:[&>div:first-child]:order-2' : ''}`}>
        <div className="space-y-6">
          {eyebrow && <div className="text-sm font-medium uppercase tracking-wide text-primary">{eyebrow}</div>}
          <h2 className="text-3xl font-medium text-slate-900 md:text-4xl">{title}</h2>
          <p className="text-lg leading-relaxed text-slate-600">{copy}</p>
        </div>
        <div>
          {image ? (
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <Image
                src={image}
                alt={imageAlt || title}
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          ) : (
            <div className="h-64 rounded-lg border border-dashed border-slate-200 bg-slate-50" aria-hidden />
          )}
        </div>
      </div>
    </section>
  );
}


