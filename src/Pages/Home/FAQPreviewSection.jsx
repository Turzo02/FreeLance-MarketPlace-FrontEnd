import React from "react";
import { Link } from "react-router"; // or "react-router-dom"
import { ChevronRight, HelpCircle, MessageCircleQuestion, Plus } from "lucide-react";

const faqs = [
  {
    question: "Do I need an account to browse?",
    answer:
      "You can browse all public job listings without an account. To post or accept jobs, a secure login is required.",
  },
  {
    question: "How do freelancers accept a job?",
    answer:
      "Freelancers can accept available jobs directly from the job details page immediately after logging in.",
  },
  {
    question: "Can I edit my posted jobs?",
    answer:
      "Yes. You have full control. You can edit, pause, or delete your posted jobs from the 'My Added Jobs' dashboard.",
  },
  {
    question: "Is this platform free to use?",
    answer:
      "Yes. Creating an account, browsing jobs, and posting work is currently 100% free for all users.",
  },
];

const FAQPreviewSection = () => {
  return (
    <section className="relative bg-background py-24 px-4 overflow-hidden transition-colors duration-300">
      
      {/* --- Ambient Background --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-soft-light" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest border border-border/50">
            <HelpCircle size={14} />
            <span>Help Center</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.
          </p>
        </div>

        {/* --- FAQ Grid --- */}
        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border/60 shadow-sm 
                         hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Hover Gradient Border (via pseudo-element simulation) */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-colors duration-300 pointer-events-none" />
              
              {/* Background Glow */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex gap-4">
                {/* Icon Box */}
                <div className="shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                   <MessageCircleQuestion size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>

                {/* Corner Decorative Icon */}
                <div className="absolute top-4 right-4 text-muted-foreground/20 group-hover:text-primary/40 group-hover:rotate-90 transition-all duration-300">
                   <Plus size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- View All Link --- */}
        <div className="text-center mt-16">
          <Link
            to="/faq"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span >Visit Support Center</span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FAQPreviewSection;
