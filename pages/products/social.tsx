import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import FeatureBlock from '@/components/FeatureBlock';

export default function SocialProduct() {
  return (
    <>
      <SEOHead title="Social" description="Peppty Social product details" />
      <Header />
      <main className="bg-white pt-4">
        <section className="pb-16 pt-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-5xl font-medium text-slate-900 md:text-6xl">Social</h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">Consumer social experiences, responsibly designed. Placeholder copy.</p>
          </div>
        </section>
        <FeatureBlock eyebrow="Design" title="Cinematic yet responsible" copy="Tasteful animations, strong privacy defaults, and safety-first systems." />
        <FeatureBlock align="right" eyebrow="Community" title="Built for real connections" copy="Tools for meaningful creation and safe interactions." />
      </main>
      <Footer />
    </>
  );
}


