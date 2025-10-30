import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import TeamCard from '@/components/TeamCard';

export default function FoundersPage() {
  return (
    <>
      <SEOHead title="Founders & Team" description="Detailed bios" />
      <Header />
      <main className="pt-28">
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-3xl font-semibold">Founders & Team</h1>
            <p className="text-muted mt-2 max-w-2xl">Company-centric bios. Placeholder summaries to be finalized.</p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <TeamCard name="Founder One" role="Founder & CEO" bio="Bio placeholder focused on company impact and vision." />
              <TeamCard name="Founder Two" role="Co-founder & CTO" bio="Bio placeholder focused on technology and reliability." />
              <TeamCard name="Founder Three" role="Co-founder & COO" bio="Bio placeholder focused on operations and trust." />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


