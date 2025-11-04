import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import TeamCard from '@/components/TeamCard';
import TrustStrip from '@/components/TrustStrip';
import SEOHead from '@/components/SEOHead';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <>
      <SEOHead />
      <Header />
      <main>
        <Hero />
        
        {/* Overview Section with Parallax */}
        <section className="py-20 md:py-32 spacing-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-transparent" />
          <div className="mx-auto max-w-7xl px-4 relative z-10">
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <motion.h2
                  className="text-4xl md:text-display font-heading font-bold"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Building the Future of Social Connection
                </motion.h2>
                <motion.p
                  className="text-lg md:text-subhead-md text-muted leading-relaxed max-w-prose"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Peppty was founded to create India&apos;s first standalone social network, built on core principles of privacy, controlled visibility, and verified identity. The company&apos;s innovations include Private Likes, Private Comments, and Popularity Scores, protected through trademarks and patent filings.
                </motion.p>
                <motion.p
                  className="text-lg text-muted leading-relaxed max-w-prose"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Peppty has since evolved into a full-spectrum product studio developing apps across social networking, local commerce, and civic engagement, each designed to connect people more meaningfully and securely.
                </motion.p>
              </div>
              <motion.div
                className="rounded-2xl glass p-8 shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-2xl font-heading font-bold mb-6 text-primary">Highlights</div>
                <ul className="space-y-4 text-muted">
                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-primary mt-1">→</span>
                    <span>Privacy-first features: Private Likes, Private Comments, Popularity Scores</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="text-primary mt-1">→</span>
                    <span>Multiple trademarks and 3 filed patents</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-primary mt-1">→</span>
                    <span>Applied AI/ML for moderation and authenticity scoring</span>
                  </motion.li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <TrustStrip />

        {/* Products Section */}
        <section className="py-20 md:py-32 spacing-xl relative">
          <div className="mx-auto max-w-7xl px-4">
            <motion.div
              className="flex items-center justify-between mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-display font-heading font-bold">Products</h2>
              <Link
                href="/products"
                className="text-primary hover:text-primaryHover font-medium flex items-center gap-2 group"
              >
                View all
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-xl"
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              <ProductCard
                title="ChatHub"
                description="Anonymous yet authentic chat network connecting verified users worldwide."
                href="/products/chat"
                index={0}
              />
              <ProductCard
                title="Shops App"
                description="Retail digitalization platform for neighborhood stores."
                href="/products/shops"
                index={1}
              />
              <ProductCard
                title="Stories App"
                description="Private media sharing with selective visibility and viewer insights."
                href="/products/stories"
                index={2}
              />
              <ProductCard
                title="Votes App"
                description="Civic and feedback platform for always-on engagement."
                href="/products/votes"
                index={3}
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 md:py-32 spacing-xl bg-surface relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          <div className="mx-auto max-w-7xl px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-display font-heading font-bold mb-4">Founding Team</h2>
              <p className="text-lg text-muted max-w-2xl">
                Short company-centric bios. See full profiles on Founders page.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              <TeamCard name="Akhilesh" role="Founder & CEO" bio="Company-centric bio placeholder." index={0} />
              <TeamCard name="Aditya" role="Co-founder & CTO" bio="Company-centric bio placeholder." index={1} />
              <TeamCard name="Investor" role="Key Investor" bio="Company-centric bio placeholder." index={2} />
            </div>
            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/founders"
                className="text-primary hover:text-primaryHover font-medium flex items-center gap-2 group inline-block"
              >
                View founders
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-xl"
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-32 spacing-xl cinematic-bg relative">
          <div className="mx-auto max-w-7xl px-4">
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-display font-heading font-bold">Get in Touch</h2>
                <p className="text-lg text-muted leading-relaxed">
                  Reach out for partnerships, media, careers, or product demos.
                </p>
                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-primary px-8 py-4 text-white font-medium shadow-lg hover:shadow-glow-lg transition-all duration-300 ripple-effect"
                >
                  Request Demo
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-2xl glass overflow-hidden shadow-lg">
                  <img
                    src="/four-apps-collage.png"
                    alt="Peppty products - ChatHub, Shops, Stories, Votes"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
