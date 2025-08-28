import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Shield, Eye, Lock, Users, FileText, Clock } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#29587A] via-[#1e3f5a] to-[#0f2027]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Cost Shrink Inc (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By using our website or services, you consent to the data practices described in this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#29587A] rounded-xl flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Name and contact information (email address, phone number, mailing address)</li>
                    <li>Company information (business name, industry, size)</li>
                    <li>Financial information relevant to our services</li>
                    <li>Communication preferences</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    When you visit our website, we may automatically collect certain information, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>IP address and browser information</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website or source</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#29587A] rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Providing and maintaining our services</li>
                <li>Processing consultation requests and communications</li>
                <li>Improving our website and services</li>
                <li>Sending you relevant information about our services</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Complying with legal obligations</li>
                <li>Protecting against fraud and ensuring security</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#29587A] rounded-xl flex items-center justify-center">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Information Sharing and Disclosure</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, property, or safety</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#29587A] rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Data Security</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Employee training on data protection practices</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#29587A] rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Your Rights and Choices</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                You have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Access:</strong> You may request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> You may request that we correct any inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> You may request that we delete your personal information, subject to certain exceptions</li>
                <li><strong>Opt-out:</strong> You may opt out of receiving marketing communications from us</li>
                <li><strong>Data Portability:</strong> You may request a copy of your personal information in a structured format</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve our website functionality</li>
                <li>Provide personalized content and advertisements</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                You can control cookies through your browser settings, but disabling cookies may affect the functionality of our website.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your personal information, we will securely delete or anonymize it.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Children&apos;s Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the &quot;Last Updated&quot; date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-3 text-gray-600">
                <p><strong>Cost Shrink Inc</strong></p>
                <p>Email: <a href="mailto:privacy@costshrink.com" className="text-[#29587A] hover:text-[#1e3f5a] font-medium">privacy@costshrink.com</a></p>
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

export default PrivacyPolicyPage;

export function generateMetadata() {
  return {
    title: 'Privacy Policy - Cost Shrink Inc',
    description: 'Learn how Cost Shrink Inc collects, uses, and protects your personal information. Our comprehensive privacy policy explains our data practices and your rights.',
    keywords: 'privacy policy, data protection, personal information, cost shrink inc',
  };
}