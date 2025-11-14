import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

export default function PrivacyPage() {
  return (
    <>
      <SEOHead title="Privacy Policy" description="Privacy policy placeholder" />
      <Header />
      <main className="bg-white pt-4">
        <section className="pb-12 pt-8">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h1 className="text-5xl font-medium text-slate-900 md:text-6xl">Privacy Policy</h1>
            <div className="mt-12 space-y-6 text-base leading-relaxed text-slate-600">
              <p>Placeholder privacy policy. Final legal text to be provided by counsel.</p>
              <p>We respect user privacy and collect only necessary information to provide services. This page will be updated with the final policy.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


