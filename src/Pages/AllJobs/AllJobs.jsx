import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Search,
  Filter,
  SlidersHorizontal,
  Frown,
  Briefcase,
} from "lucide-react";

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
    const matchesTitle = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? job.category === selectedCategory
      : true;
    return matchesTitle && matchesCategory;
  });

  // --- Logic: Pagination ---
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const categories = [
    "Animation & 3D",
    "App Development",
    "Content Writing",
    "Digital Marketing",
    "Graphics Design",
    "SEO Optimization",
    "Social Media Management",
    "Video Editing",
    "Voiceover & Audio",
    "Web Development",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-28 px-4 sm:px-6 relative overflow-hidden transition-colors duration-300">
      <title>All Jobs | Freelance Marketplace</title>

      {/* --- Ambient Background Decor --- */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Header Section --- */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-2">
            <Briefcase size={12} />
            <span>Opportunities</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight">
            Find Your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60">
              Next Job
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Browse hundreds of active job listings. Filter by your expertise and
            start your next project today.
          </p>
        </div>

        {/* --- Floating Control Toolbar --- */}
        <div className="sticky top-24 z-30 mb-10">
          <div className="bg-card/80 backdrop-blur-xl border border-border/60 rounded-2xl p-4 shadow-lg flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="relative grow group">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
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
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground/70"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:w-auto w-full">
              {/* Category Filter */}
              <div className="relative min-w-[200px] flex-1 group">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                  <Filter size={18} />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground appearance-none cursor-pointer"
                >
                  <option value="">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                {/* Custom Chevron */}
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-muted-foreground">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>

              {/* Sort Dropdown */}
              <div className="relative min-w-[180px] flex-1 group">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                  <SlidersHorizontal size={18} />
                </div>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground appearance-none cursor-pointer"
                >
                  <option value="descending">Newest First</option>
                  <option value="ascending">Oldest First</option>
                </select>
                {/* Custom Chevron */}
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-muted-foreground">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Content Area --- */}
        {loading ? (
          // Loading Skeleton
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <JobCardSkeleton key={index} />
              ))}
          </div>
        ) : (
          <>
            {currentJobs.length === 0 ? (
              // Empty State
              <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-border rounded-3xl bg-card/30">
                <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mb-6 text-muted-foreground animate-pulse">
                  <Frown size={48} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  No jobs found
                </h3>
                <p className="text-muted-foreground max-w-md mb-8">
                  We couldn't find any jobs matching your search "{searchTerm}"
                  or selected category.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("");
                  }}
                  className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              // Results Grid
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentJobs.map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
              </div>
            )}

            {/* --- Pagination --- */}
            {totalPages > 1 && currentJobs.length > 0 && (
              <div className="flex justify-center items-center gap-3 mt-16">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-300
                      ${
                        currentPage === page
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-110"
                          : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary hover:-translate-y-1"
                      }
                    `}
                    >
                      {page}
                    </button>
                  ),
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllJobs;
