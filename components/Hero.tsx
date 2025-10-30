import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function Hero() {
  return (
    <section className="pt-28 md:pt-32 cinematic-bg">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Building trusted consumer internet experiences
          </h1>
          <p className="mt-4 text-lg text-muted max-w-xl">
            Modern, cinematic presence for Peppty Technologies with clear product and company information.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/contact" className="rounded-md bg-primary px-5 py-3 text-white font-medium hover:bg-primaryHover shadow">
              Request Demo
            </Link>
            <Link href="/products" className="rounded-md border border-muted px-5 py-3 font-medium hover:border-primary hover:text-primary">
              View Products
            </Link>
          </div>
          {/* Placeholder note intentionally removed from UI */}
        </Reveal>
        <Reveal delay={0.2}>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-subtle border border-slate-200 bg-white">
              <img src="/peppty-hero.png" alt="Peppty product preview" className="h-full w-full object-cover" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


