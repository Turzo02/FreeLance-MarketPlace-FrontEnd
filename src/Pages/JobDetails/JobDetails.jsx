import React, { use } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";

const JobDetails = () => {
  const data = useLoaderData();
  const { user } = use(AuthContext);
  const postedJobUserMail = data?.userEmail;
  const loggedInUserMail = user?.email;

  //if loggedInuserMail === acceptedUserMail => disable button you already accepted the job

  const handleAcceptedJob = () => {
    const acceptedUserData = {
      acceptedUserMail: user?.email,
    };

    axios
      .patch(
        `https://freelance-marketplace-api-server-smoky.vercel.app/acceptedjobs/${data._id}`,
        acceptedUserData
      )
      .then((res) => {
        // console.log("Job accepted successfully:", res.data);
      })
      .catch((error) => {
        console.error("Error updating job status:", error);
      });
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className=" shadow-lg rounded-2xl overflow-hidden">
          {/* Cover Image */}
          <img
            src={data.coverImage}
            onError={(e) => {
              e.target.src = "https://i.ibb.co.com/GX24tSY/all-sample.png";
            }}
            alt={data.title}
            className="w-full h-60 sm:h-80 object-cover"
          />

          {/* Content Section */}
          <div className="p-6 sm:p-10 glassmorphic-card">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold">{data.title}</h1>
              <span className="py-2 px-4 glassmorphic-card  text-sm font-semibold rounded-full">
                {data.category}
              </span>
            </div>

            {/* Posted Info */}
            <div className="mt-3 text-gray-400 text-sm">
              <p>
                Posted by{" "}
                <span className="font-medium text-gray-400">
                  {data.postedBy}
                </span>
              </p>
              <p className="mt-1">
                {new Date(data.postedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Summary */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Job Summary</h2>
              <p className=" leading-relaxed">{data.summary}</p>
            </div>

            {/* Contact Button */}

            <div className="mt-8">
              {postedJobUserMail === loggedInUserMail ? (
                <button
                  className="btn btn-secondary cursor-not-allowed"
                  disabled
                >
                  Cannot accept your own job
                </button>
              ) : data.acceptedUserMail?.includes(loggedInUserMail) ? (
                <button
                  className="btn btn-secondary cursor-not-allowed"
                  disabled
                >
                  You already accepted this job
                </button>
              ) : (
                <Link to="/acceptedTasks">
                  <button
                    onClick={handleAcceptedJob}
                    className="inline-block w-full sm:w-auto cursor-pointer text-center bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-600 transition"
                  >
                    Accept the Job
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
