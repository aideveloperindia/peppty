import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import FeatureBlock from '@/components/FeatureBlock';

export default function SocialProduct() {
  return (
    <>
      <SEOHead title="Social" description="Peppty Social product details" />
      <Header />
      <main className="pt-28">
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-3xl font-semibold">Social</h1>
            <p className="text-muted mt-2 max-w-2xl">Consumer social experiences, responsibly designed. Placeholder copy.</p>
          </div>
        </section>
        <FeatureBlock eyebrow="Design" title="Cinematic yet responsible" copy="Tasteful animations, strong privacy defaults, and safety-first systems." />
        <FeatureBlock align="right" eyebrow="Community" title="Built for real connections" copy="Tools for meaningful creation and safe interactions." />
      </main>
      <Footer />
    </>
  );
}


