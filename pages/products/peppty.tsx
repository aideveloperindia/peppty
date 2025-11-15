import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import Link from 'next/link';

const pepptySections = [
  {
    id: 'overview',
    title: "Peppty — India's Social Network",
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

export default function PepptyProduct() {
  return (
    <>
      <SEOHead title="Peppty — India's Social Network" description="Privacy-led social platform introducing Private Posts, Likes, Comments, and a holistic Popularity score." />
      <Header />
      <main className="bg-white pt-4">
        <section className="pb-16 pt-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link href="/products" className="inline-flex items-center text-base font-medium text-slate-700 transition-colors duration-[150ms] hover:text-primary mb-6">
              ← Back to Products
            </Link>
            <h1 className="text-5xl font-medium text-slate-900 md:text-6xl">Peppty — India's Social Network</h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">
              Privacy-led social platform introducing Private Posts, Likes, Comments, and a holistic Popularity score.
            </p>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl space-y-16 px-6 lg:px-8">
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

        <section className="border-t border-slate-100 bg-white py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link href="/products" className="inline-flex items-center text-base font-medium text-slate-700 transition-colors duration-[150ms] hover:text-primary">
              ← Back to Products
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

