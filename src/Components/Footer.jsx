import React from "react";
import { Mail, Phone, MapPin, Twitter, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glassmorphic-card rounded-sm shadow-2xl p-8 md:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            FreeLance MarketPlace
          </h3>
          <p className=" text-sm">
            Connecting freelancers and clients in a seamless digital workspace.
            Explore jobs, post opportunities, and manage tasks efficiently.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold  mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:underline ">About</a>
            </li>
            <li>
              <a href="/faq" className="hover:underline ">FAQ</a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline ">Privacy & Terms</a>
            </li>
          </ul>
        </div>

        {/* Contact Info & Social */}
        <div>
          <h3 className="text-lg font-semibold  mb-4">Contact</h3>
          <ul className="space-y-2  text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@freelancemarketplace.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +880123-4567849
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> 765 Freelance St, Worktown, USA
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className=" hover:text-indigo-500 transition"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className=" hover:text-indigo-500 transition"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className=" hover:text-indigo-500 transition"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center  text-xs">
        &copy;2025 FreeLance MarketPlace. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
