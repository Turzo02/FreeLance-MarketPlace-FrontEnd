import React, { use } from "react";
import JobCard from "../../Components/JobCard";

const LatestJobs = ({latestJobsPromise}) => {
    const LatestJobsData = use(latestJobsPromise)
  return (
    <div >
      <h1 className="text-center text-4xl my-6 font-bold text-indigo-500">LatestJobs</h1>
      <JobCard LatestJobsData={LatestJobsData}></JobCard>
    </div>
  );
};

export default LatestJobs;
