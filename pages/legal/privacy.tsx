import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

export default function PrivacyPage() {
  return (
    <>
      <SEOHead title="Privacy Policy & Terms of Service" description="ChatHub Privacy Policy and Terms of Service - Effective October 8, 2025" />
      <Header />
      <main className="bg-white pt-4">
        <section className="pb-16 pt-8">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="text-5xl font-medium text-slate-900 md:text-6xl">ChatHub Privacy Policy & Terms of Service</h1>
            
            <div className="mt-8 space-y-2 text-base text-slate-600">
              <p><strong>Effective Date:</strong> October 8, 2025</p>
              <p><strong>Last Updated:</strong> October 8, 2025</p>
            </div>

            <div className="mt-8 rounded-lg border border-red-100 bg-red-50 p-6">
              <p className="text-base font-medium text-slate-900">
                <strong>Important:</strong> By using ChatHub mobile application (iOS and Android), you agree to this Privacy Policy and Terms of Service. Please read them carefully before using our services.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-medium text-slate-900 md:text-3xl">Table of Contents</h2>
              <ul className="mt-6 space-y-2 text-base leading-relaxed text-slate-600">
                <li><a href="#privacy-policy" className="text-primary transition-colors duration-[150ms] hover:text-primaryHover">1. Privacy Policy</a></li>
                <li><a href="#terms-of-service" className="text-primary transition-colors duration-[150ms] hover:text-primaryHover">2. Terms of Service</a></li>
                <li><a href="#community-guidelines" className="text-primary transition-colors duration-[150ms] hover:text-primaryHover">3. Community Guidelines</a></li>
                <li><a href="#data-collection" className="text-primary transition-colors duration-[150ms] hover:text-primaryHover">4. Data Collection & Usage</a></li>
                <li><a href="#user-safety" className="text-primary transition-colors duration-[150ms] hover:text-primaryHover">5. User Safety & Content Moderation</a></li>
                <li><a href="#subscription-billing" className="text-primary transition-colors duration-[150ms] hover:text-primaryHover">6. Subscription & Billing</a></li>
                <li><a href="#your-rights" className="text-primary transition-colors duration-[150ms] hover:text-primaryHover">7. Your Rights & Choices</a></li>
                <li><a href="#contact-us" className="text-primary transition-colors duration-[150ms] hover:text-primaryHover">8. Contact Us</a></li>
              </ul>
            </div>

            <div className="mt-12 space-y-12">
              {/* Section 1: Privacy Policy */}
              <section id="privacy-policy" className="scroll-mt-24">
                <h2 className="text-3xl font-medium text-slate-900 md:text-4xl">1. Privacy Policy</h2>
                
                <div className="mt-8 space-y-8">
                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">1.1 Introduction</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      ChatHub ("we," "us," or "our") operates a social networking and communication platform that connects users worldwide. We are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">1.2 Information We Collect</h3>
                    
                    <div className="mt-6 space-y-6">
                      <div>
                        <h4 className="text-lg font-medium text-slate-900">A. Account Information (Provided by You)</h4>
                        <ul className="mt-3 space-y-2 text-base leading-relaxed text-slate-600">
                          <li><strong>Basic Profile:</strong> Username, age, gender, country, language preference</li>
                          <li><strong>Contact Information:</strong> Email address (optional, for account verification)</li>
                          <li><strong>Extended Profile:</strong> Profile photo, city, height, occupation, hobbies, zodiac sign, social media handles (Snapchat, Instagram)</li>
                          <li><strong>Preferences:</strong> Relationship status, interests, lifestyle choices (gym, smoking, drinking, pets, travel, etc.)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-slate-900">B. Device & Technical Information (Automatically Collected)</h4>
                        <ul className="mt-3 space-y-2 text-base leading-relaxed text-slate-600">
                          <li><strong>Device Identifiers:</strong> Device ID (DEVID), MAC address, Firebase Installation ID, device token</li>
                          <li><strong>Device Details:</strong> Device model, manufacturer, operating system version, app version</li>
                          <li><strong>Network Information:</strong> IPv4 and IPv6 addresses, IP-derived location (country, city)</li>
                          <li><strong>Platform:</strong> iOS or Android</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-slate-900">C. Usage & Activity Data</h4>
                        <ul className="mt-3 space-y-2 text-base leading-relaxed text-slate-600">
                          <li><strong>Account Activity:</strong> First login time, last login time, account creation timestamp, online/offline status</li>
                          <li><strong>Interaction Metrics:</strong> Number of conversations initiated/received (categorized by gender), voice/video calls initiated/joined</li>
                          <li><strong>Engagement Data:</strong> Chat frequency, message counts, feature usage patterns</li>
                          <li><strong>Search Activity:</strong> Search queries for finding users (username, country, gender, language)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-slate-900">D. Content You Create</h4>
                        <ul className="mt-3 space-y-2 text-base leading-relaxed text-slate-600">
                          <li><strong>Messages:</strong> Text messages sent within the app (stored temporarily for delivery)</li>
                          <li><strong>Media:</strong> Photos, images, and videos you share in conversations</li>
                          <li><strong>Interest Tags:</strong> Machine learning-extracted interests from your conversations (processed on-device, stored as approved tags only)</li>
                          <li><strong>User-Generated Content:</strong> Profile descriptions, status updates</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-slate-900">E. Safety & Moderation Data</h4>
                        <ul className="mt-3 space-y-2 text-base leading-relaxed text-slate-600">
                          <li><strong>Reports:</strong> Total number of reports received (no raw content stored)</li>
                          <li><strong>Account Status:</strong> Active, suspended, or banned status</li>
                          <li><strong>Moderation Signals:</strong> Aggregate counters for policy violations (profanity detections, image moderation flags)</li>
                          <li><strong>Verification Status:</strong> Email verification, photo verification, phone verification</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-slate-900">F. Subscription & Billing Information</h4>
                        <ul className="mt-3 space-y-2 text-base leading-relaxed text-slate-600">
                          <li><strong>Subscription Data:</strong> Subscription tier (Lite, Plus, Pro), subscription period (weekly, monthly, yearly), expiry timestamp</li>
                          <li><strong>Purchase History:</strong> Transaction IDs, purchase timestamps (processed by Apple App Store / Google Play Store)</li>
                          <li><strong>Payment Information:</strong> Handled exclusively by Apple/Google (we never access your credit card details)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-slate-900">G. Location Information</h4>
                        <ul className="mt-3 space-y-2 text-base leading-relaxed text-slate-600">
                          <li><strong>IP-Derived Location:</strong> Country and city derived from your IP address (not precise GPS location)</li>
                          <li><strong>Device Country:</strong> Country setting from your device</li>
                          <li>We <strong>DO NOT</strong> collect precise GPS location or track your movements</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">1.3 How We Use Your Information</h3>
                    
                    <div className="mt-6 space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-slate-900">A. Provide Core Services</h4>
                        <ul className="mt-3 space-y-2 text-base leading-relaxed text-slate-600">
                          <li>Enable messaging, voice calls, and video calls between users</li>
                          <li>Match you with other users based on preferences and filters</li>
                          <li>Display user profiles and facilitate connections</li>
                          <li>Deliver push notifications for messages and calls</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-slate-900">B. Personalization & Improvement</h4>
                        <ul className="mt-3 space-y-2 text-base leading-relaxed text-slate-600">
                          <li>Extract interests from conversations using on-device ML (MiniLM model) to improve matching</li>
                          <li>Suggest compatible users based on shared interests and preferences</li>
                          <li>Personalize your experience based on usage patterns</li>
                          <li>Improve app performance and fix technical issues</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-slate-900">C. Safety & Security</h4>
                        <ul className="mt-3 space-y-2 text-base leading-relaxed text-slate-600">
                          <li>Detect and prevent spam, abuse, and policy violations</li>
                          <li>Moderate content using AI (Hive Image Moderation, profanity filters)</li>
                          <li>Enforce community guidelines and terms of service</li>
                          <li>Investigate reports and take action against violators</li>
                          <li>Verify user authenticity through Play Integrity (Android) and device attestation</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-slate-900">D. Account Management</h4>
                        <ul className="mt-3 space-y-2 text-base leading-relaxed text-slate-600">
                          <li>Authenticate your identity during login</li>
                          <li>Manage your subscription and billing status</li>
                          <li>Provide customer support and respond to inquiries</li>
                          <li>Send service-related notifications (account updates, policy changes)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-slate-900">E. Analytics & Business Operations</h4>
                        <ul className="mt-3 space-y-2 text-base leading-relaxed text-slate-600">
                          <li>Analyze app usage patterns to understand user behavior</li>
                          <li>Track feature adoption and engagement metrics</li>
                          <li>Monitor app crashes and performance issues (Firebase Crashlytics)</li>
                          <li>Conduct A/B testing to improve features</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">1.4 How We Share Your Information</h3>
                    
                    <div className="mt-6 space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-slate-900">A. With Other Users (Publicly Visible)</h4>
                        <p className="mt-3 text-base leading-relaxed text-slate-600">The following information is visible to users you interact with:</p>
                        <ul className="mt-3 space-y-2 text-base leading-relaxed text-slate-600">
                          <li>Profile information (username, age, gender, country, profile photo)</li>
                          <li>Extended profile details (if you choose to fill them)</li>
                          <li>Interest tags (extracted from conversations, displayed publicly)</li>
                          <li>Online/offline status, last seen timestamp</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-slate-900">B. With Third-Party Service Providers</h4>
                        <p className="mt-3 text-base leading-relaxed text-slate-600">We share data with trusted partners who help us operate the app:</p>
                        <ul className="mt-3 space-y-2 text-base leading-relaxed text-slate-600">
                          <li><strong>Firebase (Google):</strong> Cloud database (Firestore), authentication, analytics, crashlytics, messaging</li>
                          <li><strong>Amazon Web Services (AWS):</strong> Image storage (S3), email delivery (SES)</li>
                          <li><strong>Agora.io:</strong> Real-time voice and video communication</li>
                          <li><strong>Hive AI:</strong> Image content moderation</li>
                          <li><strong>TensorFlow Lite:</strong> On-device machine learning (interest extraction, processed locally)</li>
                          <li><strong>Apple App Store / Google Play Store:</strong> Payment processing and subscription management</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-slate-900">C. Legal Requirements</h4>
                        <p className="mt-3 text-base leading-relaxed text-slate-600">We may disclose your information if required by law or to:</p>
                        <ul className="mt-3 space-y-2 text-base leading-relaxed text-slate-600">
                          <li>Comply with legal obligations, court orders, or government requests</li>
                          <li>Protect our rights, property, and safety, or that of our users</li>
                          <li>Detect, prevent, or address fraud, security, or technical issues</li>
                          <li>Enforce our Terms of Service and Community Guidelines</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-slate-900">D. Business Transfers</h4>
                        <p className="mt-3 text-base leading-relaxed text-slate-600">
                          If ChatHub is involved in a merger, acquisition, or sale of assets, your information may be transferred. We will notify you before your information becomes subject to a different privacy policy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">1.5 Data Retention</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li><strong>Account Data:</strong> Retained while your account is active</li>
                      <li><strong>Messages:</strong> Stored in our database until you delete them. Cached locally on your device.</li>
                      <li><strong>Images/Media:</strong> Stored on AWS S3 until you delete your account or remove the content</li>
                      <li><strong>Logs & Analytics:</strong> Retained for 90 days for debugging and improvement purposes</li>
                      <li><strong>Deleted Accounts:</strong> Account data is permanently deleted within 30 days of account deletion request</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">1.6 Data Security</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">We implement industry-standard security measures to protect your information:</p>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li><strong>Encryption:</strong> Data in transit is encrypted using TLS/SSL</li>
                      <li><strong>Firebase Security Rules:</strong> Strict access controls on database reads/writes</li>
                      <li><strong>Authentication:</strong> Firebase Auth with secure token management</li>
                      <li><strong>Content Moderation:</strong> AI-powered filtering to prevent harmful content</li>
                      <li><strong>Regular Audits:</strong> Periodic security reviews and updates</li>
                    </ul>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      <strong>Note:</strong> While we strive to protect your data, no method of transmission over the internet is 100% secure. Use ChatHub at your own risk.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">1.7 Children's Privacy</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      <strong>Age Restriction:</strong> ChatHub is intended for users aged <strong>18 years and older</strong>. We do not knowingly collect information from anyone under 18. If you are under 18, do not use this app or provide any personal information.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      If we discover that a user under 18 has provided personal information, we will immediately delete their account and associated data.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">1.8 International Data Transfers</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      ChatHub operates globally. Your information may be transferred to and stored on servers located in different countries, including the United States (Firebase, AWS). By using ChatHub, you consent to the transfer of your information to countries outside your residence.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">1.9 Third-Party Links</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      ChatHub may contain links to external websites or social media profiles (e.g., Instagram, Snapchat handles). We are not responsible for the privacy practices of these third-party sites. Please review their privacy policies before sharing information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">1.10 Changes to Privacy Policy</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Updated" date. Continued use of ChatHub after changes constitutes acceptance of the revised policy.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Terms of Service */}
              <section id="terms-of-service" className="scroll-mt-24">
                <h2 className="text-3xl font-medium text-slate-900 md:text-4xl">2. Terms of Service</h2>
                
                <div className="mt-8 space-y-8">
                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">2.1 Acceptance of Terms</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      By downloading, installing, or using ChatHub, you agree to be bound by these Terms of Service. If you do not agree, you may not use the app.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">2.2 Eligibility</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>You must be at least <strong>18 years old</strong> to use ChatHub</li>
                      <li>You must have the legal capacity to enter into binding agreements</li>
                      <li>You must not be prohibited from using ChatHub under applicable laws</li>
                      <li>You must provide accurate and truthful information when creating your account</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">2.3 Account Registration</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                      <li>You are responsible for all activities that occur under your account</li>
                      <li>You must notify us immediately of any unauthorized use of your account</li>
                      <li>You may not create multiple accounts or impersonate others</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">2.4 Acceptable Use</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">You agree not to:</p>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>Use ChatHub for any illegal purpose or in violation of any laws</li>
                      <li>Harass, abuse, threaten, or harm other users</li>
                      <li>Post or share content that is defamatory, obscene, or violates others' rights</li>
                      <li>Impersonate any person or entity or falsely state your affiliation</li>
                      <li>Interfere with or disrupt the app's functionality or servers</li>
                      <li>Attempt to gain unauthorized access to any part of the app</li>
                      <li>Use automated systems (bots, scrapers) to access the app</li>
                      <li>Reverse engineer, decompile, or disassemble any part of the app</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">2.5 User Content</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>You retain ownership of content you post on ChatHub</li>
                      <li>By posting content, you grant us a license to use, display, and distribute it within the app</li>
                      <li>You are solely responsible for the content you post</li>
                      <li>We reserve the right to remove any content that violates these Terms</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">2.6 Intellectual Property</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>ChatHub and its content are protected by copyright, trademark, and other intellectual property laws</li>
                      <li>You may not copy, modify, or distribute any part of ChatHub without our written permission</li>
                      <li>Our trademarks and logos may not be used without our prior written consent</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">2.7 Subscription Services</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>ChatHub offers premium subscription tiers (Lite, Plus, Pro) with enhanced features</li>
                      <li>Subscriptions are billed through Apple App Store or Google Play Store</li>
                      <li>Subscription fees are non-refundable except as required by law</li>
                      <li>We reserve the right to change subscription prices with 30 days' notice</li>
                      <li>You may cancel your subscription at any time through your device's subscription settings</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">2.8 Disclaimers</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      ChatHub is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that:
                    </p>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>The app will be uninterrupted, secure, or error-free</li>
                      <li>Defects will be corrected</li>
                      <li>The app is free of viruses or harmful components</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">2.9 Limitation of Liability</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      To the maximum extent permitted by law, ChatHub and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use, arising from your use of the app.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">2.10 Indemnification</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      You agree to indemnify and hold harmless ChatHub, its operators, and affiliates from any claims, damages, losses, or expenses (including legal fees) arising from:
                    </p>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>Your use of ChatHub</li>
                      <li>Your violation of these Terms of Service</li>
                      <li>Your violation of any third-party rights</li>
                      <li>Content you post on ChatHub</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">2.11 Termination</h3>
                    
                    <div className="mt-6 space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-slate-900">A. By You</h4>
                        <ul className="mt-3 space-y-2 text-base leading-relaxed text-slate-600">
                          <li>You may delete your account at any time through the app settings</li>
                          <li>Deleting your account will permanently remove your profile and data (within 30 days)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-slate-900">B. By Us</h4>
                        <p className="mt-3 text-base leading-relaxed text-slate-600">We may suspend or terminate your account immediately if you:</p>
                        <ul className="mt-3 space-y-2 text-base leading-relaxed text-slate-600">
                          <li>Violate these Terms of Service or Community Guidelines</li>
                          <li>Engage in illegal activities</li>
                          <li>Receive multiple reports from other users</li>
                          <li>Attempt to manipulate or abuse the app</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-slate-900">C. Effect of Termination</h4>
                        <ul className="mt-3 space-y-2 text-base leading-relaxed text-slate-600">
                          <li>Upon termination, your right to use ChatHub immediately ceases</li>
                          <li>We may retain certain data as required by law or for legitimate business purposes</li>
                          <li>Subscription fees are non-refundable upon termination</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">2.12 Dispute Resolution</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li><strong>Informal Resolution:</strong> Contact us first to resolve disputes informally</li>
                      <li><strong>Arbitration:</strong> If informal resolution fails, disputes will be resolved through binding arbitration in accordance with the laws of India</li>
                      <li><strong>Class Action Waiver:</strong> You agree to resolve disputes individually, not as part of a class action</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">2.13 Governing Law</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      These Terms are governed by the laws of India, without regard to conflict of law principles. You consent to the exclusive jurisdiction of courts in India.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">2.14 Changes to Terms</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      We may modify these Terms at any time. Changes will be effective immediately upon posting. Continued use of ChatHub after changes constitutes acceptance of the revised Terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">2.15 Severability</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      If any provision of these Terms is found unenforceable, the remaining provisions will continue in full force.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">2.16 Entire Agreement</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      These Terms, along with our Privacy Policy and Community Guidelines, constitute the entire agreement between you and ChatHub.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Community Guidelines */}
              <section id="community-guidelines" className="scroll-mt-24">
                <h2 className="text-3xl font-medium text-slate-900 md:text-4xl">3. Community Guidelines</h2>
                
                <div className="mt-8 space-y-8">
                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">3.1 Our Mission</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      ChatHub is a platform for meaningful connections and respectful communication. We strive to create a safe, inclusive, and positive environment for all users.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">3.2 Be Respectful</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>Treat others with kindness and respect</li>
                      <li>Respect boundaries and consent</li>
                      <li>Accept rejection gracefully</li>
                      <li>Do not pressure others into unwanted conversations or activities</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">3.3 Stay Safe</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>Do not share personal information (full name, address, phone number, financial details)</li>
                      <li>Be cautious when sharing social media handles</li>
                      <li>Report suspicious behavior immediately</li>
                      <li>Do not arrange in-person meetings with strangers without proper precautions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">3.4 Zero Tolerance Policies</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">The following behaviors result in <strong>immediate account termination</strong>:</p>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li><strong>Child Safety:</strong> Any content involving minors in sexual or suggestive contexts</li>
                      <li><strong>Non-Consensual Content:</strong> Sharing intimate images without consent (revenge porn)</li>
                      <li><strong>Threats & Violence:</strong> Threats of harm, promotion of self-harm, or incitement to violence</li>
                      <li><strong>Terrorism:</strong> Content promoting terrorist organizations or activities</li>
                      <li><strong>Human Trafficking:</strong> Content facilitating exploitation or trafficking</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">3.5 Reporting & Enforcement</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>Use the in-app report feature to flag violations</li>
                      <li>Reports are reviewed by our moderation team</li>
                      <li>False or malicious reports may result in penalties</li>
                      <li>We take action within 24-48 hours of receiving reports</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">3.6 Consequences of Violations</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li><strong>First Offense:</strong> Warning or temporary suspension (24-72 hours)</li>
                      <li><strong>Second Offense:</strong> Temporary ban (7-30 days)</li>
                      <li><strong>Third Offense or Severe Violation:</strong> Permanent account termination</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">3.7 Appeals</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      If you believe your account was wrongly suspended or banned, you may appeal by contacting us at info@peppty.com within 30 days.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Data Collection & Usage */}
              <section id="data-collection" className="scroll-mt-24">
                <h2 className="text-3xl font-medium text-slate-900 md:text-4xl">4. Data Collection & Usage (Detailed)</h2>
                
                <div className="mt-8 space-y-8">
                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">4.1 Firebase (Google Cloud)</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li><strong>Purpose:</strong> Database, authentication, analytics, crashlytics, push notifications</li>
                      <li><strong>Data Shared:</strong> User profiles, messages, account data, device info, usage analytics</li>
                      <li><strong>Privacy Policy:</strong> <a href="https://firebase.google.com/support/privacy" className="text-primary transition-colors duration-[150ms] hover:text-primaryHover" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">4.2 Amazon Web Services (AWS)</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li><strong>Purpose:</strong> Image storage (S3), email delivery (SES)</li>
                      <li><strong>Data Shared:</strong> Profile photos, images shared in chats, verification emails</li>
                      <li><strong>Privacy Policy:</strong> <a href="https://aws.amazon.com/privacy/" className="text-primary transition-colors duration-[150ms] hover:text-primaryHover" target="_blank" rel="noopener noreferrer">https://aws.amazon.com/privacy/</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">4.3 Agora.io</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li><strong>Purpose:</strong> Real-time voice and video calls</li>
                      <li><strong>Data Shared:</strong> User ID, call metadata (duration, participants). Calls are peer-to-peer and not recorded.</li>
                      <li><strong>Privacy Policy:</strong> <a href="https://www.agora.io/en/privacy-policy/" className="text-primary transition-colors duration-[150ms] hover:text-primaryHover" target="_blank" rel="noopener noreferrer">https://www.agora.io/en/privacy-policy/</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">4.4 Hive AI</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li><strong>Purpose:</strong> Image content moderation (detect inappropriate images)</li>
                      <li><strong>Data Shared:</strong> Images uploaded by users for moderation</li>
                      <li><strong>Privacy Policy:</strong> <a href="https://thehive.ai/privacy" className="text-primary transition-colors duration-[150ms] hover:text-primaryHover" target="_blank" rel="noopener noreferrer">https://thehive.ai/privacy</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">4.5 TensorFlow Lite (On-Device)</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li><strong>Purpose:</strong> Interest extraction from messages using MiniLM ML model</li>
                      <li><strong>Data Shared:</strong> None. Processing happens entirely on your device. No data sent to external servers.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">4.6 Apple App Store / Google Play Store</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li><strong>Purpose:</strong> Payment processing, subscription management</li>
                      <li><strong>Data Shared:</strong> Purchase history, subscription status</li>
                      <li><strong>Privacy Policies:</strong></li>
                      <li className="ml-4">Apple: <a href="https://www.apple.com/legal/privacy/" className="text-primary transition-colors duration-[150ms] hover:text-primaryHover" target="_blank" rel="noopener noreferrer">https://www.apple.com/legal/privacy/</a></li>
                      <li className="ml-4">Google: <a href="https://policies.google.com/privacy" className="text-primary transition-colors duration-[150ms] hover:text-primaryHover" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 5: User Safety & Content Moderation */}
              <section id="user-safety" className="scroll-mt-24">
                <h2 className="text-3xl font-medium text-slate-900 md:text-4xl">5. User Safety & Content Moderation</h2>
                
                <div className="mt-8 space-y-8">
                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">5.1 AI-Powered Moderation</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li><strong>Profanity Filter:</strong> Detects and blocks inappropriate language in messages</li>
                      <li><strong>Image Moderation (Hive AI):</strong> Scans images for explicit, violent, or harmful content</li>
                      <li><strong>Spam Detection:</strong> Identifies and blocks spam or promotional messages</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">5.2 User Reports</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>Users can report inappropriate content or behavior</li>
                      <li>Reports are reviewed by our moderation team within 24-48 hours</li>
                      <li>Users with multiple reports may face account suspension</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">5.3 Blocking & Muting</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>You can block users to prevent them from contacting you</li>
                      <li>Blocked users cannot see your profile or send messages</li>
                      <li>You can mute conversations to stop receiving notifications</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">5.4 Safety Tips</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>Never share financial information or send money to strangers</li>
                      <li>Be cautious of users asking for personal information</li>
                      <li>Report any suspicious or threatening behavior immediately</li>
                      <li>Trust your instincts—if something feels wrong, end the conversation</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 6: Subscription & Billing */}
              <section id="subscription-billing" className="scroll-mt-24">
                <h2 className="text-3xl font-medium text-slate-900 md:text-4xl">6. Subscription & Billing</h2>
                
                <div className="mt-8 space-y-8">
                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">6.1 Free vs. Premium</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li><strong>Free Users:</strong> Access to basic features with limitations (message limits, cooldown periods)</li>
                      <li><strong>Premium Users (Lite/Plus/Pro):</strong> Unlimited messages, priority matching, advanced filters, ad-free experience</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">6.2 Subscription Management</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li><strong>iOS:</strong> Manage subscriptions in Settings &gt; [Your Name] &gt; Subscriptions</li>
                      <li><strong>Android:</strong> Manage subscriptions in Google Play Store &gt; Menu &gt; Subscriptions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">6.3 Cancellation Policy</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>Cancel anytime at least 24 hours before renewal to avoid charges</li>
                      <li>You retain premium access until the end of the current billing period</li>
                      <li>No partial refunds for early cancellation</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">6.4 Price Changes</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>We may change subscription prices at any time</li>
                      <li>Existing subscribers will be notified 30 days before price changes</li>
                      <li>Price changes apply to new billing periods only</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 7: Your Rights & Choices */}
              <section id="your-rights" className="scroll-mt-24">
                <h2 className="text-3xl font-medium text-slate-900 md:text-4xl">7. Your Rights & Choices</h2>
                
                <div className="mt-8 space-y-8">
                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">7.1 Access & Correction</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>You can view and update your profile information in the app</li>
                      <li>Request a copy of your data by contacting us</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">7.2 Account Deletion</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>Delete your account anytime through app settings</li>
                      <li>Your data will be permanently deleted within 30 days</li>
                      <li>Some data may be retained as required by law</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">7.3 Data Portability</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>Request a copy of your data in a machine-readable format</li>
                      <li>Contact us at info@peppty.com</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">7.4 Marketing Communications</h3>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>We do not send marketing emails unless you opt in</li>
                      <li>Opt out anytime by contacting us</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">7.5 Cookie Policy</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      ChatHub is a mobile app and does not use browser cookies. We use device identifiers and session tokens for authentication and analytics.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">7.6 Do Not Track (DNT)</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      ChatHub does not respond to "Do Not Track" signals as they are not applicable to mobile apps.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">7.7 California Privacy Rights (CCPA)</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">If you are a California resident, you have the right to:</p>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>Know what personal information is collected</li>
                      <li>Request deletion of personal information</li>
                      <li>Opt-out of the sale of personal information (we do not sell your data)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-slate-900 md:text-2xl">7.8 GDPR Rights (European Users)</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">If you are in the European Economic Area (EEA), you have the right to:</p>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-600">
                      <li>Access, rectify, or erase your personal data</li>
                      <li>Restrict or object to processing</li>
                      <li>Data portability</li>
                      <li>Withdraw consent at any time</li>
                      <li>Lodge a complaint with a supervisory authority</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 8: Contact Us */}
              <section id="contact-us" className="scroll-mt-24">
                <h2 className="text-3xl font-medium text-slate-900 md:text-4xl">8. Contact Us</h2>
                
                <div className="mt-8 space-y-4 text-base leading-relaxed text-slate-600">
                  <p>If you have questions, concerns, or requests regarding this Privacy Policy or Terms of Service, please contact us:</p>
                  <ul className="mt-4 space-y-2">
                    <li><strong>Email:</strong> info@peppty.com</li>
                    <li><strong>App Name:</strong> ChatHub</li>
                    <li><strong>Developer:</strong> Peppty</li>
                    <li><strong>Website:</strong> www.peppty.com</li>
                    <li><strong>Response Time:</strong> We aim to respond to all inquiries within 48-72 hours.</li>
                  </ul>
                  <p className="mt-6"><strong>Acknowledgment:</strong> By using ChatHub, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy and Terms of Service.</p>
                  <p className="mt-4"><strong>Thank you for being part of the ChatHub community!</strong></p>
                  <p className="mt-6 text-sm text-slate-500">© 2025 ChatHub by Peppty. All rights reserved.</p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
