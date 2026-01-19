import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Youtube,
  Facebook,
  ArrowUpRight,
  Check,
  Loader2,
  Send,
} from "lucide-react";
import { Link } from "react-router"; // or "react-router-dom"
import Logo from "./Logo/Logo";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setEmail("");

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }, 1500);
  };
  return (
    <footer className="relative bg-background pt-24 pb-12 overflow-hidden border-t border-border transition-colors duration-300">
      {/* --- Ambient Background --- */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Giant Typography Background (Watermark) */}
      <div className="absolute bottom-0 left-0 right-0 select-none pointer-events-none overflow-hidden flex justify-center opacity-[0.03]">
        <span className="text-[12rem] md:text-[20rem] font-black tracking-tighter text-foreground whitespace-nowrap leading-none">
          FREELANCE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* --- Top Section: Brand & Newsletter --- */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Brand & Desc */}
          <div className="space-y-6">
            <Logo />
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              The #1 marketplace for connecting top-tier talent with ambitious
              clients. Secure, fast, and built for the future of work.
            </p>

            {/* Newsletter Input */}

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mt-8 relative"
            >
              <input
                type="email"
                required
                placeholder="Enter your email for updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading" || status === "success"}
                className="w-full px-5 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`
                  px-6 py-3 rounded-xl font-bold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 min-w-[140px]
                  ${
                    status === "success"
                      ? "bg-green-500 text-white shadow-green-500/25 cursor-default scale-100"
                      : "bg-primary text-primary-foreground shadow-primary/40 hover:-translate-y-0.5 hover:shadow-primary/50 active:scale-95"
                  }
                  ${status === "loading" ? "cursor-wait opacity-80" : ""}
                `}
              >
                {status === "idle" && (
                  <>
                    <span>Subscribe</span>
                    <Send size={16} />
                  </>
                )}

                {status === "loading" && (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                )}

                {status === "success" && (
                  <>
                    <span>Subscribed</span>
                    <Check size={18} strokeWidth={3} />
                  </>
                )}
              </button>

              {/* Success Message Pop (Optional visual flare) */}
              {status === "success" && (
                <div className="absolute -top-8 left-0 text-green-500 text-xs font-bold animate-bounce">
                  ✨ Welcome to the community!
                </div>
              )}
            </form>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1: Platform */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">
                Platform
              </h4>
              <ul className="space-y-4">
                {["About", "Post a Job", "How it Works", "Pricing"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        to={item}
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                      >
                        {item}
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 translate-x-1"
                        />
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Column 2: Company */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">
                Company
              </h4>
              <ul className="space-y-4">
                {["FAQ", "Careers", "Press", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      to="/faq"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">
                Resources
              </h4>
              <ul className="space-y-4">
                {[
                  "Blog",
                  "Help Center",
                  "Privacy Policy",
                  "Terms of Service",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to="/privacy-terms"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* --- Divider --- */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-border to-transparent mb-12" />

        {/* --- Bottom Section: Socials & Copyright --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-medium">
            &copy; {new Date().getFullYear()} FreeLance MarketPlace. Made with
            ❤️
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { icon: Twitter, label: "Twitter" },
              { icon: Youtube, label: "YouTube" },
              { icon: Facebook, label: "Facebook" },
            ].map((Social, idx) => (
              <a
                key={idx}
                href="#"
                aria-label={Social.label}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <Social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
