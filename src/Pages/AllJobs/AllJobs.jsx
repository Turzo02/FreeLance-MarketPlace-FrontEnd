import React, { Suspense, useEffect, useState } from "react";
import { Link } from "react-router";
import SplitText from "../../Components/ReactBits/SplitText";
const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [sortOrder, setSortOrder] = useState("descending");

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const sortedJobs = [...jobs].sort((a, b) => {
    if (sortOrder === "ascending") {
      return new Date(a.postedAt) - new Date(b.postedAt);
    } else {
      return new Date(b.postedAt) - new Date(a.postedAt);
    }
  });
  return (
    <div className="section p-4 ">
      <h2 className="glassmorphic-card text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight  tracking-tight text-center my-7 py-6 text-indigo-500">
        
         
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
      <div className="flex justify-end mb-4">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-indigo-400 rounded-lg px-4 py-2 bg-indigo-500 text-white "
        >
          <option value="descending">Sort by Newest</option>
          <option value="ascending">Sort by Oldest</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {sortedJobs.map((job) => (
          <div
            key={job._id}
            className="glassmorphic-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 "
          >
            <img
              className="w-full h-48 object-cover "
              src="https://i.ibb.co.com/QvQrhm2Q/404.png"
              alt="Job cover"
            />
            <div className="p-6">
              <div className="text-sm font-semibold = uppercase tracking-wide mb-2">
                {job.category}
              </div>
              <h3 className="text-xl font-bold = mb-2">{job.title}</h3>
              <p className="text-gray-400 mb-4">{job.summary}</p>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>Posted by: {job.postedBy}</span>
                <span>{new Date(job.postedAt).toLocaleDateString()}</span>
              </div>
              <Link to={`/jobs/${job._id}`}>
                <button
                  className="mt-8 px-10 py-4 bg-indigo-500 text-white font-bold text-lg rounded-full shadow-xl 
                         hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-[1.02] 
                         focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-75 w-full cursor-pointer"
                >
                  {" "}
                  View Details{" "}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
