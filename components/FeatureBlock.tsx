type FeatureBlockProps = {
  eyebrow?: string;
  title: string;
  copy: string;
  align?: 'left' | 'right';
  image?: string;
  imageAlt?: string;
};

import Reveal from '@/components/Reveal';
import Image from 'next/image';

export default function FeatureBlock({ eyebrow, title, copy, align = 'left', image, imageAlt }: FeatureBlockProps) {
  const isRight = align === 'right';
  return (
    <section className="py-16">
      <div className={`mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center ${isRight ? 'md:[&>div:first-child]:order-2' : ''}`}>
        <Reveal>
          {eyebrow && <div className="text-primary font-medium">{eyebrow}</div>}
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold">{title}</h2>
          <p className="mt-3 text-muted max-w-prose">{copy}</p>
        </Reveal>
        <Reveal delay={0.15}>
          {image ? (
            <div className="rounded-xl border bg-surface overflow-hidden aspect-video relative">
              <div className="absolute inset-0 scale-[1.01125] origin-center">
                <Image 
                  src={image} 
                  alt={imageAlt || title} 
                  width={800} 
                  height={600} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="rounded-xl border bg-surface h-64" aria-hidden>
              {/* TODO: Replace with product screenshots */}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}


