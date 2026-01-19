import React from "react";

const JobCardSkeleton = () => {
  return (
    <div className="relative flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden shadow-sm isolate">
      
      {/* --- Premium Shimmer Animation Overlay --- */}
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-linear-to-r from-transparent via-foreground/5 to-transparent z-20 pointer-events-none" />

      {/* --- Image Section --- */}
      <div className="relative h-52 w-full bg-muted/30">
        {/* Floating Badge Placeholder */}
        <div className="absolute top-4 left-4 h-8 w-28 bg-muted rounded-full border border-background/20" />
      </div>

      {/* --- Content Section --- */}
      <div className="flex flex-col flex-1 p-6">
        
        {/* Title Placeholder */}
        <div className="mb-4">
          <div className="h-7 w-3/4 bg-muted/70 rounded-lg mb-2" />
        </div>

        {/* Summary Placeholder (2 lines) */}
        <div className="space-y-3 mb-8">
          <div className="h-4 w-full bg-muted/40 rounded-md" />
          <div className="h-4 w-2/3 bg-muted/40 rounded-md" />
        </div>

        {/* Meta Info (User Pill + Date) */}
        <div className="flex items-center justify-between mb-8">
          {/* User Pill */}
          <div className="h-9 w-32 bg-muted/30 rounded-lg border border-border/50" />
          {/* Date */}
          <div className="h-4 w-24 bg-muted/30 rounded-md" />
        </div>

        {/* Button Placeholder (Matches the Action Button) */}
        <div className="mt-auto">
          <div className="h-12 w-full bg-muted/80 rounded-xl" />
        </div>

      </div>

      {/* --- Inline CSS for the Shimmer Animation --- */}
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default JobCardSkeleton;
