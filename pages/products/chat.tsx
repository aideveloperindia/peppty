import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import FeatureBlock from '@/components/FeatureBlock';

export default function ChatProduct() {
  return (
    <>
      <SEOHead title="Chat" description="Peppty Chat product details" />
      <Header />
      <main className="pt-28">
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-3xl font-semibold">Chat</h1>
            <p className="text-muted mt-2 max-w-2xl">Reliable messaging with modern privacy defaults. Placeholder copy.</p>
          </div>
        </section>
        <FeatureBlock eyebrow="Reliability" title="Fast and dependable" copy="Messaging that respects users and delivers at scale." />
        <FeatureBlock align="right" eyebrow="Privacy" title="Modern protections" copy="End-user centric privacy choices and sensible defaults." />
      </main>
      <Footer />
    </>
  );
}


