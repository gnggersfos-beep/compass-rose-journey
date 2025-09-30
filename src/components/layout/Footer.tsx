import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, MessageCircle, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/27625803352", "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Places", href: "/places" },
    { name: "Things To Do", href: "/things-to-do" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Airport Transfers", href: "/services/airport-transfers" },
    { name: "Custom Tours", href: "/services/custom-tours" },
    { name: "Wine Tours", href: "/services/wine-tours" },
    { name: "Adventure Trips", href: "/services/adventure-trips" },
  ];

  return (
    <footer className="bg-gradient-mountain text-primary-foreground relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground w-12 h-12 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Compass Rose Travel</h3>
            <p className="text-sm opacity-90">
              Your trusted partner for unforgettable Cape Town adventures. Discover the beauty of the Mother City with our expert guides.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/CompassRoseTravelDesign/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/compassrosetrvl/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:translate-x-1 inline-block transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:translate-x-1 inline-block transition-all"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start space-x-2 text-sm opacity-90">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Frizita Business Complex, Cape Town, 7441</span>
              </li>
              <li className="flex items-center space-x-2 text-sm opacity-90">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+27625803352" className="hover:opacity-100">
                  +27 62 580 3352
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm opacity-90">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@compassrosetravel.co.za" className="hover:opacity-100">
                  info@compassrosetravel.co.za
                </a>
              </li>
            </ul>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Subscribe to our newsletter</p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm opacity-75">
            © 2025 Compass Rose Travel. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm opacity-75">
            <Link to="/privacy" className="hover:opacity-100">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:opacity-100">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 bg-success text-success-foreground w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center z-50 animate-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;
