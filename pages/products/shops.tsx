import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import FeatureBlock from '@/components/FeatureBlock';

export default function ShopsProduct() {
  return (
    <>
      <SEOHead title="Shops" description="Peppty Shops product details" />
      <Header />
      <main className="pt-28">
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-3xl font-semibold">Shops</h1>
            <p className="text-muted mt-2 max-w-2xl">Seamless shopping and seller experiences. Placeholder copy.</p>
          </div>
        </section>
        <FeatureBlock eyebrow="Commerce" title="Frictionless flows" copy="Modern buyer and seller journeys with trust built-in." />
        <FeatureBlock align="right" eyebrow="Operations" title="Simple to run" copy="Manage catalog, orders, and support with ease." />
      </main>
      <Footer />
    </>
  );
}


