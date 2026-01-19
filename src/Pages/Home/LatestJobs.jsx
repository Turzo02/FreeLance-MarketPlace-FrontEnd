import React, { use } from "react";
import JobCard from "../../Components/JobCard";

const LatestJobs = ({ latestJobsPromise }) => {
  const LatestJobsData = use(latestJobsPromise);
  return (
    <div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-foreground tracking-tight pb-16">
        Latest{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60">
          Jobs
        </span>
      </h1>

      <JobCard LatestJobsData={LatestJobsData}></JobCard>
    </div>
  );
};

export default LatestJobs;
