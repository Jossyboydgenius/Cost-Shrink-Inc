import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, Star, Users, Clock, Shield, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface ServiceData {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  process: string[];
  pricing: {
    title: string;
    price: string;
    description: string;
    features: string[];
  }[];
  image: string;
  color: string;
  bgColor: string;
  iconColor: string;
}

const servicesData: Record<string, ServiceData> = {
  'bookkeeping': {
    title: 'Bookkeeping',
    slug: 'bookkeeping',
    description: 'Accurate and organized records are the foundation of every strong business. We manage your books so you can focus on running your business with confidence.',
    longDescription: 'Our comprehensive bookkeeping services ensure your financial records are accurate, up-to-date, and compliant with all regulations. We handle everything from daily transaction recording to monthly reconciliations, giving you complete visibility into your business finances.',
    features: [
      'Daily transaction recording and categorization',
      'Bank and credit card reconciliation',
      'Accounts payable and receivable management',
      'Monthly financial statements preparation',
      'Cash flow tracking and analysis',
      'Expense categorization and tracking',
      'Payroll processing and reporting',
      'Sales tax preparation and filing'
    ],
    benefits: [
      'Save 10-15 hours per week on financial tasks',
      'Reduce errors by 95% with professional oversight',
      'Always audit-ready with organized records',
      'Better cash flow management and forecasting',
      'Tax preparation becomes seamless',
      'Focus on growing your business instead of paperwork'
    ],
    process: [
      'Initial consultation and system setup',
      'Chart of accounts customization',
      'Daily transaction processing',
      'Weekly reconciliation and review',
      'Monthly financial reporting',
      'Quarterly business review meetings'
    ],
    pricing: [
      {
        title: 'Starter',
        price: '$299/month',
        description: 'Perfect for small businesses with basic needs',
        features: ['Up to 50 transactions/month', 'Monthly reconciliation', 'Basic financial reports', 'Email support']
      },
      {
        title: 'Professional',
        price: '$599/month',
        description: 'Ideal for growing businesses',
        features: ['Up to 200 transactions/month', 'Weekly reconciliation', 'Detailed financial reports', 'Payroll processing', 'Phone support']
      },
      {
        title: 'Enterprise',
        price: 'Custom',
        description: 'For established businesses with complex needs',
        features: ['Unlimited transactions', 'Daily reconciliation', 'Custom reporting', 'Dedicated account manager', '24/7 support']
      }
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  'tax-filing': {
    title: 'Tax Filing',
    slug: 'tax-filing',
    description: 'We handle your tax preparation and filing with precision—minimizing errors, maximizing deductions, and ensuring you stay compliant.',
    longDescription: 'Our expert tax filing services take the stress out of tax season. We ensure maximum deductions, minimize your tax liability, and handle all the paperwork so you can focus on your business.',
    features: [
      'Complete tax return preparation',
      'Maximum deduction identification',
      'Electronic filing for faster refunds',
      'Tax liability minimization strategies',
      'Quarterly estimated tax calculations',
      'Multi-state tax filing',
      'Audit support and representation',
      'Year-round tax planning advice'
    ],
    benefits: [
      'Average tax savings of 15-25%',
      'Faster refunds with e-filing',
      'Reduced audit risk with accurate filings',
      'Peace of mind with professional preparation',
      'Time savings of 20+ hours per year',
      'Expert advice on tax law changes'
    ],
    process: [
      'Document collection and organization',
      'Comprehensive tax interview',
      'Deduction and credit analysis',
      'Tax return preparation and review',
      'Electronic filing and confirmation',
      'Follow-up and support as needed'
    ],
    pricing: [
      {
        title: 'Individual',
        price: '$199',
        description: 'For sole proprietors and simple returns',
        features: ['Form 1040 preparation', 'Schedule C (business)', 'Basic deductions', 'E-filing included']
      },
      {
        title: 'Business',
        price: '$499',
        description: 'For small businesses and partnerships',
        features: ['Business tax returns', 'Multiple schedules', 'Advanced deductions', 'Quarterly planning']
      },
      {
        title: 'Complex',
        price: '$899',
        description: 'For complex business structures',
        features: ['Multi-entity returns', 'Investment income', 'Rental properties', 'Audit protection']
      }
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  'tax-consulting': {
    title: 'Tax Consulting',
    slug: 'tax-consulting',
    description: 'From strategic tax planning to advice on complex issues, we help you make smart decisions that reduce liabilities and boost long-term savings.',
    longDescription: 'Our strategic tax consulting goes beyond basic compliance. We develop comprehensive tax strategies that minimize your long-term tax burden while ensuring full compliance with all regulations.',
    features: [
      'Strategic tax planning and forecasting',
      'Business structure optimization',
      'Tax-efficient investment strategies',
      'Retirement planning coordination',
      'Estate and succession planning',
      'Multi-year tax projections',
      'Tax law change impact analysis',
      'IRS correspondence handling'
    ],
    benefits: [
      'Long-term tax savings of 20-30%',
      'Optimized business structure for tax efficiency',
      'Proactive planning vs. reactive filing',
      'Expert guidance on complex tax matters',
      'Reduced risk of costly tax mistakes',
      'Strategic advantage in business decisions'
    ],
    process: [
      'Comprehensive financial analysis',
      'Tax situation assessment',
      'Strategy development and modeling',
      'Implementation planning',
      'Ongoing monitoring and adjustments',
      'Annual strategy review and updates'
    ],
    pricing: [
      {
        title: 'Consultation',
        price: '$150/hour',
        description: 'One-time advice and guidance',
        features: ['Tax strategy review', 'Specific question answers', 'Written recommendations', 'Follow-up email support']
      },
      {
        title: 'Annual Planning',
        price: '$1,200/year',
        description: 'Comprehensive yearly tax strategy',
        features: ['Quarterly strategy sessions', 'Tax projections', 'Implementation support', 'Priority phone access']
      },
      {
        title: 'Ongoing Advisory',
        price: '$2,400/year',
        description: 'Year-round strategic partnership',
        features: ['Monthly check-ins', 'Unlimited consultations', 'Real-time strategy adjustments', 'Dedicated advisor']
      }
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50',
    iconColor: 'text-yellow-600'
  },
  'cost-monitoring': {
    title: 'Cost Monitoring',
    slug: 'cost-monitoring',
    description: 'We track your expenses closely, giving you a clear picture of where your money goes and uncovering hidden inefficiencies.',
    longDescription: 'Our advanced cost monitoring systems provide real-time visibility into your business expenses, helping you identify trends, spot anomalies, and uncover opportunities for savings.',
    features: [
      'Real-time expense tracking and categorization',
      'Automated expense reporting and alerts',
      'Vendor spending analysis and benchmarking',
      'Budget variance tracking and reporting',
      'Cost trend analysis and forecasting',
      'Department-wise cost allocation',
      'ROI analysis for major expenditures',
      'Custom dashboard and KPI tracking'
    ],
    benefits: [
      'Identify cost savings of 10-20% annually',
      'Real-time visibility into spending patterns',
      'Early detection of budget overruns',
      'Data-driven decision making',
      'Improved vendor negotiations',
      'Better resource allocation'
    ],
    process: [
      'Current expense analysis and baseline',
      'Monitoring system setup and integration',
      'Custom reporting dashboard creation',
      'Weekly expense review and analysis',
      'Monthly trend reporting',
      'Quarterly optimization recommendations'
    ],
    pricing: [
      {
        title: 'Basic',
        price: '$199/month',
        description: 'Essential monitoring for small businesses',
        features: ['Expense categorization', 'Monthly reports', 'Basic alerts', 'Email support']
      },
      {
        title: 'Advanced',
        price: '$399/month',
        description: 'Comprehensive monitoring and analysis',
        features: ['Real-time tracking', 'Custom dashboards', 'Trend analysis', 'Weekly reviews']
      },
      {
        title: 'Enterprise',
        price: '$699/month',
        description: 'Full-scale monitoring with optimization',
        features: ['Multi-location tracking', 'Predictive analytics', 'Dedicated analyst', 'Daily monitoring']
      }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  'cost-control': {
    title: 'Cost Control',
    slug: 'cost-control',
    description: 'We design practical strategies to curb unnecessary spending—helping you maintain quality while reducing waste.',
    longDescription: 'Our cost control strategies help you implement systematic approaches to reduce unnecessary expenses while maintaining operational efficiency and quality standards.',
    features: [
      'Expense approval workflow implementation',
      'Vendor contract renegotiation',
      'Procurement process optimization',
      'Waste reduction strategies',
      'Energy efficiency improvements',
      'Technology cost optimization',
      'Staff productivity enhancement',
      'Inventory management optimization'
    ],
    benefits: [
      'Reduce operational costs by 15-25%',
      'Maintain quality while cutting expenses',
      'Improved cash flow and profitability',
      'Streamlined approval processes',
      'Better vendor relationships',
      'Sustainable cost reduction practices'
    ],
    process: [
      'Comprehensive cost audit and analysis',
      'Opportunity identification and prioritization',
      'Control strategy development',
      'Implementation planning and execution',
      'Progress monitoring and adjustment',
      'Results measurement and reporting'
    ],
    pricing: [
      {
        title: 'Assessment',
        price: '$999',
        description: 'One-time cost control audit',
        features: ['Expense analysis', 'Opportunity identification', 'Action plan', '30-day follow-up']
      },
      {
        title: 'Implementation',
        price: '$1,999',
        description: 'Full strategy implementation',
        features: ['Strategy development', 'Process setup', 'Staff training', '90-day support']
      },
      {
        title: 'Ongoing',
        price: '$599/month',
        description: 'Continuous cost control management',
        features: ['Monthly reviews', 'Strategy adjustments', 'Performance tracking', 'Quarterly reporting']
      }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600'
  },
  'cost-management': {
    title: 'Cost Management',
    slug: 'cost-management',
    description: 'Beyond cutting costs, we help you manage them strategically, so your resources are allocated effectively to fuel growth.',
    longDescription: 'Our comprehensive cost management approach balances cost reduction with strategic investment, ensuring your resources are allocated to drive maximum business growth and profitability.',
    features: [
      'Strategic cost allocation and budgeting',
      'ROI-based investment prioritization',
      'Performance-based cost management',
      'Growth-oriented resource allocation',
      'Cost-benefit analysis for major decisions',
      'Long-term financial planning',
      'Risk-adjusted cost strategies',
      'Competitive cost benchmarking'
    ],
    benefits: [
      'Optimize resource allocation for growth',
      'Balance cost reduction with investment',
      'Improve overall business profitability',
      'Make data-driven financial decisions',
      'Achieve sustainable competitive advantage',
      'Maximize return on every dollar spent'
    ],
    process: [
      'Business goals and strategy alignment',
      'Current cost structure analysis',
      'Strategic cost management plan development',
      'Implementation roadmap creation',
      'Ongoing performance monitoring',
      'Regular strategy optimization'
    ],
    pricing: [
      {
        title: 'Strategy',
        price: '$2,499',
        description: 'Comprehensive cost management strategy',
        features: ['Strategic analysis', 'Management plan', 'Implementation roadmap', '60-day support']
      },
      {
        title: 'Execution',
        price: '$4,999',
        description: 'Full strategy execution and setup',
        features: ['Complete implementation', 'System setup', 'Team training', '6-month support']
      },
      {
        title: 'Partnership',
        price: '$1,299/month',
        description: 'Ongoing strategic cost management',
        features: ['Monthly strategy reviews', 'Continuous optimization', 'Executive reporting', 'Priority support']
      }
    ],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600'
  }
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/#services" 
              className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {service.longDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#29587A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1e3f5a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto max-[420px]:w-full">
                  Get Started Today
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 w-full sm:w-auto max-[420px]:w-full">
                  Free Consultation
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="flex items-center justify-center w-16 h-16 bg-[#29587A] rounded-full mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">500+</div>
                    <div className="text-gray-300">Happy Clients</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center w-16 h-16 bg-[#29587A] rounded-full mx-auto mb-4">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">4.9/5</div>
                    <div className="text-gray-300">Client Rating</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center w-16 h-16 bg-[#29587A] rounded-full mx-auto mb-4">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">24/7</div>
                    <div className="text-gray-300">Support</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center w-16 h-16 bg-[#29587A] rounded-full mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">100%</div>
                    <div className="text-gray-300">Secure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What&apos;s <span className="bg-gradient-to-r from-[#29587A] to-[#1e3f5a] bg-clip-text text-transparent">Included</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive {service.title.toLowerCase()} service includes everything you need to succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#29587A]" />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Choose Our <span className="bg-gradient-to-r from-[#29587A] to-[#1e3f5a] bg-clip-text text-transparent">{service.title}</span> Service?
              </h2>
              <div className="space-y-6">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-[#29587A] rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Image
                src={service.image}
                alt={`${service.title} benefits`}
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#29587A]/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#29587A] via-[#1e3f5a] to-[#0f2027]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started with {service.title}?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join hundreds of satisfied clients who have transformed their business finances with our expert {service.title.toLowerCase()} services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#29587A] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center">
              Start Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <a href="tel:+15551234567" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#29587A] transition-all duration-300">
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug];
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }
  
  return {
    title: `${service.title} Services - Cost Shrink Inc`,
    description: service.description,
    keywords: `${service.title.toLowerCase()}, cost shrink inc, financial services, small business`,
  };
}