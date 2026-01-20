import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Check, X, Clock, User, Calendar, AlertCircle } from "lucide-react";
import SplitText from "../../Components/ReactBits/SplitText";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import toast from 'react-hot-toast';
import axios from "axios";

const MyAcceptedTasks = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAcceptedTasks = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://freelance-marketplace-api-server-smoky.vercel.app/myacceptedtasks/${user.email}`
        );
        setTasks(res.data);
      } catch (error) {
        console.error("Error fetching accepted tasks:", error);
        toast.error("Failed to load tasks.");
      } finally {
        setLoading(false);
      }
    };
    if (user?.email) fetchAcceptedTasks();
  }, [user?.email]);

  const handleCancel = async (jobId) => {
    try {
      await axios.patch(
        `https://freelance-marketplace-api-server-smoky.vercel.app/jobs/${jobId}/cancel`,
        { userEmail: user.email }
      );
      toast.success('Task status updated successfully!');
      setTasks(tasks.filter((task) => task._id !== jobId));
    } catch (error) {
      console.error("Error canceling job:", error);
      toast.error('Failed to update task.');
    }
  };

  return (
    <div className="min-h-screen text-foreground transition-colors duration-300">
      <title>My Tasks | Dashboard</title>
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* --- Header --- */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-4 border-b border-border pb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              My Tasks
            </h1>
            <p className="text-muted-foreground">
              Manage your ongoing projects and track progress.
            </p>
          </div>
          
          <div className="bg-secondary/50 px-4 py-2 rounded-lg text-sm font-medium border border-border">
            Active Tasks: <span className="text-primary font-bold">{tasks.length}</span>
          </div>
        </div>

        {/* --- Content Area --- */}
        {loading ? (
          <div className="flex justify-center py-20">
            <LoadingSpinner />
          </div>
        ) : tasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center bg-card border border-dashed border-border rounded-xl">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4 text-muted-foreground">
              <AlertCircle size={32} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">No tasks found</h3>
            <p className="text-muted-foreground">You haven't accepted any jobs yet.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            
            {/* --- Task Row --- */}
            {tasks.map((task) => (
              <div
                key={task._id}
                className="group flex flex-col md:flex-row md:items-center bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                {/* 1. Image Thumbnail */}
                <div className="shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div className="w-full md:w-24 h-24 md:h-24 rounded-lg overflow-hidden border border-border">
                    <img
                      src={task.coverImage}
                      alt={task.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000"; }}
                    />
                  </div>
                </div>

                {/* 2. Task Details */}
                <div className="flex-1 min-w-0 pr-4">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wide border border-blue-500/20">
                      {task.category}
                    </span>
                    <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-xs font-bold border border-yellow-500/20">
                      <Clock size={10} />
                      In Progress
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground truncate mb-1 group-hover:text-primary transition-colors">
                    {task.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <User size={12} />
                      <span>{task.postedBy}</span>
                    </div>
                    {/* Optional: Add Deadline if available */}
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      <span>Due: ASAP</span> 
                    </div>
                  </div>
                </div>

                {/* 3. Actions (Right Side) */}
                <div className="flex flex-row md:flex-col lg:flex-row gap-3 mt-4 md:mt-0 md:pl-6 md:border-l border-border/50 items-center justify-end">
                  
                  {/* Complete Button */}
                  <button
                    onClick={() => handleCancel(task._id)}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-semibold shadow-sm transition-all active:scale-95"
                    title="Mark as Done"
                  >
                    <Check size={16} strokeWidth={2.5} />
                    <span className="md:hidden lg:inline">Complete</span>
                  </button>

                  {/* Cancel Button (Destructive) */}
                  <button
                    onClick={() => handleCancel(task._id)}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-destructive/50 text-muted-foreground hover:text-destructive hover:bg-destructive/10 text-sm font-medium transition-all active:scale-95"
                    title="Cancel Task"
                  >
                    <X size={16} strokeWidth={2.5} />
                    <span className="md:hidden lg:inline">Cancel</span>
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

export default MyAcceptedTasks;
