import React from 'react';
import { useNavigate } from 'react-router';
import { User, Calendar, ArrowUpRight, MapPin } from 'lucide-react';

const JobCard = ({ LatestJobsData }) => {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {LatestJobsData.map((job) => (
                <div 
                    key={job._id} 
                    onClick={() => navigate(`/jobs/${job._id}`)}
                    className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm 
                             hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                    {/* --- Image Section --- */}
                    <div className="relative h-48 overflow-hidden">
                        <img 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            src={job.coverImage}
                            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"; }} 
                            alt={job.title} 
                        />
                        
                        {/* Overlay Gradient (Darkens bottom of image for contrast) */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60" />

                        {/* Floating Category Badge */}
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-black/30 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
                                {job.category}
                            </span>
                        </div>
                    </div>

                    {/* --- Content Section --- */}
                    <div className="flex flex-col flex-1 p-5">
                        
                        {/* Title & Arrow */}
                        <div className="flex justify-between items-start mb-3 gap-2">
                            <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-1">
                                {job.title}
                            </h3>
                            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>

                        {/* Summary */}
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-6">
                            {job.summary}
                        </p>

                        {/* Footer Info (Author & Date) */}
                        <div className="mt-auto pt-4 border-t border-border flex items-center justify-between text-xs font-medium text-muted-foreground">
                            
                            {/* Posted By */}
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-primary">
                                    <User size={12} />
                                </div>
                                <span className="truncate max-w-[100px]">{job.postedBy}</span>
                            </div>

                            {/* Date */}
                            <div className="flex items-center gap-1.5">
                                <Calendar size={12} />
                                <span>{new Date(job.postedAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default JobCard;
