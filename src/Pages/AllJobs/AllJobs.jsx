import React, { Suspense, use } from "react";
import { Link } from "react-router";
const allJobsPromise = fetch("http://localhost:5000/jobs").then((res) =>
  res.json()
);
const AllJobs = () => {
  const allJobsData = use(allJobsPromise);
  return (
    <div className="section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {allJobsData.map((job) => (
        <div
          key={job._id}
          className="bg-indigo-50   rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img
            className="w-full h-48 object-cover rounded-t-xl"
            src="https://i.ibb.co.com/QvQrhm2Q/404.png"
            alt="Job cover"
          />
          <div className="p-6">
            <div className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-2">
              {job.category}
            </div>
            <h3 className="text-xl font-bold text-indigo-900 mb-2">
              {job.title}
            </h3>
            <p className="text-gray-700 mb-4">{job.summary}</p>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>Posted by: {job.postedBy}</span>
              <span>{new Date(job.postedAt).toLocaleDateString()}</span>
            </div>
            <Link to={`/jobDetails/${job._id}`}
            
            >

              <button   className="mt-8 px-10 py-4 bg-indigo-600 text-white font-bold text-lg rounded-full shadow-xl 
                         hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-[1.02] 
                         focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-75 w-full cursor-pointer">  View Details </button>
             
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllJobs;
