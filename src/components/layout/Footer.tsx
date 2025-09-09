import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Instagram,
  Facebook,
} from "lucide-react";

const Footer = () => {
  const services = [
    "Bookkeeping",
    "Tax Filing",
    "Tax Consulting",
    "Cost Monitoring",
    "Cost Control",
    "Cost Management",
  ];

  const quickLinks = [
    { name: "About Us", href: "/#about" },
    { name: "Our Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
    { name: "Free Consultation", href: "/consultation" },
  ];

  return (
    <footer className="bg-[#29587A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex flex-col items-start space-y-4 mb-6">
                <Image
                  src="/logoo.png"
                  alt="Logo"
                  width={180}
                  height={180}
                  className="h-40 w-40 object-contain filter drop-shadow-sm"
                  quality={100}
                />
                <div className="text-blue-200 text-lg font-bold">
                  Shrink cost, grow profit
                </div>
              </div>

              <p className="text-white leading-relaxed mb-6 max-w-md font-medium">
                We provide small businesses and sole proprietors with practical
                financial solutions that reduce expenses and strengthen
                profitability.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-semibold">
                    info@costshrink.ca
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-semibold">
                    +1 (416) 616-8348
                  </span>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-semibold">
                    Cost Shrink
                    <br />
                    2544 Weston Rd Unit #614
                    <br />
                    North York, ON M9N 2A6
                  </span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-6">
                <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/cost_shrink/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1B9zgi3Wfo/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href="/#services"
                      className="text-white hover:text-blue-200 transition-colors duration-200 font-medium text-base"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-blue-200 transition-colors duration-200 font-medium text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h4 className="text-base font-bold mb-4">Business Hours</h4>
                <div className="text-white text-sm space-y-1 font-medium">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                  <div>Saturday: 10:00 AM - 4:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-white/20 py-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Start{" "}
              <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Saving Money?
              </span>
            </h3>
            <p className="text-white mb-8 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
              Get a free consultation and discover how much you could save with
              our expert financial solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/consultation"
                className="group bg-white text-[#29587A] px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href="tel:+14166168348"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#29587A] transition-all duration-300 flex items-center justify-center"
              >
                Call Now
                <Phone className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white text-sm font-semibold">
              © 2025 All rights reserved.
            </div>

            <div className="flex items-center space-x-8">
              <Link
                href="/privacy-policy"
                className="text-white hover:text-blue-200 text-sm transition-colors duration-200 font-semibold"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-white hover:text-blue-200 text-sm transition-colors duration-200 font-semibold"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
