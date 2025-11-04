import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <SEOHead title="Contact / Request Demo" description="Contact Peppty" />
      <Header />
      <main className="pt-28">
        <section className="py-12">
          <div className="mx-auto max-w-5xl px-4 grid md:grid-cols-2 gap-10">
            <div>
              <h1 className="text-3xl font-semibold">Contact</h1>
              <p className="text-muted mt-2">Reach out for demos, partnerships, and media inquiries.</p>
              <div className="mt-6 rounded-xl border bg-surface p-6">
                <div className="font-medium">Media</div>
                <a href="mailto:media@peppty.com" className="text-primary hover:text-primaryHover">media@peppty.com</a>
                <div className="mt-4 font-medium">Careers</div>
                <a href="mailto:careers@peppty.com" className="text-primary hover:text-primaryHover">careers@peppty.com</a>
              </div>
            </div>
            <div>
              <ContactForm />
              <p className="text-xs text-muted mt-3">Note: On static hosting, point the form to your email service or external endpoint. See README.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


