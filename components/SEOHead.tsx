import Head from 'next/head';

type SEOHeadProps = {
  title?: string;
  description?: string;
  url?: string;
};

export default function SEOHead({ title, description, url }: SEOHeadProps) {
  const siteName = 'Peppty Technologies';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const desc = description || 'Peppty Technologies — Building trusted consumer internet experiences.';
  const canonical = url || 'https://peppty.com/';

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: canonical,
    logo: '/logo-placeholder.svg'
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content="/hero-placeholder.png" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
    </Head>
  );
}


