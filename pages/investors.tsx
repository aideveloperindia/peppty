import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

type Investor = {
  name: string;
  role: string;
  investment: string;
};

const investors: Investor[] = [
  { 
    name: 'Vamshi Krishna', 
    role: 'Angel Investor',
    investment: '$28,000'
  },
  { 
    name: 'Aruna', 
    role: 'Pre-seed Investor',
    investment: '$13,000'
  },
];

export default function InvestorsPage() {
  return (
    <>
      <SEOHead title="Investors & Partners" description="Peppty Technologies early investors and financial performance" />
      <Header />
      <main className="bg-white pt-4">
        <section className="pb-12 pt-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-5xl font-medium text-slate-900 md:text-6xl">Investors</h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-600">
              We acknowledge the early believers who backed Peppty Technologies and continue to support our long-term mission. All investments have been successfully returned by the founder, demonstrating our commitment to investor relationships and financial responsibility.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {investors.map((investor) => (
                <div key={investor.name} className="rounded-lg border border-slate-200 bg-white p-10">
                  <h2 className="text-xl font-medium text-slate-900">{investor.name}</h2>
                  <p className="mt-2 text-base text-slate-600">{investor.role}</p>
                  <div className="mt-6 text-base text-slate-600">
                    <div>
                      <span className="font-medium text-slate-900">Investment:</span> {investor.investment}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-lg border border-slate-200 bg-white p-10">
              <h2 className="text-3xl font-medium text-slate-900 md:text-4xl">Current Financial Performance</h2>
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-slate-900">Monthly Revenue</h3>
                  <p className="mt-3 text-lg text-slate-600">
                    Peppty Technologies currently generates <strong className="text-slate-900">$6,000 - $10,000</strong> in monthly revenue from in-app purchases across our product portfolio.
                  </p>
                </div>
                <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-6">
                  <p className="text-base text-slate-600">
                    This revenue stream demonstrates sustainable monetization through our privacy-first applications, with consistent growth potential as we expand our user base and product offerings.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-medium text-slate-900">Investment Return</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                All early investments have been successfully returned by the founder, reflecting Peppty&apos;s commitment to financial transparency and investor relations. The company achieved profitability and completed the buyback process, transitioning to 100% founder ownership in 2025.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


