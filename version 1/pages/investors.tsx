import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import InvestorBlock from '@/components/InvestorBlock';

export default function InvestorsPage() {
  return (
    <>
      <SEOHead title="Investors & Partners" description="Early investor mention" />
      <Header />
      <main className="pt-28">
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-3xl font-semibold">Investors & Partners</h1>
            <p className="text-muted mt-2 max-w-2xl">Early investor mention and partner acknowledgements (placeholder).</p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <InvestorBlock name="Early Investor" blurb="Supportive seed investor (placeholder)." />
              <InvestorBlock name="Strategic Partner" blurb="Collaborating on product and distribution (placeholder)." />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


