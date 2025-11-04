import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

export default function CareersPage() {
  return (
    <>
      <SEOHead title="Careers" description="Join Peppty" />
      <Header />
      <main className="pt-28">
        <section className="py-12">
          <div className="mx-auto max-w-3xl px-4">
            <h1 className="text-3xl font-semibold">Careers</h1>
            <p className="text-muted mt-2">Were assembling a small, senior team focused on product quality and trust. Send your resume to careers@peppty.com (placeholder).</p>
            <div className="mt-6">
              <a href="mailto:careers@peppty.com" className="rounded-md bg-primary px-5 py-3 text-white font-medium hover:bg-primaryHover">Email Resume</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


