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
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Overview</h2>
              <p className="text-muted mt-3 max-w-prose">
                Peppty was founded to create India’s first standalone social network, built on core principles of privacy, controlled visibility, and verified identity. The company’s innovations include Private Likes, Private Comments, and Popularity Scores, protected through trademarks and patent filings.
              </p>
              <p className="text-muted mt-4 max-w-prose">
                Peppty has since evolved into a full-spectrum product studio developing apps across social networking, local commerce, and civic engagement, each designed to connect people more meaningfully and securely.
              </p>
            </div>
            <div className="rounded-xl border bg-surface p-6">
              <div className="font-medium">Highlights</div>
              <ul className="list-disc pl-5 mt-3 text-muted space-y-2">
                <li>Privacy-first features: Private Likes, Private Comments, Popularity Scores</li>
                <li>Multiple trademarks and 3 filed patents</li>
                <li>Applied AI/ML for moderation and authenticity scoring</li>
              </ul>
            </div>
          </div>
        </section>
        <TrustStrip />
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-semibold">Products</h2>
              <Link href="/products" className="text-primary hover:text-primaryHover">View all →</Link>
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <ProductCard title="ChatHub" description="Anonymous yet authentic chat network connecting verified users worldwide." href="/products/chat" />
              <ProductCard title="Shops App" description="Retail digitalization platform for neighborhood stores." href="/products/shops" />
              <ProductCard title="Stories App" description="Private media sharing with selective visibility and viewer insights." href="/products/stories" />
              <ProductCard title="Votes App" description="Civic and feedback platform for always-on engagement." href="/products/votes" />
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


