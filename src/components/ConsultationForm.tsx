'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    employees: '',
    currentChallenges: '',
    preferredDate: '',
    preferredTime: '',
    additionalInfo: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const industries = [
    'Technology',
    'Healthcare',
    'Manufacturing',
    'Retail',
    'Professional Services',
    'Construction',
    'Real Estate',
    'Food & Beverage',
    'Education',
    'Non-Profit',
    'Other'
  ];

  const employeeRanges = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
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
    console.log('Consultation form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        industry: '',
        employees: '',
        currentChallenges: '',
        preferredDate: '',
        preferredTime: '',
        additionalInfo: ''
      });
    }, 5000);
  };

  return (
    <>
      {isSubmitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Consultation Scheduled!</h3>
          <p className="text-gray-600 mb-4">Thank you for scheduling your free consultation. We&apos;ll contact you within 24 hours to confirm your appointment.</p>
          <p className="text-sm text-gray-500">Check your email for confirmation details.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Free Consultation</h3>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29587A] focus:border-transparent transition-all duration-200"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29587A] focus:border-transparent transition-all duration-200"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29587A] focus:border-transparent transition-all duration-200"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29587A] focus:border-transparent transition-all duration-200"
                placeholder="Your company name"
              />
            </div>
          </div>

          {/* Business Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                Industry
              </label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29587A] focus:border-transparent transition-all duration-200"
              >
                <option value="">Select your industry</option>
                {industries.map((industry, index) => (
                  <option key={index} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                Company Size
              </label>
              <select
                id="employees"
                name="employees"
                value={formData.employees}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29587A] focus:border-transparent transition-all duration-200"
              >
                <option value="">Select company size</option>
                {employeeRanges.map((range, index) => (
                  <option key={index} value={range}>{range}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Scheduling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29587A] focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Time
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29587A] focus:border-transparent transition-all duration-200"
              >
                <option value="">Select preferred time</option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Current Challenges */}
          <div>
            <label htmlFor="currentChallenges" className="block text-sm font-medium text-gray-700 mb-2">
              Current Financial Challenges *
            </label>
            <textarea
              id="currentChallenges"
              name="currentChallenges"
              value={formData.currentChallenges}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29587A] focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Describe your main financial challenges or areas where you'd like to reduce costs..."
            />
          </div>

          {/* Additional Information */}
          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29587A] focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Any additional information you'd like us to know before the consultation..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#29587A] to-[#1e3f5a] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center group"
          >
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </form>
      )}
    </>
  );
};

export default ConsultationForm;