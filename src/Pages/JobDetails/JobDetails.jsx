import React from "react";
import { useLoaderData } from "react-router";

const JobDetails = () => {
  const data = useLoaderData();

  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
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
              <button
                href={`mailto:${data.userEmail}`}
                className="inline-block w-full sm:w-auto text-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Accept the job
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
