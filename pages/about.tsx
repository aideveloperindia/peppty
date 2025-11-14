import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import Timeline from '@/components/Timeline';

export default function AboutPage() {
  return (
    <>
      <SEOHead title="About" description="Peppty Technologies develops trusted consumer internet platforms built on privacy and authenticity." />
      <Header />
      <main className="bg-white pt-4">
        <section className="border-b border-slate-100 bg-white pb-24 pt-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-5xl font-medium text-slate-900 md:text-6xl">About Peppty Technologies</h1>
            <p className="mt-4 text-base text-slate-600">Incorporated: 11 Jan 2017 · Hyderabad, Telangana, India</p>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-600">
              Peppty Technologies Private Limited is a technology company based in Telangana, India, founded in 2017. Our focus has remained consistent from day one — creating practical, purposeful digital products that offer privacy, simplicity and meaningful user engagement.
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
              We build applications across communication, commerce, media sharing, and public feedback — all with a commitment to reliability and user trust.
            </p>
          </div>
        </section>

        <Timeline />

        <section className="border-t border-slate-100 bg-slate-50 pt-24 pb-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-white p-10">
                <h2 className="text-2xl font-medium text-slate-900">Our Mission</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  To design simple, secure, and scalable digital products that empower everyday users and communities.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-10">
                <h2 className="text-2xl font-medium text-slate-900">Our Vision</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  To become a leading innovation-driven software company building impactful, privacy-conscious products for global users.
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-lg border border-slate-200 bg-white p-10">
              <h2 className="text-2xl font-medium text-slate-900">Technology & IP</h2>
              <ul className="mt-6 space-y-4 text-base text-slate-600">
                <li>• Proprietary Android SDK enabling 5× ad revenue optimization.</li>
                <li>• Multiple trademarks and three filed patents for privacy-led engagement models.</li>
                <li>• Applied AI/ML for platform moderation, authenticity scoring, and performance analytics.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


