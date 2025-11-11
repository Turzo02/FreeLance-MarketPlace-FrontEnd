import React, { use } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const JobDetails = () => {
  const data = useLoaderData();
  const { user } = use(AuthContext);

  const postedJobUserMail = data?.userEmail;
  const loggedInUserMail = user?.email;

  const handleAcceptedJob = () => {
    const acceptedUserData = {
      acceptedUserMail: user?.email,
    };
    //patch method
    fetch(`http://localhost:5000/acceptedjobs/${data._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(acceptedUserData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className=" shadow-lg rounded-2xl overflow-hidden">
          {/* Cover Image */}
          <img
            src="https://i.ibb.co.com/QvQrhm2Q/404.png"
            alt={data.title}
            className="w-full h-60 sm:h-80 object-cover"
          />

          {/* Content Section */}
          <div className="p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                {data.title}
              </h1>
              <span className="px-4 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                {data.category}
              </span>
            </div>

            {/* Posted Info */}
            <div className="mt-3 text-gray-500 text-sm">
              <p>
                Posted by{" "}
                <span className="font-medium text-gray-800">
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
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Job Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">{data.summary}</p>
            </div>

            {/* Contact Button */}
            <div className="mt-8">
              {/* Only allow accepting jobs posted by other than logged-in users. */}
              {postedJobUserMail === loggedInUserMail ? (
                <button
                  className="btn btn-secondary cursor-not-allowed"
                  disabled
                >
                  Cannot accept your own job
                </button>
              ) : (
                <Link to="/acceptedTasks">
                  <button
                    onClick={handleAcceptedJob}
                    className="inline-block w-full sm:w-auto text-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
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
