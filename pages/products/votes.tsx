import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import FeatureBlock from '@/components/FeatureBlock';

export default function VotesProduct() {
  return (
    <>
      <SEOHead title="Votes App" description="Civic & feedback platform for always-on engagement" />
      <Header />
      <main className="pt-28">
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-3xl font-semibold">Votes App</h1>
            <p className="text-muted mt-2 max-w-2xl">Connects citizens with leaders, customers with companies, and organizations with communities. A lightweight, authenticated feedback system replacing complex survey forms.</p>
          </div>
        </section>
        <FeatureBlock eyebrow="Engagement" title="Always-on feedback" copy="Enable 24×7×365 engagement and sentiment analysis across decentralized audiences." image="/products/votesapp-1.png" imageAlt="Votes App Engagement" />
        <FeatureBlock align="right" eyebrow="Simplicity" title="Lightweight & trusted" copy="Short, structured interactions that are easy to complete and verify." image="/products/votesapp-2.png" imageAlt="Votes App Simplicity" />
      </main>
      <Footer />
    </>
  );
}






