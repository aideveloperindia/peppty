import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import FeatureBlock from '@/components/FeatureBlock';
import Link from 'next/link';

export default function ShopsProduct() {
  return (
    <>
      <SEOHead title="Shops App" description="Retail digitalization platform for neighborhood stores" />
      <Header />
      <main className="bg-white pt-4">
        <section className="pb-16 pt-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link href="/products" className="inline-flex items-center text-base font-medium text-slate-700 transition-colors duration-[150ms] hover:text-primary mb-6">
              ← Back to Products
            </Link>
            <h1 className="text-5xl font-medium text-slate-900 md:text-6xl">Shops App</h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">Shops App helps users discover nearby retail stores, check product availability, and communicate directly with shop owners. Designed for India's large unlisted retail segment, it supports hyperlocal visibility for small businesses.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-medium text-slate-900 md:text-4xl">Key Features</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-medium text-slate-900">Search products available near you</h3>
                <p className="mt-2 text-base text-slate-600">Find products and check availability across nearby stores instantly.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-medium text-slate-900">Store map and distance indicators</h3>
                <p className="mt-2 text-base text-slate-600">Visual location mapping helps users find stores quickly and efficiently.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-medium text-slate-900">In-app chat with shop owners</h3>
                <p className="mt-2 text-base text-slate-600">Direct communication channel for inquiries, orders, and coordination.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-medium text-slate-900">Order coordination and pickup flow</h3>
                <p className="mt-2 text-base text-slate-600">Streamlined process for order placement and pickup arrangements.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-medium text-slate-900">Promotions and product postings</h3>
                <p className="mt-2 text-base text-slate-600">Media-based promotions to reach local audiences effectively.</p>
              </div>
            </div>
          </div>
        </section>
        <FeatureBlock eyebrow="Core Functions" title="Availability search" copy="Product availability search across nearby shops, with in-app chat, location, and order pickup." image="/products/Shops-1.png" imageAlt="Shops Core Functions" />
        <FeatureBlock align="right" eyebrow="Business Model" title="₹500/month per shop" copy="Sustainable subscription model with a vision to enable 10,000+ local retailers." image="/products/Shops-3.png" imageAlt="Shops Business Model" />
        <section className="border-t border-slate-100 bg-white py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link href="/products" className="inline-flex items-center text-base font-medium text-slate-700 transition-colors duration-[150ms] hover:text-primary">
              ← Back to Products
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


