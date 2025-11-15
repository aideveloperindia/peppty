import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import TeamCard from '@/components/TeamCard';

export default function FoundersPage() {
  return (
    <>
      <SEOHead title="Founders & Team" description="Detailed bios" />
      <Header />
      <main className="bg-white pt-4">
        <section className="pb-12 pt-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-5xl font-medium text-slate-900 md:text-6xl">Founders & Team</h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">Leadership focused on privacy-first consumer internet experiences.</p>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <TeamCard name="Akhilesh" role="Founder & CEO" bio="Visionary developer of 15+ apps; led ChatHub to 2M users and 15× revenue growth. Patent & trademark holder; featured in Times Next. Scaled Peppty from ₹30 L investment to ₹1 Cr annual revenue." />
              <TeamCard name="Aditya" role="Co-Founder" bio="Ethical Hacker (EC-Council v8) and serial innovator. Former COO, Peppty Technologies; raised $52 K funding (2017–19). Recognized 'Intinta Innovator' by Govt of Telangana (2019–23); APJ Abdul Kalam Memorial Awardee." />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


