import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

export default function PrivacyPage() {
  return (
    <>
      <SEOHead title="Privacy Policy" description="Privacy policy placeholder" />
      <Header />
      <main className="pt-28">
        <section className="py-12">
          <div className="mx-auto max-w-3xl px-4 prose">
            <h1>Privacy Policy</h1>
            <p>Placeholder privacy policy. Final legal text to be provided by counsel.</p>
            <p>We respect user privacy and collect only necessary information to provide services. This page will be updated with the final policy.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


