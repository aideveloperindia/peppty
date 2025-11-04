import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import FeatureBlock from '@/components/FeatureBlock';

export default function ShopsProduct() {
  return (
    <>
      <SEOHead title="Shops App" description="Retail digitalization platform for neighborhood stores" />
      <Header />
      <main className="pt-28">
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-3xl font-semibold">Shops App</h1>
            <p className="text-muted mt-2 max-w-2xl">Converts offline neighborhood stores into online-visible shops, solving India’s unlisted-retail gap.</p>
          </div>
        </section>
        <FeatureBlock eyebrow="Core Functions" title="Availability search" copy="Product availability search across nearby shops, with in-app chat, location, and order pickup." image="/products/Shops-1.png" imageAlt="Shops Core Functions" />
        <FeatureBlock align="right" eyebrow="Growth" title="Shop posts & promotions" copy="Media-based promotions to reach local audiences effectively." image="/products/Shops-2.png" imageAlt="Shops Growth" />
        <FeatureBlock eyebrow="Business Model" title="₹500/month per shop" copy="Sustainable subscription model with a vision to enable 10,000+ local retailers." image="/products/Shops-3.png" imageAlt="Shops Business Model" />
      </main>
      <Footer />
    </>
  );
}


