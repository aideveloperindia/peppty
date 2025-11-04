import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

export default function AboutPage() {
  return (
    <>
      <SEOHead title="About" description="Next-gen social networking and digital connectivity built around privacy and authenticity" />
      <Header />
      <main className="pt-28">
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-3xl font-semibold">About Peppty</h1>
            <div className="mt-3 text-muted">Incorporated: 11 Jan 2017 · Registered in: Telangana, India</div>
            <p className="text-muted mt-4 max-w-prose"><strong>Focus</strong>: Next-gen social networking and digital connectivity products built around privacy, authenticity, and real-world socialization.</p>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border p-6 bg-white">
                <div className="font-semibold">Origins</div>
                <p className="text-muted mt-2">Peppty was founded to create India’s first standalone social network, built on core principles of privacy, controlled visibility, and verified identity. The company’s innovations include Private Likes, Private Comments, and Popularity Scores, protected through trademarks and patent filings.</p>
              </div>
              <div className="rounded-xl border p-6 bg-white">
                <div className="font-semibold">Evolution</div>
                <p className="text-muted mt-2">Peppty has since evolved into a full-spectrum product studio developing apps across social networking, local commerce, and civic engagement, each designed to connect people more meaningfully and securely.</p>
              </div>
            </div>
            <div className="mt-8 rounded-xl border p-6 bg-white">
              <div className="font-semibold">Technology & IP</div>
              <ul className="list-disc pl-5 mt-3 text-muted space-y-2">
                <li>Proprietary Android SDK for centralized ad-revenue optimization (500% gain)</li>
                <li>Multiple trademarks and 3 filed patents, including the “Private Like/Comment” system</li>
                <li>Applied AI/ML for moderation, user authenticity scoring, and ad network optimization</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


