import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

export default function IPPage() {
  return (
    <>
      <SEOHead title="IP / Patents" description="IP and patents notice" />
      <Header />
      <main className="pt-28">
        <section className="py-12">
          <div className="mx-auto max-w-3xl px-4 prose">
            <h1>IP / Patents Notice</h1>
            <p>Summary of IP and patents. Placeholder statement matching facts shared in this project.</p>
            <ul>
              <li>Patent applications filed: [Placeholder identifiers to be updated]</li>
              <li>Trademarks: [Placeholder marks under process/registered]</li>
            </ul>
            <p>All content © Peppty Technologies. Unauthorized use is prohibited.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


