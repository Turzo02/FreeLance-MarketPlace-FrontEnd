import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { Calendar, User, CheckCircle, Briefcase, AlertCircle, ArrowLeft } from "lucide-react";

const JobDetails = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const postedJobUserMail = data?.userEmail;
  const loggedInUserMail = user?.email;

  const handleAcceptedJob = () => {
    const acceptedUserData = {
      acceptedUserMail: user?.email,
    };

    axios
      .patch(
        `https://freelance-marketplace-api-server-smoky.vercel.app/acceptedjobs/${data._id}`,
        acceptedUserData
      )
      .then((res) => {
        Swal.fire({
          title: "Job Accepted!",
          text: "You have successfully accepted this task.",
          icon: "success",
          confirmButtonText: "Go to My Tasks",
          confirmButtonColor: "hsl(142 71% 45%)", // Matches Green Theme
        }).then(() => {
          navigate("/dashboard/acceptedTasks");
        });
      })
      .catch((error) => {
        console.error("Error updating job status:", error);
        Swal.fire({
          title: "Error",
          text: "Something went wrong. Please try again.",
          icon: "error",
        });
      });
  };

  return (
    <div className="min-h-screen bg-background py-30 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <title>{data.title} | Job Details</title>

      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium mb-4 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Jobs
        </button>

        {/* Main Card */}
        <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-xl">
          
          {/* --- Hero Image Section --- */}
          <div className="relative h-64 sm:h-96 w-full group">
            <img
              src={data.coverImage}
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80";
              }}
              alt={data.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Floating Category Badge */}
            <div className="absolute top-6 left-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold uppercase tracking-wider shadow-lg">
                <Briefcase size={14} />
                {data.category}
              </span>
            </div>
            
            {/* Title on Image (Desktop) */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
               <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg mb-2">
                {data.title}
              </h1>
            </div>
          </div>

          {/* --- Content Body --- */}
          <div className="p-8 sm:p-10 space-y-10">
            
            {/* Meta Info Row */}
            <div className="flex flex-col sm:flex-row gap-6 pb-8 border-b border-border">
               
               {/* Author */}
               <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary border border-border">
                     <User size={24} />
                  </div>
                  <div>
                     <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Posted by</p>
                     <p className="text-foreground font-bold">{data.postedBy}</p>
                  </div>
               </div>

               {/* Date */}
               <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary border border-border">
                     <Calendar size={24} />
                  </div>
                  <div>
                     <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Posted on</p>
                     <p className="text-foreground font-bold">
                        {new Date(data.postedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                     </p>
                  </div>
               </div>

               {/* Deadline/Budget Placeholder (Optional - can add if data exists) */}
               {data.deadline && (
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary border border-border">
                       <AlertCircle size={24} />
                    </div>
                    <div>
                       <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Deadline</p>
                       <p className="text-foreground font-bold">{data.deadline}</p>
                    </div>
                 </div>
               )}
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                Job Description
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                <p>{data.summary}</p>
              </div>
            </div>

            {/* --- Action Section --- */}
            <div className="bg-secondary/20 rounded-2xl p-6 sm:p-8 border border-border flex flex-col items-center text-center space-y-4">
              
              {postedJobUserMail === loggedInUserMail ? (
                // Scenario: Owner viewing their own job
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                   <AlertCircle size={48} className="text-muted-foreground/50 mb-2" />
                   <h3 className="text-lg font-semibold">This is your job listing</h3>
                   <p className="text-sm">You cannot accept your own job post.</p>
                   <button disabled className="mt-4 px-8 py-3 rounded-xl bg-muted text-muted-foreground font-semibold cursor-not-allowed opacity-50">
                      Action Disabled
                   </button>
                </div>

              ) : data.acceptedUserMail?.includes(loggedInUserMail) ? (
                // Scenario: Already Applied
                <div className="flex flex-col items-center gap-2">
                   <CheckCircle size={48} className="text-primary mb-2" />
                   <h3 className="text-xl font-bold text-foreground">Application Received</h3>
                   <p className="text-muted-foreground">You have already accepted this job.</p>
                   <button disabled className="mt-4 px-8 py-3 rounded-xl bg-primary/20 text-primary font-bold border border-primary/20 cursor-not-allowed">
                      Already Accepted
                   </button>
                </div>

              ) : (
                // Scenario: Can Apply
                <>
                  <h3 className="text-xl font-bold text-foreground">
                    Interested in this role?
                  </h3>
                  <p className="text-muted-foreground max-w-md">
                    Review the details above. If you have the skills required, accept this job to start working immediately.
                  </p>
                  
                  {!user ? (
                    <Link to="/login" className="w-full sm:w-auto">
                       <button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                          Login to Accept Job
                       </button>
                    </Link>
                  ) : (
                    <button
                      onClick={handleAcceptedJob}
                      className="w-full sm:w-auto px-12 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-1 active:scale-95 transition-all duration-300"
                    >
                      Accept This Job
                    </button>
                  )}
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
