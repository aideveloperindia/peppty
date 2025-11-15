import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import Link from 'next/link';

type ProductCard = {
  id: string;
  name: string;
  summary: string;
  href: string;
};

const productCards: ProductCard[] = [
  {
    id: 'peppty',
    name: 'Peppty — India\'s Social Network',
    summary: 'Privacy-led social platform introducing Private Posts, Likes, Comments, and a holistic Popularity score.',
    href: '/products/peppty',
  },
  {
    id: 'chathub',
    name: 'ChatHub',
    summary: 'A global chat platform that enables private, anonymous-yet-authentic conversations using trust indicators, moderation tools, and privacy-driven features.',
    href: '/products/chat',
  },
  {
    id: 'shops',
    name: 'Shops App',
    summary: 'A hyperlocal retail discovery platform helping users find nearby stores, check product availability, and connect directly with shop owners.',
    href: '/products/shops',
  },
  {
    id: 'stories',
    name: 'Stories App',
    summary: 'A private story-sharing application that lets users control who sees their content, offering both public and private engagement options.',
    href: '/products/stories',
  },
  {
    id: 'votes',
    name: 'Votes App',
    summary: 'A lightweight platform for instant feedback, polls, and civic participation, connecting citizens, communities, and organizations.',
    href: '/products/votes',
  },
];

export default function ProductsPage() {

  return (
    <>
      <SEOHead title="Products" description="Peppty product portfolio" />
      <Header />
      <main className="bg-white pt-4">
        <section className="pb-16 pt-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-5xl font-medium text-slate-900 md:text-6xl">Products</h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-600">
              A suite of independent applications built with a focus on privacy, simplicity, and real-world utility.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
              {productCards.map((product) => {
                const cardClasses =
                  'group flex aspect-square w-full flex-col justify-between rounded-lg border border-slate-200 bg-white p-6 text-left transition-colors duration-[150ms] hover:border-slate-300 focus-visible:border-primary focus-visible:outline-none';

                return (
                  <Link key={product.id} href={product.href} className={cardClasses}>
                    <div>
                      <h2 className="text-lg font-medium text-slate-900">{product.name}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{product.summary}</p>
                    </div>
                    <span className="text-sm font-medium text-slate-700 transition-colors duration-[150ms] group-hover:text-primary">
                      View product →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


