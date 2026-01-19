import React from "react";
import { BriefcaseBusiness } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-background transition-colors duration-300">
      
      {/* --- Ambient Background Glow --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <div className="relative flex flex-col items-center gap-8 z-10">
        
        {/* --- Logo Container --- */}
        <div className="relative">
          {/* Rotating Outer Ring */}
          <div className="absolute -inset-3 rounded-full border-4 border-t-primary border-r-transparent border-b-primary/30 border-l-transparent animate-spin" />
          
          {/* Counter-Rotating Inner Ring */}
          <div className="absolute -inset-1 rounded-full border-2 border-t-transparent border-r-secondary-foreground/20 border-b-secondary-foreground/20 border-l-transparent animate-spin-slow-reverse" />

          {/* Icon */}
          <div className="relative w-20 h-20 bg-card rounded-full flex items-center justify-center shadow-2xl shadow-primary/20">
            <BriefcaseBusiness size={40} className="text-primary animate-bounce-subtle" strokeWidth={2.5} />
          </div>
        </div>

        {/* --- Text & Progress --- */}
        <div className="text-center space-y-4">
          
          {/* Brand Name */}
          <h1 className="text-2xl font-black tracking-tight text-foreground">
            FreeLance <span className="text-primary">MarketPlace</span>
          </h1>

          {/* Loading Bar Container */}
          <div className="w-48 h-1.5 bg-muted rounded-full overflow-hidden mx-auto relative">
            {/* Animated Fill */}
            <div className="absolute inset-y-0 left-0 bg-primary w-full animate-loading-bar rounded-full" />
            
            {/* Shimmer Effect overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent w-full -translate-x-full animate-shimmer" />
          </div>

          <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest animate-pulse">
            Loading Resources...
          </p>
        </div>
      </div>

      {/* --- Custom CSS for specific animations --- */}
      <style>{`
        .animate-spin-slow-reverse {
          animation: spin-reverse 3s linear infinite;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite;
        }
        .animate-loading-bar {
          animation: loading 2s ease-in-out infinite;
          transform-origin: left;
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes loading {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.7); }
          100% { transform: scaleX(1); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
