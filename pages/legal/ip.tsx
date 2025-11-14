import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import Image from 'next/image';

export default function IPPage() {
  return (
    <>
      <SEOHead title="IP / Patents" description="Peppty Technologies intellectual property and patents" />
      <Header />
      <main className="bg-white pt-4">
        <section className="pb-12 pt-8">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="text-5xl font-medium text-slate-900 md:text-6xl">IP / Patents</h1>
            
            <div className="mt-12 space-y-8">
              <div className="rounded-lg border border-slate-200 bg-white p-8">
                <h2 className="text-3xl font-medium text-slate-900">Patent: Computer Implemented System and Method for Posting Content on Social Networking Sites</h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                  <p><strong>Patent No. 528407</strong> — Granted on 15 March 2024</p>
                  <p><strong>Application No.:</strong> 201741017391</p>
                  <p><strong>Date of Filing:</strong> 18/05/2017</p>
                  <p><strong>Date of Grant:</strong> 15/03/2024</p>
                  <p><strong>Patentee:</strong> Nandagiri Akhilesh (Founder & CEO, Peppty Technologies Pvt. Ltd.)</p>
                  <p><strong>Term:</strong> 20 years from 18th May 2017 (until 18th May 2037)</p>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-8">
                <h3 className="text-2xl font-medium text-slate-900">Patent Certificate</h3>
                <div className="mt-6">
                  <Image
                    src="/peppty-patent.jpg"
                    alt="Patent Certificate No. 528407"
                    width={800}
                    height={1000}
                    className="w-full h-auto rounded-lg border border-slate-200"
                  />
                </div>
              </div>

              <div className="space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  This patent covers an innovative framework for posting and managing content on social networking platforms. The patented system introduces a structured, privacy-enhanced method for user-generated content with dynamic visibility control, advanced engagement mechanisms, and granular audience selection.
                </p>
                <p>
                  The invention provides a new architecture for how posts, interactions, and user activity are handled inside social networking environments—focusing on user security, controlled sharing, and improved personalization.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-8">
                <h3 className="text-2xl font-medium text-slate-900">Key Concepts Covered Under This Patent</h3>
                <p className="mt-4 text-base text-slate-600">
                  This patented system also directly includes and protects several core social features developed by Peppty:
                </p>
                <ul className="mt-6 space-y-4 text-base text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">•</span>
                    <span><strong>Private Like</strong> — Users can like content privately without publicly revealing engagement.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">•</span>
                    <span><strong>Private Comment</strong> — Comments can be sent only to the creator, invisible to others.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">•</span>
                    <span><strong>Private Post</strong> — Posts can be shared with selected individuals/groups only.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">•</span>
                    <span><strong>Popularity Score</strong> — A calculated score that reflects authentic engagement without exposing personal identity.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">•</span>
                    <span><strong>Controlled Visibility Model</strong> — Users can choose dynamic visibility levels for every action.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">•</span>
                    <span><strong>Content Governance Layer</strong> — Built-in rules to manage posting, moderation, and controlled reach.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-8">
                <h3 className="text-2xl font-medium text-slate-900">Significance of the Patent</h3>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600">
                  <p>
                    This patent formally recognizes Peppty&apos;s pioneering work in building modern, privacy-centric social interaction systems. It legally protects the technology powering several Peppty applications — especially ChatHub, Stories App, and the original Peppty social platform.
                  </p>
                  <p>
                    It strengthens Peppty&apos;s intellectual property portfolio and establishes a defensible innovation base in the social networking domain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


