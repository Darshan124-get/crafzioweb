import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61591645697980", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/CrafZio", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/crafzio/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/crafzio.in?igsh=eDdjcWl5Z3gwbm5z", label: "Instagram" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  const services = [
    { name: "Web Development", path: "/services" },
    { name: "Application Development", path: "/services" },
    { name: "CRM Development", path: "/services" },
    { name: "E-Commerce Solutions", path: "/services" },
  ];

  return (
    <footer className="relative mt-20 border-t border-border">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-card pointer-events-none" />

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img src="/crafzio.jpeg" alt="CrafZio Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display text-2xl font-bold gradient-text">
                CrafZio
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting digital experiences for the future. We transform ideas into 
              innovative solutions that drive business growth.
            </p>
            <div className="flex gap-2 pt-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                team@crafzio.in
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                +91 7026496890
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                Tumkur, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              © {currentYear} CrafZio. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              MSME Registered | UDYAM Registration No: UDYAM-KR-25-0097087
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
