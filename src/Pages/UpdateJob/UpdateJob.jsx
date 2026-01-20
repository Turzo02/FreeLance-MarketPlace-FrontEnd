import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { 
  Briefcase, 
  User, 
  Layers, 
  FileText, 
  Image as ImageIcon, 
  Mail, 
  Save, 
  Loader2 
} from "lucide-react";
import SplitText from "../../Components/ReactBits/SplitText";
import toast from 'react-hot-toast';
import axios from "axios";

const UpdateJob = () => {
  const data = useLoaderData();
  const [userdata, setUserData] = useState(data);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { category, coverImage, postedBy, summary, title, userEmail, _id } = userdata;

  const categories = [
    "Animation & 3D", "App Development", "Content Writing", "Digital Marketing",
    "Graphics Design", "SEO Optimization", "Social Media Management",
    "Video Editing", "Voiceover & Audio", "Web Development"
  ];

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const updatedJobData = {
      title: form.title.value,
      postedBy: form.postedBy.value,
      category: form.category.value,
      summary: form.summary.value,
      coverImage: form.coverImage.value,
      userEmail: form.userEmail.value,
    };

    try {
      await axios.patch(
        `https://freelance-marketplace-api-server-smoky.vercel.app/jobs/${_id}`,
        updatedJobData
      );
      
      toast.success('Job updated successfully!');
      setUserData({ ...userdata, ...updatedJobData });
      
      setTimeout(() => {
        navigate(`/dashboard/myaddedjobs/${userEmail}`);
      }, 1000);
    } catch (err) {
      console.error("Error updating job:", err);
      toast.error('Failed to update. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-24 px-4 transition-colors duration-300">
      <title>Update Job | Dashboard</title>
      
      <div className="max-w-3xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-10 space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            <SplitText
              text="Update Job Details"
              className="inline-block"
              delay={50}
              duration={0.6}
              splitType="chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
            />
          </h1>
          <p className="text-muted-foreground">
            Edit the information below to keep your job post accurate.
          </p>
        </div>

        {/* --- Form Card --- */}
        <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
          
          {/* Decorative Top Bar */}
          <div className="h-2 bg-linear-to-r from-secondary via-primary to-secondary" />

          <form onSubmit={handleUpdate} className="p-8 md:p-10 space-y-8">
            
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
                  defaultValue={title}
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
                    defaultValue={category}
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
                Job Summary
              </label>
              <textarea
                name="summary"
                rows="5"
                defaultValue={summary}
                required
                placeholder="Describe the role responsibilities..."
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
                defaultValue={coverImage}
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
                  defaultValue={postedBy}
                  readOnly
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-transparent text-muted-foreground cursor-not-allowed text-sm font-medium"
                />
              </div>

              <div className="space-y-2 opacity-70">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Mail size={16} />
                  User Email
                </label>
                <input
                  type="email"
                  name="userEmail"
                  defaultValue={userEmail}
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
                className="w-full md:w-auto md:min-w-[200px] flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mx-auto"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Updating...
                  </>
                ) : (
                  <>
                    <Save size={20} />
                    Save Changes
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

export default UpdateJob;
