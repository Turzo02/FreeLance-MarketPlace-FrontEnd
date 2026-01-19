import React from "react";
import { UserPlus, Search, Briefcase, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const steps = [
  {
    icon: <UserPlus size={32} />,
    title: "Create an Account",
    description:
      "Sign up in seconds using email or Google. Build your profile to showcase your skills or business needs.",
  },
  {
    icon: <Search size={32} />,
    title: "Explore Opportunities",
    description:
      "Browse thousands of active job listings. Filter by category, budget, and skill to find your perfect match.",
  },
  {
    icon: <Briefcase size={32} />,
    title: "Post or Accept Work",
    description:
      "Clients post detailed jobs. Freelancers submit proposals. Connect instantly and start collaborating.",
  },
  {
    icon: <CheckCircle size={32} />,
    title: "Get Work Done",
    description:
      "Manage tasks via our secure dashboard. track progress, submit deliverables, and get paid safely.",
  },
];

const HowITWorks = () => {
  return (
    <section className="relative min-h-screen bg-background py-20 px-4 overflow-hidden flex items-center justify-center">
      
      {/* Background Decor (Subtle Gradients) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
            Workflow
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight">
            How It <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60">Works</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            From sign-up to success, our platform streamlines every step of your freelance journey.
          </p>
        </div>

        {/* --- Steps Grid --- */}
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-border/60 -z-10" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center"
            >

              {/* Icon Circle */}
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full bg-card border-4 border-background shadow-xl flex items-center justify-center text-muted-foreground transition-all duration-500 group-hover:scale-110 group-hover:border-primary/20 group-hover:text-primary group-hover:shadow-primary/25 z-10">
                  {step.icon}
                </div>
                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:animate-ping" />
              </div>

              {/* Card Content */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/60 p-6 rounded-2xl w-full h-full hover:bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Mobile Connector Arrow (Visual only) */}
              {index < steps.length - 1 && (
                <div className="lg:hidden mt-4 text-muted-foreground/30">
                  <ArrowRight className="rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* --- Footer CTA --- */}
        <div className="mt-20 text-center">
          <Link to="/" className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 active:scale-95">
            Start Your Journey
          </Link>
          <p className="mt-6 text-sm text-muted-foreground">
            Free to join. No hidden fees. Secure payments.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HowITWorks;
