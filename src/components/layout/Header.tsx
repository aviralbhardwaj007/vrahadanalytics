
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "About Us", path: "/about" },
  { title: "Clients", path: "/clients" },
  { title: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="font-bold text-2xl bg-gradient-to-r from-vrahad-blue to-vrahad-purple bg-clip-text text-transparent">
              Vrahad Analytics
            </div>
            <div className="hidden md:block text-sm text-slate-600 font-medium">
              Data & GenAI Company
            </div>
          </Link>

          {/* Contact info for desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="mailto:contact@vrahadanalytics.com" className="flex items-center gap-2 text-sm text-slate-700 hover:text-vrahad-blue transition-colors">
              <Mail size={16} />
              <span>contact@vrahadanalytics.com</span>
            </a>
            <a href="tel:+11234567890" className="flex items-center gap-2 text-sm text-slate-700 hover:text-vrahad-blue transition-colors">
              <Phone size={16} />
              <span>+1 (123) 456-7890</span>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === link.path
                    ? "text-vrahad-blue"
                    : "text-slate-700 hover:text-vrahad-blue"
                )}
              >
                {link.title}
              </Link>
            ))}
            <Button variant="default" className="ml-4 bg-gradient-to-r from-vrahad-blue to-vrahad-purple hover:from-vrahad-purple hover:to-vrahad-blue transition-all">
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-md transition-colors",
                    location.pathname === link.path
                      ? "bg-slate-100 text-vrahad-blue"
                      : "text-slate-700 hover:bg-slate-50 hover:text-vrahad-blue"
                  )}
                >
                  {link.title}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-slate-200 flex flex-col gap-3 px-4">
                <a href="mailto:contact@vrahadanalytics.com" className="flex items-center gap-2 text-sm text-slate-700">
                  <Mail size={16} />
                  <span>contact@vrahadanalytics.com</span>
                </a>
                <a href="tel:+11234567890" className="flex items-center gap-2 text-sm text-slate-700">
                  <Phone size={16} />
                  <span>+1 (123) 456-7890</span>
                </a>
                <Button variant="default" className="mt-2 bg-gradient-to-r from-vrahad-blue to-vrahad-purple hover:from-vrahad-purple hover:to-vrahad-blue transition-all">
                  Get Started
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
