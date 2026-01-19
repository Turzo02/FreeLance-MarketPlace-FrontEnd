import React from "react";
import { Hash, Sparkles } from "lucide-react";
import { Link } from "react-router"; // or "react-router-dom"

const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "Firebase",
  "UI / UX Design",
  "Tailwind CSS",
  "Next.js",
  "Python",
  "Data Entry",
  "WordPress",
  "Graphic Design",
  "Digital Marketing",
];

const PopularSkillsSection = () => {
  return (
    <section className="relative bg-background py-20 px-4 transition-colors duration-300 overflow-hidden">
      
      {/* Decorative Background Element (Subtle Gradient) */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        
        {/* Header */}
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={12} />
            <span>Trending Now</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Popular Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Discover the most in-demand skills clients are looking for right now.
            Click a tag to find relevant jobs.
          </p>
        </div>

        {/* Skills Cloud */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <Link
              key={index}
              to={`/allJobs?skill=${encodeURIComponent(skill)}`}
              className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full 
                         bg-card border border-border text-muted-foreground font-medium text-sm
                         transition-all duration-300 ease-out
                         hover:bg-primary hover:border-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
            >
              <Hash 
                size={16} 
                className="opacity-50 group-hover:opacity-100 transition-opacity" 
              />
              <span>{skill}</span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularSkillsSection;
