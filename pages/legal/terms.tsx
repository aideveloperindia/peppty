import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

export default function TermsPage() {
  return (
    <>
      <SEOHead title="Terms of Use" description="Terms placeholder" />
      <Header />
      <main className="pt-28">
        <section className="py-12">
          <div className="mx-auto max-w-3xl px-4 prose">
            <h1>Terms of Use</h1>
            <p>Placeholder terms of use. Final legal text to be provided by counsel.</p>
            <p>By using this site, you agree to the final terms that will be published here.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


