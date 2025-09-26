import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConsultationForm from "@/components/ConsultationForm";
import {
  CheckCircle,
  Phone,
  Mail,
  User,
  Building,
  DollarSign,
} from "lucide-react";

const ConsultationPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#29587A] via-[#1e3f5a] to-[#0f2027]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get Your{" "}
              <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Free Consultation
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover how much your business could save with our expert
              financial solutions. Schedule a personalized 30-minute
              consultation with our specialists.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>No obligation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>30-minute session</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Expert advice</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Personalized recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What You&apos;ll Get From Your Consultation
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our expert consultants will analyze your current financial
                  situation and provide actionable insights to help your
                  business save money and improve profitability.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#29587A] to-[#1e3f5a] rounded-xl flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      Cost Savings Analysis
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Identify immediate opportunities to reduce expenses and
                      improve cash flow in your business operations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#29587A] to-[#1e3f5a] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      Business Structure Review
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Evaluate your current business structure and identify
                      tax-efficient improvements and optimizations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#29587A] to-[#1e3f5a] rounded-xl flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      Personalized Action Plan
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Receive a customized roadmap with specific steps to
                      implement cost-saving strategies in your business.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#29587A] to-[#1e3f5a] rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" /></div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      Service Recommendations
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Get expert recommendations on which of our services would
                      benefit your business most.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
                  Prefer to Talk Now?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#29587A] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">
                        Call us directly
                      </p>
                      <a
                        href="tel:+14166168348"
                        className="text-[#29587A] hover:text-[#1e3f5a] font-medium text-sm sm:text-base"
                      >
                        +1 (416) 616-8348
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#29587A] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">
                        Send us an email
                      </p>
                      <a
                        href="mailto:info@costshrinkinc.com"
                        className="text-[#29587A] hover:text-[#1e3f5a] font-medium text-sm sm:text-base break-all"
                      >
                        info@costshrinkinc.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultationPage;

export function generateMetadata() {
  return {
    title: "Free Consultation - Cost Shrink Inc",
    description:
      "Schedule a free 30-minute consultation with our financial experts. Discover how much your business could save with our cost reduction strategies.",
    keywords:
      "free consultation, cost reduction, financial consulting, business savings, cost shrink inc",
  };
}
