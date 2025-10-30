import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import FeatureBlock from '@/components/FeatureBlock';

export default function StoriesProduct() {
  return (
    <>
      <SEOHead title="Stories" description="Peppty Stories product details" />
      <Header />
      <main className="pt-28">
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-3xl font-semibold">Stories</h1>
            <p className="text-muted mt-2 max-w-2xl">Short-form storytelling for communities. Placeholder copy.</p>
          </div>
        </section>
        <FeatureBlock eyebrow="Creation" title="Effortless creation" copy="Lightweight tools that encourage authentic stories." />
        <FeatureBlock align="right" eyebrow="Discovery" title="Right audience, right time" copy="Thoughtful discovery that avoids noise." />
      </main>
      <Footer />
    </>
  );
}


