'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Bookkeeping',
    'Tax Filing',
    'Tax Consulting',
    'Cost Monitoring',
    'Cost Control',
    'Cost Management',
    'General Consultation'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-semibold leading-relaxed">
            Ready to start saving money and growing your business? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Let&apos;s Start a Conversation
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-8 font-medium">
                We&apos;re here to help you reduce costs and improve your business&apos;s financial health. Reach out to us through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-[#29587A] to-[#1e3f5a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Phone</h4>
                  <p className="text-base text-gray-800 font-semibold">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500 font-medium">Mon-Fri 9AM-6PM, Sat 10AM-4PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-[#29587A] to-[#1e3f5a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Email</h4>
                  <p className="text-lg text-gray-800 font-semibold">info@costshrink.com</p>
                  <p className="text-sm text-gray-500 font-medium">We&apos;ll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-[#29587A] to-[#1e3f5a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Office</h4>
                  <p className="text-sm text-gray-500 font-medium">123 Business Ave, Suite 100</p>
                  <p className="text-sm text-gray-500 font-medium">Financial District, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-[#29587A] to-[#1e3f5a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Business Hours</h4>
                  <p className="text-sm text-gray-500 font-medium">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-500 font-medium">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-sm text-gray-500 font-medium">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#29587A] to-[#1e3f5a] rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Free Consultation</h4>
              <p className="text-blue-100 mb-6 font-medium text-base">
                Get a personalized assessment of your business finances and discover potential savings opportunities.
              </p>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-blue-100 font-medium text-sm">No obligation • 30-minute session • Expert advice</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 font-medium">We&apos;ve received your message and will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29587A] focus:border-transparent transition-all duration-200 placeholder:font-medium placeholder:text-gray-500"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29587A] focus:border-transparent transition-all duration-200 placeholder:font-medium placeholder:text-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29587A] focus:border-transparent transition-all duration-200 placeholder:font-medium placeholder:text-gray-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-800 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29587A] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29587A] focus:border-transparent transition-all duration-200 resize-none placeholder:font-medium placeholder:text-gray-500"
                    placeholder="Tell us about your business and how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#29587A] to-[#1e3f5a] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center group"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;