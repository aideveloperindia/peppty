import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

export default function AboutPage() {
  return (
    <>
      <SEOHead title="About" description="Company history, mission, timeline" />
      <Header />
      <main className="pt-28">
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-3xl font-semibold">About Peppty</h1>
            <p className="text-muted mt-2 max-w-2xl">Mission-driven consumer internet company. Placeholder text validated in this project only.</p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border p-6 bg-white">
                <div className="font-semibold">Mission</div>
                <p className="text-muted mt-2">Build trusted digital experiences that people love and rely on.</p>
              </div>
              <div className="rounded-xl border p-6 bg-white">
                <div className="font-semibold">Principles</div>
                <p className="text-muted mt-2">Accuracy, responsibility, privacy, and performance-first delivery.</p>
              </div>
              <div className="rounded-xl border p-6 bg-white">
                <div className="font-semibold">Timeline</div>
                <p className="text-muted mt-2">Key milestones and product launches (placeholder timeline).</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


