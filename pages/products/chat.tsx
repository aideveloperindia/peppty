import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import FeatureBlock from '@/components/FeatureBlock';
import Link from 'next/link';

export default function ChatProduct() {
  return (
    <>
      <SEOHead title="ChatHub" description="Anonymous yet authentic chat network connecting verified users worldwide" />
      <Header />
      <main className="bg-white pt-4">
        <section className="pb-24 pt-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link href="/products" className="inline-flex items-center text-base font-medium text-slate-700 transition-colors duration-[150ms] hover:text-primary mb-6">
              ← Back to Products
            </Link>
            <h1 className="text-5xl font-medium text-slate-900 md:text-6xl">ChatHub</h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">ChatHub is a privacy-first chat platform built to enable secure communication between strangers while preserving user safety. It uses trust indicators, moderation systems, and real-time safeguards, supporting a global user base of over 1.4 million installs.</p>
          </div>
        </section>
        <section className="border-t border-slate-100 bg-slate-50 pb-24 pt-12">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-medium text-slate-900 md:text-4xl">Product walkthrough</h2>
                <p className="text-lg leading-relaxed text-slate-600">
                  Watch the detailed overview to see how ChatHub delivers anonymous yet authentic conversations while preserving user safety and monetisation at scale.
                </p>
              </div>
              <div className="aspect-video overflow-hidden rounded-lg border border-slate-200 bg-black">
                <iframe
                  src="https://www.youtube.com/embed/PlVzDIM18I0"
                  title="ChatHub product walkthrough"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-medium text-slate-900 md:text-4xl">Key Features</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-medium text-slate-900">Anonymous yet authentic user interactions</h3>
                <p className="mt-2 text-base text-slate-600">Connect with verified users while maintaining privacy and authenticity through trust indicators.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-medium text-slate-900">Safety prompts and moderation tools</h3>
                <p className="mt-2 text-base text-slate-600">Real-time safeguards and advanced moderation systems ensure user safety and platform integrity.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-medium text-slate-900">Trust-score visibility</h3>
                <p className="mt-2 text-base text-slate-600">Transparent trust metrics help users make informed decisions about their interactions.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-medium text-slate-900">Voice and video call unlock options</h3>
                <p className="mt-2 text-base text-slate-600">Enhanced communication features available through in-app unlocks.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-medium text-slate-900">In-app purchases and advertising support</h3>
                <p className="mt-2 text-base text-slate-600">Sustainable monetization through AdMob ads and in-app purchases.</p>
              </div>
            </div>
          </div>
        </section>
        <FeatureBlock eyebrow="Scale" title="1.4M+ installs, 100k+ MAU" copy="Trending at #2 on Play Store; selected by T-Hub, Y Combinator (SUS Graduate), and Startup Istanbul top-5%." image="/products/chathub-1.png" imageAlt="ChatHub Scale" />
        <FeatureBlock align="right" eyebrow="Trust & Safety" title="Authenticity and moderation" copy="Real-time trust metrics, advanced UGC moderation models, and a privacy-first approach with no mandatory phone or email login." image="/products/chathub-3.png" imageAlt="ChatHub Trust & Safety" />
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


