import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <SEOHead title="Invest or Collaborate" description="Connect with Peppty Technologies for investment opportunities and strategic partnerships." />
      <Header />
      <main className="bg-white pt-4">
        <section className="border-b border-slate-100 bg-white pb-12 pt-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-medium text-slate-900 md:text-6xl">Invest or Collaborate</h1>
              <p className="mt-6 text-lg text-slate-600">
                Connect with Peppty Technologies for investment opportunities and strategic partnerships. We respond within one business day.
              </p>
            </div>
            <div className="mt-12 flex justify-center">
              <div className="w-full max-w-2xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


