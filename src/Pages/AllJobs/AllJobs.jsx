import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import SplitText from "../../Components/ReactBits/SplitText";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import axios from "axios";
import { UserCheck } from "lucide-react";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [sortOrder, setSortOrder] = useState("descending");
  const [loading, setLoading] = useState(true);

  // New states for search, category filter, and pagination
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
        console.log(error);
        setLoading(false);
      });
  }, []);

  const sortedJobs = [...jobs].sort((a, b) => {
    if (sortOrder === "ascending") {
      return new Date(a.postedAt) - new Date(b.postedAt);
    } else {
      return new Date(b.postedAt) - new Date(a.postedAt);
    }
  });

  // Filtered jobs based on search term and selected category
  const filteredJobs = sortedJobs.filter((job) => {
    const matchesTitle = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? job.category === selectedCategory : true;
    return matchesTitle && matchesCategory;
  });

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <title>All Jobs</title>
      <h2 className="  text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-center my-7 py-6   ">
        <SplitText
          text="Find Your Next Job"
          className=""
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </h2>

      {/* Sorting, Search, and Category Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between items-center">
        {/* Sort */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border     rounded-lg px-4 py-2    text-white w-full md:w-auto"
        >
          <option value="descending">Sort by Newest</option>
          <option value="ascending">Sort by Oldest</option>
        </select>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by job title..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="border     rounded-lg px-4 py-2 w-full md:w-1/3"
        />

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentPage(1);
          }}
          className="border     rounded-lg px-4 py-2 w-full md:w-1/3    text-white"
        >
          <option value="">All Categories</option>
          <option>Animation & 3D</option>
          <option>App Development</option>
          <option>Content Writing</option>
          <option>Digital Marketing</option>
          <option>Graphics Design</option>
          <option>SEO Optimization</option>
          <option>Social Media Management</option>
          <option>Video Editing</option>
          <option>Voiceover & Audio</option>
          <option>Web Development</option>
        </select>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {/* Show message if no jobs found */}
          {currentJobs.length === 0 ? (
            <h2 className="text-center text-red-500 text-xl my-10">
              No jobs found matching your search or selected category.
            </h2>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentJobs.map((job) => (
                <div
                  key={job._id}
                  className="  rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    className="w-full h-48 object-cover"
                    src={job.coverImage}
                    alt="Job cover"
                    onError={(e) => {
                      e.target.src = "https://i.ibb.co.com/GX24tSY/all-sample.png";
                    }}
                  />
                  <div className="p-6">
                    <div className="text-sm font-semibold uppercase   mb-2">
                      {job.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <p className="  mb-4 line-clamp-2">{job.summary}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="flex justify-center items-center gap-2">
                        <UserCheck /> {job.postedBy}
                      </span>
                      <span>{new Date(job.postedAt).toLocaleDateString()}</span>
                    </div>
                    <Link to={`/jobs/${job._id}`}>
                      <button
                        className="mt-8 px-10 py-4    text-white font-bold text-lg rounded-sm shadow-xl 
                         hover:   -700 transition duration-300 ease-in-out transform hover:scale-[1.02] 
                         focus:outline-none focus:ring-4 focus:  focus:ring-opacity-75 w-full cursor-pointer"
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && currentJobs.length > 0 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === page
                      ? "   text-white"
                      : "    hover: "
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllJobs;
