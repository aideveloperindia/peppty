import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import FeatureBlock from '@/components/FeatureBlock';

export default function ChatProduct() {
  return (
    <>
      <SEOHead title="ChatHub" description="Anonymous yet authentic chat network connecting verified users worldwide" />
      <Header />
      <main className="pt-28">
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-3xl font-semibold">ChatHub</h1>
            <p className="text-muted mt-2 max-w-2xl">Anonymous yet authentic chat network connecting verified users worldwide.</p>
          </div>
        </section>
        <FeatureBlock eyebrow="Scale" title="1.4M+ installs, 100k+ MAU" copy="Trending at #2 on Play Store; selected by T-Hub, Y Combinator (SUS Graduate), and Startup Istanbul top-5%." image="/products/chathub-1.png" imageAlt="ChatHub Scale" />
        <FeatureBlock align="right" eyebrow="Monetization" title="Proven revenue" copy="AdMob ads, in-app purchases, and data insights." image="/products/chathub-2.png" imageAlt="ChatHub Monetization" />
        <FeatureBlock eyebrow="Trust & Safety" title="Authenticity and moderation" copy="Real-time trust metrics, advanced UGC moderation models, and a privacy-first approach with no mandatory phone or email login." image="/products/chathub-3.png" imageAlt="ChatHub Trust & Safety" />
      </main>
      <Footer />
    </>
  );
}


