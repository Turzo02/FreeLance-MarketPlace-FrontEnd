import { CircleFadingArrowUp, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import SplitText from "../../Components/ReactBits/SplitText";
import Swal from "sweetalert2";
const MyAddedJobs = () => {
  const userJobsData = useLoaderData();

  const [jobs, setJobs] = useState(userJobsData);
  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure Want to delete this job?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#b21c40",
      cancelButtonColor: "#4f39f6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://freelance-marketplace-api-server-smoky.vercel.app/jobs/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            Swal.fire("Deleted!", "The job has been deleted.", "success").then(
              () => {
                const remaining = jobs.filter((job) => job._id !== id);
                setJobs(remaining);
              }
            );
          })
          .catch((error) => {
            console.error(error);
            Swal.fire("Error!", "Failed to delete the job.", "error");
          });
      }
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
      {jobs.length === 0 ? (
        <p className="text-center text-gray-400">
          You have not added any jobs yet.
        </p>
      ) : (

        <div className=" my-3">
          {jobs.map((job) => (
            <div
              key={job._id}
              className=" flex  flex-col md:flex-row justify-between items-start md:items-center glassmorphic-card p-2  rounded-2xl my-6 shadow-lg hover:shadow-xl transition-shadow duration-300  "
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
                  <h1 className="text-3xl font-bold text-indigo-400 ">
                    {job.title}
                  </h1>
                  <h1 className=" font-semibold text-gray-400 ">
                    {job.category}
                  </h1>
                </div>
              </div>

              <div className="right flex gap-4 p-4">
                <Link to={`/updateJob/${job._id}`}>
                  <button className="btn  flex items-center justify-center gap-3  bg-indigo-500 text-white hover:bg-indigo-600   rounded-lg  transition cursor-pointer border-none ">
                    <CircleFadingArrowUp />
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => handleDeleteUser(job._id)}
                  className="btn flex-1 flex items-center justify-center gap-3  py-2 rounded-lg  bg-gray-300 text-gray-800 hover:bg-gray-400 transition cursor-pointer border-none"
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
