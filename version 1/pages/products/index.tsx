import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  return (
    <>
      <SEOHead title="Products" description="Peppty products overview" />
      <Header />
      <main className="pt-28">
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-3xl font-semibold">Products</h1>
            <p className="text-muted mt-2 max-w-2xl">Clear product overviews with brief descriptions and links to details.</p>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <ProductCard title="ChatHub" description="Anonymous yet authentic chat network connecting verified users worldwide." href="/products/chat" />
              <ProductCard title="Shops App" description="Retail digitalization platform for neighborhood stores." href="/products/shops" />
              <ProductCard title="Stories App" description="Private media sharing with selective visibility and viewer insights." href="/products/stories" />
              <ProductCard title="Votes App" description="Civic and feedback platform for always-on engagement." href="/products/votes" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


