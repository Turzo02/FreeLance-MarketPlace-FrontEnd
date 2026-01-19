import React from "react";

const JobCardSkeleton = () => {
  return (
    <div
      className="flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
    >
      {/* --- Image Skeleton --- */}
      <div className="h-48 w-full bg-muted/50 animate-pulse relative">
        {/* Badge Placeholder */}
        <div className="absolute top-4 left-4 h-6 w-20 bg-muted rounded-full" />
      </div>

      {/* --- Content Skeleton --- */}
      <div className="flex flex-col flex-1 p-5 space-y-4">
        {/* Title Placeholder */}
        <div className="space-y-2">
          <div className="h-6 w-3/4 bg-muted/70 rounded animate-pulse" />
        </div>

        {/* Summary Placeholder (2 lines) */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-muted/40 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-muted/40 rounded animate-pulse" />
        </div>

        {/* Footer Placeholder */}
        <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
          {/* Author (Circle + Line) */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-muted/60 animate-pulse" />
            <div className="h-3 w-20 bg-muted/40 rounded animate-pulse" />
          </div>

          {/* Date Line */}
          <div className="h-3 w-16 bg-muted/40 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default JobCardSkeleton;
