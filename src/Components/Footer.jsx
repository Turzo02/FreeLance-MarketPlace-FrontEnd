import React from "react";
import { Mail, Phone, MapPin, Twitter, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 text-card-foreground transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
        
        {/* About Section - Spans 5 columns on desktop */}
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            FreeLance MarketPlace
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            Connecting freelancers and clients in a seamless digital workspace.
            Explore jobs, post opportunities, and manage tasks efficiently with
            our secure platform.
          </p>
        </div>

        {/* Navigation Links - Spans 3 columns */}
        <div className="md:col-span-3">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {["About", "FAQ", "Privacy & Terms"].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase().replace(/ & /g, "-")}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="h-px w-0 bg-primary group-hover:w-3 transition-all duration-300"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info & Social - Spans 4 columns */}
        <div className="md:col-span-4">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Contact Us
          </h3>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-start gap-3 group">
              <Mail className="size-5 text-primary shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span className="group-hover:text-foreground transition-colors">
                support@freelancemarketplace.com
              </span>
            </li>
            <li className="flex items-start gap-3 group">
              <Phone className="size-5 text-primary shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span className="group-hover:text-foreground transition-colors">
                +880 123-456-789
              </span>
            </li>
            <li className="flex items-start gap-3 group">
              <MapPin className="size-5 text-primary shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span className="group-hover:text-foreground transition-colors">
                765 Freelance St, Worktown, USA
              </span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            {[
              { icon: Twitter, label: "Twitter" },
              { icon: Youtube, label: "YouTube" },
              { icon: Facebook, label: "Facebook" },
            ].map((Social, idx) => (
              <a
                key={idx}
                href="#"
                aria-label={Social.label}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
              >
                <Social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-border mt-12 pt-8 text-center">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} FreeLance MarketPlace. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
