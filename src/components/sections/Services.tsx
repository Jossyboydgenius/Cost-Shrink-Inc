import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  FileText,
  Lightbulb,
  Search,
  Zap,
  Target,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Bookkeeping",
      slug: "bookkeeping",
      description:
        "Accurate and organized records are the foundation of every strong business. We manage your books so you can focus on running your business with confidence.",
      icon: BarChart3,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      image:
        "https://plus.unsplash.com/premium_photo-1661335273735-28702a0e32a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "Tax Filing",
      slug: "tax-filing",
      description:
        "We handle your tax preparation and filing with precision—minimizing errors, maximizing deductions, and ensuring you stay compliant.",
      icon: FileText,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      image:
        "https://plus.unsplash.com/premium_photo-1679922747473-f7210acb783e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHRheHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Tax Consulting",
      slug: "tax-consulting",
      description:
        "From strategic tax planning to advice on complex issues, we help you make smart decisions that reduce liabilities and boost long-term savings.",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Cost Monitoring",
      slug: "cost-monitoring",
      description:
        "We track your expenses closely, giving you a clear picture of where your money goes and uncovering hidden inefficiencies.",
      icon: Search,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Cost Control",
      slug: "cost-control",
      description:
        "We design practical strategies to curb unnecessary spending—helping you maintain quality while reducing waste.",
      icon: Zap,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Cost Management",
      slug: "cost-management",
      description:
        "Beyond cutting costs, we help you manage them strategically, so your resources are allocated effectively to fuel growth.",
      icon: Target,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#29587A]/10 rounded-full text-sm font-semibold text-[#29587A] mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Comprehensive Financial Solutions
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-8">
            Our{" "}
            <span className="bg-gradient-to-r from-[#29587A] to-[#1e3f5a] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            We provide small businesses and sole proprietors with practical
            financial solutions that reduce expenses and strengthen
            profitability. Every service is designed to help you stay compliant,
            efficient, and cost-effective.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-white/50 hover:border-white/80 hover:-translate-y-2"
              >
                {/* Service Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute top-6 left-6 ${service.bgColor} rounded-2xl p-4 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#29587A] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6 text-base font-medium">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[#29587A] font-bold text-lg hover:text-[#1e3f5a] transition-all duration-300 flex items-center group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-[#29587A] via-[#1e3f5a] to-[#0f2027] rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-5xl font-bold mb-8">
                Ready to Start{" "}
                <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Saving?
                </span>
              </h3>
              <p className="text-blue-100 mb-10 max-w-3xl mx-auto text-xl leading-relaxed font-medium">
                Let us help you identify cost-saving opportunities and implement
                strategies that will boost your bottom line.
              </p>
              <Link
                href="/consultation"
                className="group bg-white text-[#29587A] px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center mx-auto"
              >
                Get Free Consultation
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
