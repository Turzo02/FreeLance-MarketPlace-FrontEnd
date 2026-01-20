import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router";
import { 
  Briefcase, 
  User, 
  Mail, 
  Image as ImageIcon, 
  FileText, 
  Layers, 
  Send,
  Loader2 
} from "lucide-react";
import SplitText from "../../Components/ReactBits/SplitText";
import toast from 'react-hot-toast';
import axios from "axios";

const AddAJob = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const categories = [
    "Animation & 3D", "App Development", "Content Writing", "Digital Marketing",
    "Graphics Design", "SEO Optimization", "Social Media Management",
    "Video Editing", "Voiceover & Audio", "Web Development"
  ];

  const handleAddJob = async (event) => {
    event.preventDefault();
    setLoading(true);

    const form = event.target;
    const newJob = {
      title: form.title.value,
      postedBy: form.postedBy.value,
      category: form.category.value,
      summary: form.summary.value,
      coverImage: form.coverImage.value,
      userEmail: form.userEmail.value,
      createdAt: new Date().toISOString(), // Good practice
    };

    try {
      await axios.post(
        "https://freelance-marketplace-api-server-smoky.vercel.app/jobs",
        newJob
      );
      toast.success('Job posted successfully! Redirecting...');
      form.reset();
      setTimeout(() => {
        navigate(`/dashboard/myaddedjobs/${user?.email}`);
      }, 1500);
    } catch (error) {
      console.error("Error adding job:", error);
      toast.error('Failed to post job. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen  text-foreground py-12 px-4 transition-colors duration-300">
      <title>Post a Job | Dashboard</title>
      
      <div className="max-w-3xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-10 space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            <SplitText
              text="Post a New Opportunity"
              className="inline-block"
              delay={50}
              duration={0.6}
              splitType="chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
            />
          </h1>
          <p className="text-muted-foreground">
            Fill in the details to find the perfect talent for your project.
          </p>
        </div>

        {/* --- Form Card --- */}
        <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
          
          {/* Decorative Top Bar */}
          <div className="h-2 bg-linear-to-r from-primary via-purple-500 to-secondary" />

          <form onSubmit={handleAddJob} className="p-8 md:p-10 space-y-8">
            
            {/* Row 1: Title & Category */}
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Job Title */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Briefcase size={16} className="text-primary" />
                  Job Title
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="e.g. Senior React Developer"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/50"
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Layers size={16} className="text-primary" />
                  Category
                </label>
                <div className="relative">
                  <select
                    name="category"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled hidden>Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  {/* Chevron Icon */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Summary */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <FileText size={16} className="text-primary" />
                Job Description
              </label>
              <textarea
                name="summary"
                rows="5"
                required
                placeholder="Describe the role, responsibilities, and requirements..."
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/50 resize-y min-h-[120px]"
              />
            </div>

            {/* Row 3: Image URL */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <ImageIcon size={16} className="text-primary" />
                Cover Image URL
              </label>
              <input
                type="url"
                name="coverImage"
                required
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/50"
              />
            </div>

            {/* Row 4: Read-Only Info (User) */}
            <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-border/50">
              
              <div className="space-y-2 opacity-70">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <User size={16} />
                  Posted By
                </label>
                <input
                  type="text"
                  name="postedBy"
                  value={user?.displayName || ""}
                  readOnly
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-transparent text-muted-foreground cursor-not-allowed text-sm font-medium"
                />
              </div>

              <div className="space-y-2 opacity-70">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Mail size={16} />
                  Contact Email
                </label>
                <input
                  type="email"
                  name="userEmail"
                  value={user?.email || ""}
                  readOnly
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-transparent text-muted-foreground cursor-not-allowed text-sm font-medium"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto md:min-w-[200px] flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mx-auto "
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Posting...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Publish Job
                  </>
                )}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAJob;
