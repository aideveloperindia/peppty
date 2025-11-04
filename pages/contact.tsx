import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <>
      <SEOHead title="Contact / Request Demo" description="Contact Peppty" />
      <Header />
      <main className="pt-28">
        <section className="py-16 md:py-32 spacing-xl cinematic-bg">
          <div className="mx-auto max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h1 className="text-4xl md:text-hero-md font-heading font-bold mb-4">Get in Touch</h1>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Reach out for demos, partnerships, and media inquiries.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="rounded-2xl glass p-8 shadow-lg">
                  <h2 className="text-2xl font-heading font-bold mb-6 text-primary">Contact Information</h2>
                  <div className="space-y-6">
                    <div>
                      <div className="font-semibold text-text mb-2">Media Inquiries</div>
                      <a
                        href="mailto:media@peppty.com"
                        className="text-primary hover:text-primaryHover transition-colors flex items-center gap-2 group"
                      >
                        media@peppty.com
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="opacity-0 group-hover:opacity-100"
                        >
                          →
                        </motion.span>
                      </a>
                    </div>
                    <div>
                      <div className="font-semibold text-text mb-2">Careers</div>
                      <a
                        href="mailto:careers@peppty.com"
                        className="text-primary hover:text-primaryHover transition-colors flex items-center gap-2 group"
                      >
                        careers@peppty.com
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="opacity-0 group-hover:opacity-100"
                        >
                          →
                        </motion.span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl glass p-6 shadow-lg">
                  <p className="text-sm text-muted">
                    Note: On static hosting, point the form to your email service or external endpoint. See README.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


