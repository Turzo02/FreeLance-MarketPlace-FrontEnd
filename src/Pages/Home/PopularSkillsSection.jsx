import React from "react";
import { Hash, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router"; // or "react-router-dom"

const skills = [
  "React", "JavaScript", "Node.js", "Firebase",
  "UI / UX Design", "Tailwind CSS", "Next.js", "Python",
  "Data Entry", "WordPress", "Graphic Design", "Digital Marketing",
  "SEO", "Video Editing", "Cybersecurity"
];

const PopularSkillsSection = () => {
  return (
    <section className="relative bg-background py-24 px-4 overflow-hidden transition-colors duration-300">
      
      {/* --- Ambient Background Lights --- */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-soft-light"></div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        
        {/* --- Header --- */}
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles size={12} className="animate-spin-slow" />
            <span>Market Trends</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Popular Skills & <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Discover the high-demand skills driving the freelance economy. 
            Click a tag to instantly filter jobs matching that expertise.
          </p>
        </div>

        {/* --- Interactive Skills Cloud --- */}
        {/* 'group/cloud' allows us to detect when ANY child is hovered */}
        <div className="group/cloud flex flex-wrap justify-center gap-4 md:gap-6 perspective-1000">
          {skills.map((skill, index) => (
            <Link
              key={index}
              to={`/allJobs?skill=${encodeURIComponent(skill)}`}
              className="group/tag relative"
              style={{
                // Inline style for randomized floating animation delay
                animation: `float 6s ease-in-out infinite`,
                animationDelay: `${index * 0.5}s`,
              }}
            >
              <div 
                className="relative flex items-center gap-3 px-8 py-4 rounded-2xl 
                           bg-card/40 backdrop-blur-md border border-border/50 text-muted-foreground font-semibold text-sm
                           shadow-sm transition-all duration-300 ease-out
                           group-hover/tag:bg-primary group-hover/tag:border-primary group-hover/tag:text-primary-foreground 
                           group-hover/tag:scale-110 group-hover/tag:shadow-[0_0_30px_rgba(var(--primary),0.4)]
                           group-hover/tag:z-10
                           group-hover/cloud:group-not-[&:hover]/tag:opacity-40
                           group-hover/cloud:group-not-[&:hover]/tag:scale-95
                           group-hover/cloud:group-not-[&:hover]/tag:blur-[2px]"
              >
                {/* Icon wrapper */}
                <span className="p-1 rounded-full bg-background/50 group-hover/tag:bg-white/20 transition-colors">
                  <Hash size={14} className="opacity-70 group-hover/tag:opacity-100" />
                </span>
                
                <span className="tracking-wide">{skill}</span>

                {/* Trending Indicator (Randomly show on some tags) */}
                {index % 3 === 0 && (
                   <div className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-black shadow-lg scale-0 group-hover/tag:scale-100 transition-transform duration-300 delay-100">
                      <TrendingUp size={10} strokeWidth={3} />
                   </div>
                )}
              </div>
            </Link>
          ))}
        </div>

      </div>

      {/* --- CSS for Floating Animation --- */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default PopularSkillsSection;
