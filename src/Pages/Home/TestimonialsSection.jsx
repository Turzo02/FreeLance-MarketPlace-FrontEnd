import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Frontend Developer",
    initials: "AR",
    review:
      "This platform helped me find consistent freelance work without the usual chaos. The workflow is clean and easy to manage.",
  },
  {
    name: "Rohan Das",
    role: "Startup Founder",
    initials: "RD",
    review:
      "Posting jobs and managing freelancers here is straightforward. I like how organized everything feels. A true game-changer for us.",
  },
  {
    name: "Mehedi Hasan",
    role: "UI / UX Designer",
    initials: "MH",
    review:
      "I accepted my first task within a day. The dashboard makes tracking work very simple and the payments are always on time.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-20 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">
            What People Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real experiences from freelancers and clients who use our platform to build their future.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col p-8 bg-card border border-border rounded-xl shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-6 right-6 text-primary/10 w-10 h-10" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className="text-primary fill-primary" 
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground leading-relaxed mb-8 grow">
                "{item.review}"
              </p>

              {/* User Profile */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-sm">
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialsSection;
