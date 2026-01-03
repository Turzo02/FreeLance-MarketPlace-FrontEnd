import React, { use } from "react";
import JobCard from "../../Components/JobCard";

const LatestJobs = ({ latestJobsPromise }) => {
  const LatestJobsData = use(latestJobsPromise);
  return (
    <div>
      <h1 className="text-center text-4xl lg:text-5xl my-14 font-bold text-indigo-500 ">
        Latest Jobs
      </h1>
      <JobCard LatestJobsData={LatestJobsData}></JobCard>
    </div>
  );
};

export default LatestJobs;
