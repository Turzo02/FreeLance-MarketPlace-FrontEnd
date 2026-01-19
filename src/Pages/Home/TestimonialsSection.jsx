import React from "react";
import { Star, Quote, CheckCircle, MessageSquareHeart } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Frontend Developer",
    initials: "AR",
    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Ayesha",
    review:
      "This platform helped me find consistent freelance work without the usual chaos. The workflow is clean, easy to manage, and I get paid on time.",
  },
  {
    name: "Rohan Das",
    role: "Startup Founder",
    initials: "RD",
    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Rohan",
    review:
      "Posting jobs and managing freelancers here is straightforward. I like how organized everything feels. A true game-changer for our hiring process.",
  },
  {
    name: "Mehedi Hasan",
    role: "UI / UX Designer",
    initials: "MH",
    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Mehedi",
    review:
      "I accepted my first task within a day. The dashboard makes tracking work very simple and the payments are always on time. Highly recommended!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative bg-background py-24 px-4 overflow-hidden transition-colors duration-300">
      {/* --- Ambient Background --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-soft-light" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Header --- */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest shadow-sm">
            <MessageSquareHeart size={14} />
            <span>Community Love</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60">
              Thousands
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Read honest feedback from the
            freelancers and clients building their future with us.
          </p>
        </div>

        {/* --- Testimonials Grid --- */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-8 rounded-4xl bg-card/50 backdrop-blur-md border border-border/50 shadow-sm 
                         hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/30 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Giant Watermark Quote */}
              <Quote className="absolute top-6 right-8 text-primary/5 w-24 h-24 rotate-12 pointer-events-none transition-colors group-hover:text-primary/10" />

              {/* Stars */}
              <div className="flex gap-1 mb-8 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400 drop-shadow-sm"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="relative z-10 text-lg text-foreground/90 leading-relaxed mb-8 grow font-medium">
                "{item.review}"
              </blockquote>

              {/* Divider */}
              <div className="h-px w-full bg-linear-to-r from-transparent via-border to-transparent mb-6" />

              {/* User Profile */}
              <div className="relative z-10 flex items-center gap-4">
                {/* Avatar with Ring */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-full p-0.5 bg-linear-to-br from-primary to-transparent">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full rounded-full bg-card object-cover"
                    />
                  </div>
                  {/* Verified Badge */}
                  <div className="absolute -bottom-1 -right-1 bg-background rounded-full p-0.5">
                    <CheckCircle
                      size={16}
                      className="text-primary fill-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-base font-bold text-foreground">
                      {item.name}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Bottom Glow Line */}
              <div className="absolute bottom-0 left-10 right-10 h-1 bg-primary/40 filter blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
