import React from "react";
import { Briefcase, Users, CheckCircle, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "12K+",
    label: "Active Users",
  },
  {
    icon: Briefcase,
    value: "3.5K+",
    label: "Jobs Posted",
  },
  {
    icon: CheckCircle,
    value: "9K+",
    label: "Tasks Completed",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Success Rate",
  },
];

const PlatformStatsSection = () => {
  return (
    <section className="bg-background py-24 px-4 border-y border-border/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">
            Platform in Numbers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A quick look at the growth and activity that drives our freelance marketplace.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-8 text-center shadow-sm 
                           hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} strokeWidth={2} />
                </div>
                
                {/* Value */}
                <h3 className="text-4xl font-extrabold text-foreground mb-2 tracking-tight">
                  {stat.value}
                </h3>
                
                {/* Label */}
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default PlatformStatsSection;
