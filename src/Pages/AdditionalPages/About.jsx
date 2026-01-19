import React from "react";
import { Target, Eye, Rocket, CheckCircle, Users, Layout, ShieldCheck } from "lucide-react";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4 md:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Hero Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            About <span className="text-primary">FreeLance MarketPlace</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are bridging the gap between talent and opportunity. A seamless platform where work, collaboration, and communication happen efficiently.
          </p>
        </div>

        {/* Mission & Vision - Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
              <Target size={28} />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To create a seamless ecosystem where talented freelancers can easily connect with clients who need their specific skills. We believe in removing friction from the hiring process so you can focus on the work that matters.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
              <Eye size={28} />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              We aim to empower freelancers by providing them with visibility, opportunities, and a professional space to grow their careers. For clients, we provide instant access to a reliable, vetted pool of global talent.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">
            What We Offer
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Layout, text: "Post and manage freelance jobs with ease." },
              { icon: Rocket, text: "Discover projects that match your skills." },
              { icon: CheckCircle, text: "Accept tasks and manage workflow efficiently." },
              { icon: ShieldCheck, text: "Secure user authentication & data protection." },
              { icon: Users, text: "Personalized dashboards for all user types." },
              { icon: Rocket, text: "Fully responsive across mobile & desktop." },
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-5 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-colors duration-200"
              >
                <feature.icon className="w-6 h-6 text-primary shrink-0 mt-1" />
                <span className="text-muted-foreground font-medium">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-10 md:p-16 text-center shadow-lg">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">
              Ready to get started?
            </h2>
            <p className="text-primary-foreground/90 text-lg">
              Join FreeLance MarketPlace today and experience a smarter way to connect, collaborate, and succeed!
            </p>
            <Link to={"/allJobs"} className="bg-background text-foreground hover:bg-secondary px-8 py-3 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 shadow-md cursor-pointer">
              Join Now
            </Link>
          </div>
          
          {/* Decorative background circle */}
          <div className="absolute top-0 left-0 w-full h-full bg-white/10 dark:bg-black/10 mix-blend-overlay pointer-events-none" />
        </div>

      </div>
    </div>
  );
};

export default About;
