import React from "react";
import { NavLink } from "react-router";
import { Home, Rocket } from "lucide-react";

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background text-foreground transition-colors duration-300">
      <title>404 | Lost in Space</title>

      {/* --- Ambient Space Background --- */}
      {/* Stars */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>
      
      {/* Large Nebula Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      {/* --- Main Content --- */}
      <div className="relative z-10 text-center px-4">
        
        {/* Floating Icon/Graphic */}
        <div className="mb-8 inline-block animate-float">
          <div className="relative w-32 h-32 flex items-center justify-center rounded-full bg-card/30 backdrop-blur-md border border-white/10 shadow-2xl shadow-primary/20">
            <Rocket size={64} className="text-primary -rotate-45" />
            
            {/* Orbiting Ring */}
            <div className="absolute -inset-2.5 rounded-full border border-dashed border-white/20 animate-spin-slow w-[120%] h-[120%] left-[-10%] top-[-10%]" />
          </div>
        </div>

        {/* Glitch 404 Text */}
        <h1 className="text-9xl font-black tracking-tighter mb-2 relative inline-block select-none text-transparent bg-clip-text bg-linear-to-b from-foreground to-foreground/20">
          404
        </h1>

        <div className="space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Houston, we have a problem.
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
            The page you are looking for has drifted into a black hole or never existed in this universe.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <NavLink
            to="/"
            className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 font-bold text-primary-foreground shadow-lg shadow-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-primary/60"
          >
            <Home size={18} />
            <span>Return to Base</span>
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </NavLink>

          <button 
            onClick={() => window.history.back()}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-8 font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-card hover:border-primary/50"
          >
            Go Back
          </button>
        </div>
      </div>

      {/* --- CSS Animations --- */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.8); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
