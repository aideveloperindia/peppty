import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

export default function CareersPage() {
  return (
    <>
      <SEOHead title="Careers" description="Join Peppty" />
      <Header />
      <main className="bg-white pt-4">
        <section className="pb-12 pt-8">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h1 className="text-5xl font-medium text-slate-900 md:text-6xl">Careers</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">We're assembling a small, senior team focused on product quality and trust. Send your resume to info@peppty.com.</p>
            <div className="mt-8">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@peppty.com&su=Resume%20Submission"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-white transition-colors duration-[150ms] hover:bg-[#d11a1f]"
              >
                Email Resume
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


