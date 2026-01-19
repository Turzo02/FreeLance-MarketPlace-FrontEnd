import React from "react";
import { BriefcaseBusiness, MonitorCloud } from "lucide-react";
import { Link } from "react-router"; // or 'react-router-dom'

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="group flex items-center gap-3"

    >
      {/* --- Logo Mark (Icon) --- */}
      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-primary/40">
        <MonitorCloud  size={24} strokeWidth={2.5} />
        
        {/* Inner Shine Effect */}
        <div className="absolute inset-0 rounded-xl bg-linear-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Outer Glow (Behind) */}
        <div className="absolute -inset-2 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* --- Typography --- */}
      <div className="flex flex-col justify-center leading-none space-y-0.5">
        <span className="text-xl font-extrabold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
          FreeLance
        </span>
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
          MarketPlace
        </span>
      </div>
    </Link>
  );
};

export default Logo;
