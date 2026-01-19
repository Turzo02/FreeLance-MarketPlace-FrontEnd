import React, { use } from "react";
import JobCard from "../../Components/JobCard";

const LatestJobs = ({ latestJobsPromise }) => {
  const LatestJobsData = use(latestJobsPromise);
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight text-center my-14">
        Latest <span className="text-primary">Jobs</span>
      </h1>
      <JobCard LatestJobsData={LatestJobsData}></JobCard>
    </div>
  );
};

export default LatestJobs;
