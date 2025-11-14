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
            <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-start">
              <div className="space-y-8">
                <div className="rounded-lg border border-slate-200 bg-white p-10">
                  <h2 className="text-xl font-medium text-slate-900">Direct contacts</h2>
                  <div className="mt-6 space-y-6 text-base text-slate-600">
                    <div>
                      <div className="font-medium text-slate-900">General inquiries</div>
                      <a href="mailto:contact@peppty.com" className="mt-1 block transition-colors duration-[150ms] hover:text-primary">
                        contact@peppty.com
                      </a>
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">Media enquiries</div>
                      <a href="mailto:media@peppty.com" className="mt-1 block transition-colors duration-[150ms] hover:text-primary">
                        media@peppty.com
                      </a>
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">Careers</div>
                      <a href="mailto:careers@peppty.com" className="mt-1 block transition-colors duration-[150ms] hover:text-primary">
                        careers@peppty.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-6 text-sm text-slate-600">
                  If this site is deployed as a static export, configure the API endpoint or form action per the README to ensure submissions reach your team inbox.
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


