import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import TeamCard from '@/components/TeamCard';
import TrustStrip from '@/components/TrustStrip';
import SEOHead from '@/components/SEOHead';
import Link from 'next/link';

const products = [
  {
    title: 'ChatHub',
    description: 'A global chat platform that enables private, anonymous-yet-authentic conversations using trust indicators, moderation tools, and privacy-driven features.',
    href: '/products/chat',
  },
  {
    title: 'Shops App',
    description: 'A hyperlocal retail discovery platform helping users find nearby stores, check product availability, and connect directly with shop owners.',
    href: '/products/shops',
  },
  {
    title: 'Stories App',
    description: 'A private story-sharing application that lets users control who sees their content, offering both public and private engagement options.',
    href: '/products/stories',
  },
  {
    title: 'Votes App',
    description: 'A lightweight platform for instant feedback, polls, and civic participation, connecting citizens, communities, and organizations.',
    href: '/products/votes',
  },
];

export default function HomePage() {
  return (
    <>
      <SEOHead />
      <Header />
      <main className="bg-white">
        <Hero />

        <section className="border-b border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-16 md:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-4xl font-medium text-slate-900 md:text-5xl">
                  Our Product Ecosystem
                </h2>
                <div className="space-y-4 text-lg leading-relaxed text-slate-600">
                  <p>
                    Peppty builds applications focused on practicality, privacy, and real-world utility. Our product line includes social communication tools, hyperlocal commerce solutions, private media sharing, and civic participation platforms.
                  </p>
                  <p>
                    From the first standalone social network built in India to privacy-first commerce and civic platforms, every product is engineered with enterprise-grade infrastructure, verified identity, and responsible data practices.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-10">
                <h3 className="text-xl font-medium text-slate-900">What We Stand For</h3>
                <ul className="mt-6 space-y-4 text-base text-slate-600">
                  <li>• Privacy-first architecture</li>
                  <li>• Transparent, simple user experience</li>
                  <li>• Scalable systems built for real users</li>
                  <li>• Continuous innovation backed by in-house R&D</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <TrustStrip />

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-4xl font-medium text-slate-900 md:text-5xl">Our Products</h2>
                <p className="mt-4 text-lg text-slate-600">A suite of independent applications built with a focus on privacy, simplicity, and real-world utility.</p>
              </div>
              <Link
                href="/products"
                className="text-base font-medium text-slate-700 transition-colors duration-[150ms] hover:text-primary"
              >
                View all products →
              </Link>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {products.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 md:grid-cols-2 md:items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-medium text-slate-900 md:text-5xl">Institution-ready governance</h2>
                <p className="text-lg leading-relaxed text-slate-600">
                  Peppty maintains rigorous compliance frameworks, from data localisation to secure identity verification. Strategic collaborations with accelerators and enterprise partners ensure every launch is audit-ready and scalable.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/products"
                    className="inline-flex items-center text-base font-medium text-slate-700 transition-colors duration-[150ms] hover:text-primary"
                  >
                    Learn more about our products →
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center text-base font-medium text-slate-700 transition-colors duration-[150ms] hover:text-primary"
                  >
                    Explore our journey →
                  </Link>
                </div>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-10">
                <h3 className="text-xl font-medium text-slate-900">Operating principles</h3>
                <ul className="mt-6 space-y-4 text-base text-slate-600">
                  <li>• Privacy-first by design</li>
                  <li>• Transparent data handling and audit trails</li>
                  <li>• Responsible AI and content governance</li>
                  <li>• Sustainable commercial models</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-4xl font-medium text-slate-900 md:text-5xl">Leadership</h2>
                <p className="mt-4 text-lg text-slate-600">Experienced founders and advisors guiding a long-term product vision.</p>
              </div>
              <Link
                href="/founders"
                className="text-base font-medium text-slate-700 transition-colors duration-[150ms] hover:text-primary"
              >
                Meet the founders →
              </Link>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <TeamCard
                name="Akhilesh Nandagiri"
                role="Founder & CEO"
                bio="Product strategist with experience scaling Peppty from R&D to million-user deployments."
              />
              <TeamCard
                name="Aditya Nandagiri"
                role="Co-founder"
                bio="Security-focused co-founder with deep expertise in ethical hacking, patent-led innovation, and operations."
              />
              <TeamCard
                name="Advisory Partner"
                role="Investor & Board Advisor"
                bio="Supports governance, market expansion, and institutional partnerships."
              />
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 md:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-4xl font-medium text-slate-900 md:text-5xl">Connect with us</h2>
                <p className="text-lg leading-relaxed text-slate-600">
                  Whether you are exploring investment, product distribution, or strategic partnerships, our leadership team responds within one business day.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-white transition-colors duration-[150ms] hover:bg-[#d11a1f] focus-visible:bg-[#d11a1f]"
                >
                  Contact Peppty
                </Link>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-10">
                <h3 className="text-xl font-medium text-slate-900">Corporate contact</h3>
                <div className="mt-6 space-y-4 text-base text-slate-600">
                  <p>Peppty Technologies Pvt. Ltd.<br />Hyderabad, Telangana, India</p>
                  <p>contact@peppty.com</p>
                  <p>Response SLA: 1 business day</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
