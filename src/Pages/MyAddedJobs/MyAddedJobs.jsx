import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import { Edit, Trash2, Layers, Calendar, ArrowRight } from "lucide-react";
import SplitText from "../../Components/ReactBits/SplitText";
import toast from "react-hot-toast";
import axios from "axios";

import Swal from "sweetalert2"; // Ensure you have this installed

const MyAddedJobs = () => {
  const userJobsData = useLoaderData();
  const [jobs, setJobs] = useState(userJobsData);

const handleDeleteUser = (id) => {
  Swal.fire({
    title: "Delete this job?",
    text: "This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Delete",
    cancelButtonText: "Cancel",
    
    buttonsStyling: false, 
    
    customClass: {
      popup: "bg-card border border-border rounded-2xl shadow-2xl p-6", 
      title: "text-xl font-bold text-foreground",
      htmlContainer: "text-muted-foreground text-sm",
      icon: "text-destructive", 
      actions: "flex gap-3 mt-4 w-full",
      confirmButton: "flex-1 bg-destructive text-destructive-foreground hover:bg-destructive/90 px-4 py-2.5 rounded-lg font-semibold transition-colors",
      cancelButton: "flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2.5 rounded-lg font-semibold transition-colors"
    },
    
    backdrop: `
      rgba(0,0,0,1)
      backdrop-filter: blur(40px)
    `
  }).then((result) => {
    if (result.isConfirmed) {
      axios
        .delete(`https://freelance-marketplace-api-server-smoky.vercel.app/jobs/${id}`)
        .then(() => {
          toast.success("Job deleted successfully");
          setJobs(jobs.filter((job) => job._id !== id));
        })
        .catch((error) => {
          console.error("Error deleting job:", error);
          toast.error("Failed to delete the job.");
        });
    }
  });
};

  return (
    <div className="min-h-screen  text-foreground transition-colors duration-300">
      <title>My Jobs | Dashboard</title>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* --- Header --- */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-4 border-b border-border pb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              <SplitText
                text="Manage Your Jobs"
                className="inline-block"
                delay={50}
                duration={0.6}
                splitType="chars"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
              />
            </h1>
            <p className="text-muted-foreground">
              View and manage the opportunities you've posted.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-bold border border-primary/20">
              {jobs.length} Active Posts
            </div>
            <Link to="/dashboard/addAJob">
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95">
                Post New Job <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>

        {/* --- Content Area --- */}
        {jobs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center bg-card border border-dashed border-border rounded-xl">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4 text-muted-foreground">
              <Layers size={32} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">
              No jobs posted yet
            </h3>
            <p className="text-muted-foreground mb-6">
              Start hiring talent by posting your first job.
            </p>
            <Link to="/dashboard/addAJob">
              <button className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors">
                Create Job Post
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {jobs.map((job) => (
              <div
                key={job._id}
                className="group flex flex-col md:flex-row md:items-center bg-background border border-border rounded-xl p-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                {/* 1. Image Thumbnail */}
                <div className="shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div className="w-full md:w-32 h-32 md:h-24 rounded-lg overflow-hidden border border-border relative">
                    <img
                      src={job.coverImage}
                      alt={job.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>

                {/* 2. Job Details */}
                <div className="flex-1 min-w-0 pr-4 space-y-2">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wide border border-border mb-2">
                      {job.category}
                    </span>
                    <h2 className="text-xl font-bold text-foreground truncate group-hover:text-primary transition-colors">
                      {job.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      <span>Posted: {new Date().toLocaleDateString()}</span>
                      {/* You might want to use real 'postedAt' if available */}
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                      <span>Public</span>
                    </div>
                  </div>
                </div>

                {/* 3. Actions (Right Side) */}
                <div className="flex flex-row md:flex-col lg:flex-row gap-3 mt-4 md:mt-0 md:pl-6 md:border-l border-border/50 items-center justify-end">
                  {/* Edit Button */}
                  <Link
                    to={`/updateJob/${job._id}`}
                    className="flex-1 md:flex-none"
                  >
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground text-sm font-semibold transition-all active:scale-95 border border-border cursor-pointer">
                      <Edit size={16} />
                      <span className="md:hidden lg:inline">Edit</span>
                    </button>
                  </Link>

                  {/* Delete Button (Destructive) */}
                  <button
                    onClick={() => handleDeleteUser(job._id)}
                    className="flex-1 md:flex-none w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white bg-destructive/90 hover:bg-destructive  text-sm font-semibold transition-all active:scale-95 cursor-pointer"
                  >
                    <Trash2 size={16} />
                    <span className="md:hidden lg:inline">Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAddedJobs;
