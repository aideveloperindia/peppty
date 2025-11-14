import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import FeatureBlock from '@/components/FeatureBlock';
import Link from 'next/link';

export default function VotesProduct() {
  return (
    <>
      <SEOHead title="Votes App" description="Civic & feedback platform for always-on engagement" />
      <Header />
      <main className="bg-white pt-4">
        <section className="pb-24 pt-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link href="/products" className="inline-flex items-center text-base font-medium text-slate-700 transition-colors duration-[150ms] hover:text-primary mb-6">
              ← Back to Products
            </Link>
            <h1 className="text-5xl font-medium text-slate-900 md:text-6xl">Votes App</h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">Votes App is designed for simple, reliable public participation. It enables communities, organizations, and citizens to express opinions through quick polls and feedback forms.</p>
          </div>
        </section>
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-medium text-slate-900 md:text-4xl">Key Features</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-medium text-slate-900">Create polls in seconds</h3>
                <p className="mt-2 text-base text-slate-600">Lightweight platform for instant feedback creation and distribution.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-medium text-slate-900">Real-time participation updates</h3>
                <p className="mt-2 text-base text-slate-600">Live updates as responses come in, enabling immediate insights.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-medium text-slate-900">Detailed results and analytics</h3>
                <p className="mt-2 text-base text-slate-600">Comprehensive analytics and sentiment analysis across decentralized audiences.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-medium text-slate-900">Role-based visibility</h3>
                <p className="mt-2 text-base text-slate-600">Control who can view and participate based on roles and permissions.</p>
              </div>
            </div>
          </div>
        </section>
        <FeatureBlock eyebrow="Engagement" title="Always-on feedback" copy="Enable 24×7×365 engagement and sentiment analysis across decentralized audiences." image="/products/votesapp-1.png" imageAlt="Votes App Engagement" />
        <FeatureBlock align="right" eyebrow="Simplicity" title="Lightweight & trusted" copy="Short, structured interactions that are easy to complete and verify." image="/products/votesapp-2.png" imageAlt="Votes App Simplicity" />
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






