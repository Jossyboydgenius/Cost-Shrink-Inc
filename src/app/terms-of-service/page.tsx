import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FileText, Scale, AlertTriangle, Users, Shield, Clock } from 'lucide-react';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#29587A] via-[#1e3f5a] to-[#0f2027]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms of <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Please read these terms carefully before using our services. By using our website and services, you agree to be bound by these terms.
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-100">
              <Clock className="w-5 h-5" />
              <span>Last updated: January 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement to Terms</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and Cost Shrink Inc (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) regarding your use of our website and services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#29587A] rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Description of Services</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                Cost Shrink Inc provides financial consulting and cost reduction services to businesses, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Business financial analysis and consultation</li>
                <li>Cost reduction strategy development</li>
                <li>Tax planning and optimization services</li>
                <li>Business structure consulting</li>
                <li>Financial process improvement recommendations</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#29587A] rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">User Responsibilities</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                By using our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Respect the intellectual property rights of others</li>
              </ul>
            </div>

            {/* Prohibited Uses */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Prohibited Uses</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                You may not use our services:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
                <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#29587A] rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Intellectual Property Rights</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                The content, features, and functionality of our website and services are owned by Cost Shrink Inc and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our content without our prior written consent.
              </p>
            </div>

            {/* Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices regarding the collection and use of your personal information.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Disclaimers</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h3>
                    <p className="text-yellow-700 leading-relaxed">
                      The information and services provided by Cost Shrink Inc are for general informational purposes only and do not constitute professional financial, legal, or tax advice.
                    </p>
                  </div>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Our services are provided &quot;as is&quot; without warranties of any kind</li>
                <li>We do not guarantee specific results or outcomes</li>
                <li>You should consult with qualified professionals for specific advice</li>
                <li>We are not responsible for decisions made based on our recommendations</li>
                <li>Past performance does not guarantee future results</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To the fullest extent permitted by applicable law, Cost Shrink Inc shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Loss of data or information</li>
                <li>Business interruption</li>
                <li>Personal injury or property damage</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Our total liability shall not exceed the amount paid by you for our services in the twelve months preceding the claim.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Indemnification</h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to defend, indemnify, and hold harmless Cost Shrink Inc and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of our services or violation of these Terms.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Upon termination, your right to use our services will cease immediately, and any provisions of these Terms that should survive termination will remain in effect.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of [Your State/Province], without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the updated Terms on our website and updating the &quot;Last Updated&quot; date. Your continued use of our services after any changes constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Severability</h2>
              <p className="text-gray-600 leading-relaxed">
                If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect, and the invalid provision will be replaced with a valid provision that most closely reflects the intent of the original provision.
              </p>
            </div>

            {/* Entire Agreement */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Entire Agreement</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Cost Shrink Inc regarding your use of our services and supersede all prior agreements and understandings.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-3 text-gray-600">
                <p><strong>Cost Shrink Inc</strong></p>
                <p>Email: <a href="mailto:legal@costshrink.com" className="text-[#29587A] hover:text-[#1e3f5a] font-medium">legal@costshrink.com</a></p>
                <p>Phone: <a href="tel:+15551234567" className="text-[#29587A] hover:text-[#1e3f5a] font-medium">+1 (555) 123-4567</a></p>
                <p>Address: [Your Business Address]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfServicePage;

export function generateMetadata() {
  return {
    title: 'Terms of Service - Cost Shrink Inc',
    description: 'Read the terms and conditions for using Cost Shrink Inc services. Understand your rights and responsibilities when using our financial consulting services.',
    keywords: 'terms of service, terms and conditions, legal agreement, cost shrink inc',
  };
}