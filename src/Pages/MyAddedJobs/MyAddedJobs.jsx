import { CircleFadingArrowUp, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import SplitText from "../../Components/ReactBits/SplitText";
const MyAddedJobs = () => {
  const userJobsData = useLoaderData();

  const [jobs, setJobs] = useState(userJobsData);
  const handleDeleteUser = (id) => {
    fetch(`http://localhost:5000/jobs/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = jobs.filter((job) => job._id !== id);
        setJobs(remaining);
      });
  };

  return (
    <div className="section min-h-screen">
      <h1 className="text-center text-4xl  lg:text-5xl my-8 font-bold text-indigo-500 ">
                    <SplitText
                text="Your Added Job"
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
      </h1>
      {jobs.length === 0? (
          <p className="text-center text-gray-400">
          You have not added any jobs yet.
        </p>
      ):(
   <div className=" my-3">
        {jobs.map((job) => (
          <div
            key={job._id}
            className=" flex  flex-col md:flex-row justify-between items-start md:items-center glassmorphic-card p-2  rounded-2xl my-6 shadow-lg hover:shadow-xl transition-shadow duration-300  "
          >
            <div className="left flex gap-4 items-center">
              <div className="w-[150px] object-cover  rounded-2xl overflow-hidden ml-4 mt-4  mb-3 md:mt-0 md:ml-0 md:mb-0 ">
                <img src="https://i.ibb.co.com/QvQrhm2Q/404.png" alt="" />
              </div>
              <div>
                <h1 className="text-2xl ">{job.title}</h1>
                <h1 className="text-3xl font-bold text-indigo-400">
                  {job.category}
                </h1>
              </div>
            </div>

            <div className="right flex gap-4 p-4">
              <Link to={`/updateJob/${job._id}`}>
                <button className="btn  flex items-center justify-center gap-3 bg-green-500 text-white  rounded-lg hover:bg-green-600 transition cursor-pointer border-none ">

                  <CircleFadingArrowUp />
                  Update
                </button>
              </Link>
              <button
                onClick={() => handleDeleteUser(job._id)}
                className="btn flex-1 flex items-center justify-center gap-3 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition cursor-pointer border-none"
              >
                <Trash2 />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      
      )}

   
    </div>
  );
};

export default MyAddedJobs;
