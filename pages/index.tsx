import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import TeamCard from '@/components/TeamCard';
import TrustStrip from '@/components/TrustStrip';
import SEOHead from '@/components/SEOHead';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <SEOHead />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-semibold">Products</h2>
              <Link href="/products" className="text-primary hover:text-primaryHover">View all →</Link>
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <ProductCard title="Social" description="Consumer social experiences, responsibly designed." href="/products/social" />
              <ProductCard title="Chat" description="Reliable messaging with modern privacy defaults." href="/products/chat" />
              <ProductCard title="Stories" description="Short-form storytelling for communities." href="/products/stories" />
              <ProductCard title="Shops" description="Seamless shopping and seller experiences." href="/products/shops" />
            </div>
          </div>
        </section>
        <section className="py-16 bg-surface">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Founding Team</h2>
            <p className="text-muted mt-2">Short company-centric bios. See full profiles on Founders page.</p>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <TeamCard name="Founder One" role="Founder & CEO" bio="Company-centric bio placeholder." />
              <TeamCard name="Founder Two" role="Co-founder & CTO" bio="Company-centric bio placeholder." />
              <TeamCard name="Founder Three" role="Co-founder & COO" bio="Company-centric bio placeholder." />
            </div>
            <div className="mt-6">
              <Link href="/founders" className="text-primary hover:text-primaryHover">View founders →</Link>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
              <p className="text-muted mt-2">Reach out for partnerships, media, careers, or product demos.</p>
              <div className="mt-6">
                <Link href="/contact" className="rounded-md bg-primary px-5 py-3 text-white font-medium hover:bg-primaryHover">Request Demo</Link>
              </div>
            </div>
            <div className="rounded-xl border bg-surface h-56" aria-hidden />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


