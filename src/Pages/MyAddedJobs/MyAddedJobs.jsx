import { CircleFadingArrowUp, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import SplitText from "../../Components/ReactBits/SplitText";
import toast from 'react-hot-toast';
import axios from "axios";

const MyAddedJobs = () => {
  const userJobsData = useLoaderData();

  const [jobs, setJobs] = useState(userJobsData);
  const handleDeleteUser = (id) => {
    toast((t) => (
      <div className="flex flex-col gap-4">
        <p className="font-semibold">Are you sure you want to delete this job?</p>
        <p className="text-sm text-muted-foreground">You won't be able to revert this!</p>
        <div className="flex gap-2">
          <button
            onClick={() => {
              // Perform delete
              axios
                .delete(
                  `https://freelance-marketplace-api-server-smoky.vercel.app/jobs/${id}`
                )
                .then((res) => {
                  toast.success('Your Posted job has been Deleted.', {
                    id: t.id,
                    duration: 3000,
                  });
                  setJobs(jobs.filter((job) => job._id !== id));
                })
                .catch((error) => {
                  console.error("Error deleting job:", error);
                  toast.error('Failed to delete the job.', {
                    id: t.id,
                    duration: 4000,
                  });
                });
            }}
            className="px-3 py-2 bg-destructive text-destructive-foreground rounded hover:bg-destructive/90"
          >
            Delete
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-3 py-2 bg-muted text-muted-foreground rounded hover:bg-muted/80"
          >
            Cancel
          </button>
        </div>
      </div>
    ), {
      duration: Infinity,
      position: 'top-center',
    });
  };
  return (
    <div className="max-w-7xl min-h-screen">
      <title>My Added Jobs</title>
      <h1 className="text-center text-4xl  lg:text-5xl my-8 font-bold    ">
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
      {jobs.length === 0 ? (
        <p className="text-center  ">
          You have not added any jobs yet.
        </p>
      ) : (
        <div className=" my-3">
          {jobs.map((job) => (
            <div
              key={job._id}
              className=" flex  flex-col md:flex-row justify-between items-start md:items-center   p-2  rounded-2xl my-6 shadow-lg hover:shadow-xl transition-shadow duration-300  "
            >
              <div className="left flex gap-4 items-center">
                <div className="w-[150px] object-cover  rounded-2xl overflow-hidden mx-4 my-4  ">
                  <img
                    src={job.coverImage}
                    alt="jobCoverImage"
                    onError={(e) => {
                      e.target.src =
                        "https://i.ibb.co.com/GX24tSY/all-sample.png";
                    }}
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold   ">
                    {job.title}
                  </h1>
                  <h1 className=" font-semibold   ">
                    {job.category}
                  </h1>
                </div>
              </div>

              <div className="right flex gap-4 p-4">
                <Link to={`/updateJob/${job._id}`}>
                  <button className="   flex items-center justify-center gap-3     text-white hover:   -600   rounded-lg  transition cursor-pointer border-none ">
                    <CircleFadingArrowUp />
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => handleDeleteUser(job._id)}
                  className="  flex-1 flex items-center justify-center gap-3  py-2 rounded-lg      hover:bg-gray-400 transition cursor-pointer border-none"
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
