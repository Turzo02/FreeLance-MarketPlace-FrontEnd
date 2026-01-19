import React from "react";
import { Briefcase, Users, CheckCircle, TrendingUp, BarChart3 } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "12K+",
    label: "Active Users",
    desc: "Trusting our platform",
  },
  {
    icon: Briefcase,
    value: "3.5K+",
    label: "Jobs Posted",
    desc: "Opportunities created",
  },
  {
    icon: CheckCircle,
    value: "9K+",
    label: "Tasks Completed",
    desc: "Successfully delivered",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Success Rate",
    desc: "Client satisfaction",
  },
];

const PlatformStatsSection = () => {
  return (
    <section className="relative bg-background py-24 px-4 overflow-hidden">
      
      {/* --- Ambient Background --- */}
      {/* Large blurred blobs to give depth behind the glass cards */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
            <BarChart3 size={14} />
            <span>Growth Metrics</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Our Impact in <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60">Numbers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparency is key. Here is a snapshot of the activity driving our freelance ecosystem.
          </p>
        </div>

        {/* --- Stats Grid --- */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-card border border-border/60 shadow-sm overflow-hidden 
                           hover:shadow-xl hover:border-primary/40 hover:-translate-y-2 transition-all duration-300"
              >
                {/* 1. Background Watermark Icon (Giant, faded, rotated) */}
                <Icon 
                  className="absolute -bottom-6 -right-6 w-40 h-40 text-primary/5 group-hover:text-primary/10 
                             transform -rotate-12 transition-colors duration-500 pointer-events-none" 
                />

                {/* 2. Card Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  
                  {/* Icon Box */}
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-linear-to-br from-background to-secondary border border-border flex items-center justify-center text-primary shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Icon size={32} strokeWidth={2.5} />
                  </div>

                  {/* Value (Big & Bold) */}
                  <h3 className="text-4xl md:text-5xl font-black text-foreground mb-2 tracking-tight">
                    {stat.value}
                  </h3>

                  {/* Label */}
                  <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                    {stat.label}
                  </p>
                  
                  {/* Description */}
                  <p className="text-xs text-muted-foreground font-medium opacity-80">
                    {stat.desc}
                  </p>
                </div>

                {/* 3. Bottom Gradient Line (Visual Accent) */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default PlatformStatsSection;
