import React from "react";
import { User, Calendar, ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router"; // or "react-router-dom"

const JobCard = ({ job }) => {
  return (
    <div className="group flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
      
      {/* --- Image Section --- */}
      <div className="relative h-52 overflow-hidden">
        {/* Main Image */}
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={job.coverImage}
          alt={job.title}
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80";
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {/* Floating Glass Badge (Category) */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
            <Briefcase size={12} className="text-primary-foreground" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              {job.category}
            </span>
          </div>
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="flex flex-col flex-1 p-6">
        
        {/* Title */}
        <Link to={`/jobs/${job._id}`} className="block">
          <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-1 group-hover:text-primary transition-colors">
            {job.title}
          </h3>
        </Link>

        {/* Summary */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-6 leading-relaxed">
          {job.summary}
        </p>

        {/* Meta Info (User & Date) */}
        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground mb-6">
          <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-lg border border-border/50">
            <User size={14} className="text-primary" />
            <span className="truncate max-w-[100px]">{job.postedBy}</span>
          </div>
          
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            <span>{new Date(job.postedAt).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Action Button */}
        <Link to={`/jobs/${job._id}`} className="mt-auto">
          <button className="w-full cursor-pointer group/btn flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 active:scale-[0.98] transition-all duration-200">
            View Details
            <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </Link>

      </div>
    </div>
  );
};

export default JobCard;
