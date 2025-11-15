import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import FeatureBlock from '@/components/FeatureBlock';
import Link from 'next/link';

export default function StoriesProduct() {
  return (
    <>
      <SEOHead title="Stories App" description="Private media sharing with selective visibility and viewer insights" />
      <Header />
      <main className="bg-white pt-4">
        <section className="pb-16 pt-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link href="/products" className="inline-flex items-center text-base font-medium text-slate-700 transition-colors duration-[150ms] hover:text-primary mb-6">
              ← Back to Products
            </Link>
            <h1 className="text-5xl font-medium text-slate-900 md:text-6xl">Stories App</h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">Stories App allows users to share photos, videos, or updates with full audience control. Every story can be shared publicly, privately, or with selected viewers.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-medium text-slate-900 md:text-4xl">Key Features</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-medium text-slate-900">Built-in camera and editor</h3>
                <p className="mt-2 text-base text-slate-600">Create stories quickly with a simple, high-quality camera experience and editing tools.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-medium text-slate-900">Selective audience sharing</h3>
                <p className="mt-2 text-base text-slate-600">Full control over who sees each story — public, private, or selected viewers only.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-medium text-slate-900">Private and public comments</h3>
                <p className="mt-2 text-base text-slate-600">Flexible engagement options with both private and public comment modes.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-medium text-slate-900">Viewer insights</h3>
                <p className="mt-2 text-base text-slate-600">Understand reach and engagement while maintaining user privacy.</p>
              </div>
            </div>
          </div>
        </section>
        <FeatureBlock eyebrow="Creation" title="Built-in camera" copy="Create stories quickly with a simple, high-quality camera experience." image="/products/Stories-1.png" imageAlt="Stories Creation" />
        <FeatureBlock align="right" eyebrow="Insights" title="Viewer insights" copy="Understand reach and engagement while maintaining user privacy." image="/products/Stories-2.png" imageAlt="Stories Insights" />
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


