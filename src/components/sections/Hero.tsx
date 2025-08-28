import Image from 'next/image';
import Link from 'next/link';
import { TrendingDown, TrendingUp, ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-[#29587A] via-[#1e3f5a] to-[#0f2027] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold text-white border border-white/30 shadow-lg">
                <TrendingUp className="w-4 h-4 mr-2" />
                Trusted by 500+ Small Businesses
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Shrink cost,<br/>
                <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">grow profit</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100/90 leading-relaxed max-w-2xl">
                We provide small businesses and sole proprietors with practical financial solutions that reduce expenses and strengthen profitability.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-blue-100/80 max-w-xl font-medium">
                Every service is designed to help you stay compliant, efficient, and cost-effective.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 relative z-30">
                <Link
                  href="#services"
                  className="group bg-white text-[#29587A] px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
                >
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="#about"
                  className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#29587A] transition-all duration-300 flex items-center justify-center"
                >
                  Learn About Us
                  <ChevronDown className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/20">
              <div className="group">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">13+</div>
                <div className="text-blue-100/80 font-medium">Years Experience</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-blue-100/80 font-medium">Certified Expertise</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative z-10 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80"
                alt="Financial consulting and cost management"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-white/10"
              />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-sm text-[#29587A] p-6 rounded-2xl shadow-xl z-10 hover:scale-105 transition-transform duration-300 border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <TrendingDown className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-600">Cost Reduction</div>
                  <div className="text-lg font-bold">-35%</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm text-[#29587A] p-6 rounded-2xl shadow-xl z-10 hover:scale-105 transition-transform duration-300 border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-600">Profit Growth</div>
                  <div className="text-lg font-bold">+42%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;