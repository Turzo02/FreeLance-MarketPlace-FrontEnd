import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search, Filter, SlidersHorizontal, Frown } from "lucide-react";

// Components
import SplitText from "../../Components/ReactBits/SplitText";
import JobCard from "./JobCard";
import JobCardSkeleton from "../../Components/CardSkeleton/JobCardSkeleton";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [sortOrder, setSortOrder] = useState("descending");
  const [loading, setLoading] = useState(true);

  // Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  const jobsPerPage = 8;

  useEffect(() => {
    axios
      .get("https://freelance-marketplace-api-server-smoky.vercel.app/jobs")
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  // --- Logic: Sorting & Filtering ---
  const sortedJobs = [...jobs].sort((a, b) => {
    if (sortOrder === "ascending") {
      return new Date(a.postedAt) - new Date(b.postedAt);
    } else {
      return new Date(b.postedAt) - new Date(a.postedAt);
    }
  });

  const filteredJobs = sortedJobs.filter((job) => {
    const matchesTitle = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? job.category === selectedCategory : true;
    return matchesTitle && matchesCategory;
  });

  // --- Logic: Pagination ---
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const categories = [
    "Animation & 3D", "App Development", "Content Writing", "Digital Marketing",
    "Graphics Design", "SEO Optimization", "Social Media Management",
    "Video Editing", "Voiceover & Audio", "Web Development"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 transition-colors duration-300">
      <title>All Jobs | Freelance Marketplace</title>
      
      <div className="max-w-7xl mx-auto my-20">
        
        {/* --- Header Section --- */}
        <div className="text-center my-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <SplitText
              text="Find Your Next Job"
              className="inline-block"
              delay={50}
              duration={0.6}
              ease="circOut"
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
            />
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse hundreds of active job listings and find the perfect match for your skills.
          </p>
        </div>

        {/* --- Control Toolbar (Search & Filter) --- */}
        <div className="bg-card border border-border rounded-2xl p-4 shadow-sm flex flex-col lg:flex-row gap-4 = backdrop-blur-md bg-opacity-95">
          
          {/* Search Input */}
          <div className="relative grow ">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search by job title..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground/70"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 lg:w-auto w-full">
            {/* Category Filter */}
            <div className="relative min-w-[200px] flex-1">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
                <Filter size={18} />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-8 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground appearance-none cursor-pointer"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="relative min-w-[180px] flex-1">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
                <SlidersHorizontal size={18} />
              </div>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full pl-10 pr-8 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground appearance-none cursor-pointer"
              >
                <option value="descending">Newest First</option>
                <option value="ascending">Oldest First</option>
              </select>
            </div>
          </div>
        </div>

        {/* --- Content Area --- */}
        {loading ? (
          // Loading Skeleton Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(8).fill(0).map((_, index) => (
              <JobCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <>
            {currentJobs.length === 0 ? (
              // Empty State
              <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-border rounded-3xl bg-card/50">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6 text-muted-foreground">
                  <Frown size={48} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">No jobs found</h3>
                <p className="text-muted-foreground max-w-md">
                  We couldn't find any jobs matching your search "{searchTerm}" or selected category. Try adjusting your filters.
                </p>
                <button 
                  onClick={() => { setSearchTerm(""); setSelectedCategory(""); }}
                  className="mt-6 text-primary font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              // Results Grid
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
                {currentJobs.map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
              </div>
            )}

            {/* --- Pagination --- */}
            {totalPages > 1 && currentJobs.length > 0 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => {
                       setCurrentPage(page);
                       window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center font-medium transition-all duration-300
                      ${
                        currentPage === page
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-110"
                          : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary"
                      }
                    `}
                  >
                    {page}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllJobs;
