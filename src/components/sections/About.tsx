import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const specializations = [
    'Bookkeeping',
    'Tax Filing & Consulting',
    'Cost Monitoring & Control',
    'Cost Management'
  ];

  const achievements = [
    {
      number: '13+',
      label: 'Years of Experience',
      description: 'Hands-on cost control expertise'
    },
    {
      number: '100%',
      label: 'Certified',
      description: 'Chartered Accountant credentials'
    },
    {
      number: '500+',
      label: 'Businesses Helped',
      description: 'Small businesses and sole proprietors'
    },
    {
      number: '30%',
      label: 'Average Savings',
      description: 'Cost reduction for our clients'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
            At Cost Shrink Inc., we believe that every dollar counts—especially for small businesses and sole proprietors.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-gray-900">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Our mission is simple: to help you reduce costs to the barest minimum without compromising quality, so you can focus on growing your business with confidence.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900">
                We specialize in:
              </h4>
              <ul className="space-y-4">
                {specializations.map((item, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#29587A] to-[#1e3f5a] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-semibold text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 p-8 rounded-2xl border border-gray-100">
              <p className="text-gray-800 leading-relaxed italic text-xl font-medium">
                &ldquo;We don&apos;t just crunch numbers. We partner with you to uncover opportunities, improve efficiency, and protect your bottom line. Whether you&apos;re a sole proprietor or managing a growing small business, we provide practical solutions tailored to your unique needs.&rdquo;
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional financial consulting"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#29587A] text-white p-6 rounded-lg shadow-lg z-20">
              <div className="text-center">
                <div className="text-2xl font-bold">13+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-gradient-to-r from-[#29587A] to-[#1e3f5a] rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-3xl font-bold">
                Expert Leadership
              </h3>
              <p className="text-blue-100 leading-relaxed font-medium text-lg">
                With over 13 years of hands-on cost control experience, our founder—a certified chartered accountant—brings proven expertise in identifying hidden savings, streamlining financial operations, and guiding businesses toward smarter, more sustainable financial practices.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🎓</span>
                </div>
                <div>
                  <div className="font-bold text-lg">Certified Chartered Accountant</div>
                  <div className="text-blue-200 text-base font-medium">Professional credentials and expertise</div>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="text-5xl font-bold bg-gradient-to-br from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 text-center">CA</div>
                <div className="text-blue-100 text-base font-medium tracking-wide">Chartered Accountant</div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-200 to-cyan-200 mx-auto mt-3 group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#29587A] mb-3">
                {achievement.number}
              </div>
              <div className="text-xl font-bold text-gray-900 mb-2">
                {achievement.label}
              </div>
              <div className="text-base text-gray-600 font-medium">
                {achievement.description}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Your success is our business.
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
            Ready to transform your business finances? Let&apos;s work together to uncover savings and drive growth.
          </p>
          <button className="bg-[#29587A] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#1e3f5a] transition-colors duration-200">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;