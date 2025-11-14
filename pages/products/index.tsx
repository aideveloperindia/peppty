import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import Link from 'next/link';

type ProductCard =
  | { id: string; name: string; summary: string; type: 'peppty' }
  | { id: string; name: string; summary: string; href: string };

const productCards: ProductCard[] = [
  {
    id: 'peppty',
    name: 'Peppty — India\'s Social Network',
    summary: 'Privacy-led social platform introducing Private Posts, Likes, Comments, and a holistic Popularity score.',
    type: 'peppty',
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

const pepptySections = [
  {
    id: 'overview',
    title: "Peppty — India\'s Social Network",
    description:
      'Peppty is the flagship consumer network from Peppty Technologies, designed around verified identity and private interactions. Users control every post, manage visibility, and participate in a trusted, secure environment supported by proprietary IP.',
    features: ['Private Post controls for visibility and distribution', 'Private Likes that keep sentiment confidential between sender and author', 'Private Comments that protect context-sensitive discussions', 'Popularity score combining authentic engagement signals'],
    videoId: '6bG1o7qxgwA',
  },
  {
    id: 'private-likes',
    title: 'Private Likes',
    description:
      'The Private Like feature allows members to react without broadcasting their response publicly. Only the author sees who engaged, creating a safer space for genuine feedback while reducing social pressure.',
    videoId: 'IEyWh5FyLHY',
  },
  {
    id: 'popularity',
    title: 'Popularity Score',
    description:
      'Peppty\'s popularity framework measures authentic influence across the network. Factors include meaningful interactions, consistent participation, and trust signals, helping brands and individuals benchmark growth responsibly.',
    videoId: '4_BZAq_wRr8',
  },
];

export default function ProductsPage() {
  const [showPepptyDetails, setShowPepptyDetails] = useState(false);
  const pepptyDetailsRef = useRef<HTMLDivElement>(null);

  const togglePepptyDetails = () => {
    setShowPepptyDetails((visible) => !visible);
  };

  useEffect(() => {
    if (showPepptyDetails && pepptyDetailsRef.current) {
      setTimeout(() => {
        pepptyDetailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [showPepptyDetails]);

  return (
    <>
      <SEOHead title="Products" description="Peppty product portfolio" />
      <Header />
      <main className="bg-white pt-4">
        <section className="pb-24 pt-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-5xl font-medium text-slate-900 md:text-6xl">Our Products</h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-600">
              A suite of independent applications built with a focus on privacy, simplicity, and real-world utility.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
              {productCards.map((product) => {
                const cardClasses =
                  'group flex aspect-square w-full flex-col justify-between rounded-lg border border-slate-200 bg-white p-6 text-left transition-colors duration-[150ms] hover:border-slate-300 focus-visible:border-primary focus-visible:outline-none';

                if ('href' in product) {
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
                }

                return (
                  <button
                    key={product.id}
                    type="button"
                    onClick={togglePepptyDetails}
                    aria-expanded={showPepptyDetails}
                    aria-controls="peppty-details"
                    className={cardClasses}
                  >
                    <div>
                      <h2 className="text-lg font-medium text-slate-900">{product.name}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{product.summary}</p>
                    </div>
                    <span className="text-sm font-medium text-slate-700 transition-colors duration-[150ms] group-hover:text-primary">
                      {showPepptyDetails ? 'Hide overview' : 'View Peppty overview'} →
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {showPepptyDetails && (
          <section id="peppty-details" ref={pepptyDetailsRef} className="border-t border-slate-100 bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl space-y-20 px-6 lg:px-8">
              {pepptySections.map((section, index) => {
                const videoOnLeft = index % 2 === 1;
                const textColumnClasses = videoOnLeft
                  ? 'order-2 md:order-2 space-y-6'
                  : 'order-1 md:order-1 space-y-6';
                const videoColumnClasses = videoOnLeft
                  ? 'order-1 md:order-1'
                  : 'order-2 md:order-2';

                return (
                  <div key={section.id} className="grid gap-12 md:grid-cols-2 md:items-center">
                    <div className={textColumnClasses}>
                      <h3 className="text-3xl font-medium text-slate-900 md:text-4xl">{section.title}</h3>
                      <p className="text-lg leading-relaxed text-slate-600">{section.description}</p>
                      {section.features && (
                        <ul className="mt-6 space-y-3 text-base text-slate-600">
                          {section.features.map((feature) => (
                            <li key={feature}>• {feature}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className={`${videoColumnClasses} aspect-video overflow-hidden rounded-lg border border-slate-200 bg-black`}>
                      <iframe
                        src={`https://www.youtube.com/embed/${section.videoId}`}
                        title={section.title}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}


