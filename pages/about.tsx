import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import Timeline from '@/components/Timeline';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <>
      <SEOHead title="About" description="Next-gen social networking and digital connectivity built around privacy and authenticity" />
      <Header />
      <main className="pt-28">
        {/* Hero Section */}
        <section className="py-16 spacing-xl cinematic-bg">
          <div className="mx-auto max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-hero-md font-heading font-bold mb-4">About Peppty</h1>
              <div className="text-muted text-lg mb-6">Incorporated: 11 Jan 2017 · Registered in: Telangana, India</div>
              <p className="text-lg text-muted max-w-3xl leading-relaxed">
                <strong className="text-text">Focus</strong>: Next-gen social networking and digital connectivity products built around privacy, authenticity, and real-world socialization.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <Timeline />

        {/* Content Sections */}
        <section className="py-16 spacing-xl">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl glass p-8 shadow-lg"
              >
                <div className="text-2xl font-heading font-bold mb-4 text-primary">Origins</div>
                <p className="text-muted leading-relaxed">Peppty was founded to create India’s first standalone social network, built on core principles of privacy, controlled visibility, and verified identity. The company’s innovations include Private Likes, Private Comments, and Popularity Scores, protected through trademarks and patent filings.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl glass p-8 shadow-lg"
              >
                <div className="text-2xl font-heading font-bold mb-4 text-primary">Evolution</div>
                <p className="text-muted leading-relaxed">Peppty has since evolved into a full-spectrum product studio developing apps across social networking, local commerce, and civic engagement, each designed to connect people more meaningfully and securely.</p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl glass p-8 shadow-lg"
            >
              <div className="text-2xl font-heading font-bold mb-4 text-primary">Technology & IP</div>
              <ul className="list-disc pl-6 space-y-3 text-muted leading-relaxed">
                <li>Proprietary Android SDK for centralized ad-revenue optimization (500% gain)</li>
                <li>Multiple trademarks and 3 filed patents, including the &quot;Private Like/Comment&quot; system</li>
                <li>Applied AI/ML for moderation, user authenticity scoring, and ad network optimization</li>
              </ul>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


