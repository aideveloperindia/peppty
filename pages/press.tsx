import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

export default function PressPage() {
  return (
    <>
      <SEOHead title="Press / Media" description="Press kit and media contact" />
      <Header />
      <main className="pt-28">
        <section className="py-12">
          <div className="mx-auto max-w-3xl px-4">
            <h1 className="text-3xl font-semibold">Press / Media</h1>
            <p className="text-muted mt-2">Download the press kit and reach out for media inquiries.</p>
            <div className="mt-6 flex items-center gap-4">
              <a href="/press/press-kit.zip" className="rounded-md border px-5 py-3 font-medium hover:border-primary hover:text-primary">
                Download Press Kit (placeholder)
              </a>
              <a href="mailto:media@peppty.com" className="text-primary hover:text-primaryHover">media@peppty.com</a>
            </div>
            <p className="text-sm text-muted mt-3">TODO: Replace with real press kit assets.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


