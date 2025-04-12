
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-vrahad-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Vrahad Analytics
            </h3>
            <p className="text-slate-300 mb-4 max-w-xs">
              Empowering businesses through advanced data analytics and 
              cutting-edge GenAI solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-slate-300 hover:text-white transition-colors">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white transition-colors">
                  AWS Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white transition-colors">
                  Azure Support
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white transition-colors">
                  Data Migration
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white transition-colors">
                  Big Data Processing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white transition-colors">
                  Databricks Support
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white transition-colors">
                  Cost Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="min-w-[20px] mt-1 text-slate-400" />
                <a href="mailto:contact@vrahadanalytics.com" className="text-slate-300 hover:text-white transition-colors">
                  contact@vrahadanalytics.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="min-w-[20px] mt-1 text-slate-400" />
                <a href="tel:+11234567890" className="text-slate-300 hover:text-white transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="min-w-[20px] mt-1 text-slate-400" />
                <span className="text-slate-300">
                  123 Tech Avenue, Silicon Valley, CA 94025, USA
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 text-center text-slate-400 text-sm">
          <p>© {currentYear} Vrahad Analytics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
