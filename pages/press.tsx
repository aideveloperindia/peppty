import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import Image from 'next/image';

export default function PressPage() {
  return (
    <>
      <SEOHead title="Press / Media" description="Press kit and media contact" />
      <Header />
      <main className="bg-white pt-4">
        <section className="pb-12 pt-8">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="text-5xl font-medium text-slate-900 md:text-6xl">Press / Media</h1>

            <div className="mt-12">
              <h2 className="text-3xl font-medium text-slate-900 md:text-4xl">Media Appearances</h2>
              <div className="mt-8 space-y-8">
                <div className="rounded-lg border border-slate-200 bg-white p-6">
                  <h3 className="text-xl font-medium text-slate-900">Product Launch</h3>
                  <div className="mt-4">
                    <Image
                      src="/peppty-launch.jpg"
                      alt="Peppty product launch coverage"
                      width={600}
                      height={800}
                      className="w-full h-auto rounded-lg border border-slate-200"
                    />
                  </div>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                    <p className="text-lg font-medium text-slate-900">Peppty App Launched by Telangana Finance Minister Harish Rao</p>
                    <p>
                      Peppty received strong regional recognition when the Peppty App was officially launched in Siddipet in the presence of Finance Minister Harish Rao.
                    </p>
                    <p>
                      During the launch, he highlighted Peppty&apos;s role in reducing fake news and fake profiles by implementing a real-identity verification model.
                    </p>
                    <p>The Peppty App was developed to provide a secure alternative to traditional social networks by ensuring:</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Every user has one verified profile</li>
                      <li>No fake accounts</li>
                      <li>Reduced misinformation</li>
                      <li>Safe and accountable posting</li>
                    </ul>
                    <p>
                      This event positioned Peppty as one of Telangana&apos;s promising homegrown social networking innovations.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-6">
                  <h3 className="text-xl font-medium text-slate-900">News Coverage</h3>
                  <div className="mt-4">
                    <Image
                      src="/peppty-paper-news.jpg"
                      alt="Peppty news coverage in paper"
                      width={600}
                      height={800}
                      className="w-full h-auto rounded-lg border border-slate-200"
                    />
                  </div>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                    <p>
                      <strong>Fake news, fake accounts, fake friends</strong> — these have become unavoidable on today&apos;s social media platforms like Facebook.
                    </p>
                    <p>
                      Why should youth be forced to deal with such problems?
                    </p>
                    <p>
                      To counter the rise of fake profiles, a completely new app has arrived — <strong>Peppty</strong>.
                    </p>
                    <p>
                      Peppty is a platform where only real people can create profiles. Only genuine friends, family members, and close acquaintances can connect with you. Creating fake accounts is impossible here.
                    </p>
                    <p>
                      This app has been designed especially keeping the safety of youth in mind.
                    </p>
                    <p>
                      In today&apos;s social media networks, fake identities have become a huge problem. Despite all precautions, platforms are filled with:
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Fake news</li>
                      <li>Fake comments</li>
                      <li>Fake profiles</li>
                      <li>Misleading posts</li>
                    </ul>
                    <p>
                      These issues are pushing youth in the wrong direction.
                    </p>
                    <p>
                      As a solution to these problems, the youngsters from Siddipet developed a new app called Peppty, which stands out as a very different kind of social media application.
                    </p>
                    <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-6">
                      <h4 className="text-lg font-medium text-slate-900 mb-4">The core idea behind Peppty</h4>
                      <ul className="list-disc space-y-2 pl-6 text-slate-600">
                        <li>Every user can have only one single profile based on their real identity</li>
                        <li>No fake accounts can be created</li>
                        <li>Special privacy features like Private Like, Private Comment, and Private Post</li>
                        <li>Options for personal sharing</li>
                        <li>Clear visibility about who sees your content and who doesn&apos;t</li>
                      </ul>
                      <p className="mt-4 text-slate-600">
                        The app is built in such a way that it completely blocks the problem of fake identities.
                      </p>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-lg font-medium text-slate-900 mb-4">Peppty… Made for us</h4>
                      <p>
                        In Peppty, a user creates a profile only with their original information. They connect exclusively with real people they know. This allows youth, friends, and families to stay connected in a more private and safe environment.
                      </p>
                      <p className="mt-4">
                        Peppty&apos;s internal privacy system ensures:
                      </p>
                      <ul className="list-disc space-y-2 pl-6 mt-2">
                        <li>Whether you like something,</li>
                        <li>Whether you comment,</li>
                        <li>Who can see it,</li>
                        <li>Who cannot see it</li>
                      </ul>
                      <p className="mt-4">—all of these can be controlled by the user.</p>
                    </div>
                    <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6">
                      <h4 className="text-lg font-medium text-slate-900 mb-4">Feature Comparison</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-slate-200">
                              <th className="text-left py-2 px-4 font-medium text-slate-900">Feature</th>
                              <th className="text-left py-2 px-4 font-medium text-slate-900">Other Apps</th>
                              <th className="text-left py-2 px-4 font-medium text-slate-900">Peppty</th>
                            </tr>
                          </thead>
                          <tbody className="text-slate-600">
                            <tr className="border-b border-slate-100">
                              <td className="py-2 px-4">Fake Accounts</td>
                              <td className="py-2 px-4">Yes</td>
                              <td className="py-2 px-4">No</td>
                            </tr>
                            <tr className="border-b border-slate-100">
                              <td className="py-2 px-4">Private Like</td>
                              <td className="py-2 px-4">No</td>
                              <td className="py-2 px-4">Yes</td>
                            </tr>
                            <tr className="border-b border-slate-100">
                              <td className="py-2 px-4">Private Comment</td>
                              <td className="py-2 px-4">No</td>
                              <td className="py-2 px-4">Yes</td>
                            </tr>
                            <tr className="border-b border-slate-100">
                              <td className="py-2 px-4">Private Post</td>
                              <td className="py-2 px-4">No</td>
                              <td className="py-2 px-4">Yes</td>
                            </tr>
                            <tr className="border-b border-slate-100">
                              <td className="py-2 px-4">Original Profile Only</td>
                              <td className="py-2 px-4">No</td>
                              <td className="py-2 px-4">Yes (Mandatory)</td>
                            </tr>
                            <tr className="border-b border-slate-100">
                              <td className="py-2 px-4">Family Privacy</td>
                              <td className="py-2 px-4">No</td>
                              <td className="py-2 px-4">Yes</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4">Group Visibility Control</td>
                              <td className="py-2 px-4">No</td>
                              <td className="py-2 px-4">Yes</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="mt-6">
                      Experts quoted in the article say that Peppty may become a safe social media platform for youth, offering real-identity communication and full control over personal privacy.
                    </p>
                  </div>
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


