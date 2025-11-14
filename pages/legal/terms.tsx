import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

export default function TermsPage() {
  return (
    <>
      <SEOHead title="Terms of Use" description="Terms placeholder" />
      <Header />
      <main className="bg-white pt-4">
        <section className="pb-12 pt-8">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h1 className="text-5xl font-medium text-slate-900 md:text-6xl">Terms of Use</h1>
            <div className="mt-12 space-y-6 text-base leading-relaxed text-slate-600">
              <p>Placeholder terms of use. Final legal text to be provided by counsel.</p>
              <p>By using this site, you agree to the final terms that will be published here.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


