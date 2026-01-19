import React from "react";
import { Code2, Megaphone, Palette } from "lucide-react";

const categories = [
  {
    title: "Web Development",
    icon: <Code2 size={32} />,
    description:
      "From stunning websites to complex web applications, find the talent you need.",
  },
  {
    title: "Digital Marketing",
    icon: <Megaphone size={32} />,
    description:
      "Boost your online presence with experts in SEO, social media, and advertising.",
  },
  {
    title: "Graphics & Design",
    icon: <Palette size={32} />,
    description:
      "Get eye-catching logos, branding, and UI/UX designs that stand out.",
  },
];

const TopCategories = () => {
  return (
    <section className="bg-background py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
                  
          <h2 
            className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight"
          >
            Discover Top <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60">Categories</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our most popular categories and find the perfect expert for your next big project.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border shadow-sm
                         hover:shadow-xl hover:border-primary/40 hover:-translate-y-2
                         transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon */}
              <div
                className="w-20 h-20 mb-6 rounded-full bg-primary/10 text-primary flex items-center justify-center
                           group-hover:scale-110 transition-transform duration-300"
              >
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
