import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import FeatureBlock from '@/components/FeatureBlock';

export default function StoriesProduct() {
  return (
    <>
      <SEOHead title="Stories App" description="Private media sharing with selective visibility and viewer insights" />
      <Header />
      <main className="pt-28">
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-3xl font-semibold">Stories App</h1>
            <p className="text-muted mt-2 max-w-2xl">Status-style social app for selective story sharing. Users choose exactly who sees each story and can enable private or public comments.</p>
          </div>
        </section>
        <FeatureBlock eyebrow="Creation" title="Built-in camera" copy="Create stories quickly with a simple, high-quality camera experience." />
        <FeatureBlock align="right" eyebrow="Insights" title="Viewer insights" copy="Understand reach and engagement while maintaining user privacy." />
        <FeatureBlock eyebrow="B2B Potential" title="Adaptable media platform" copy="Adaptable as a media/news distribution platform for real-time visual storytelling and micro-ads." />
      </main>
      <Footer />
    </>
  );
}


