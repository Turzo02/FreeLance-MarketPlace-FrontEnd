import React, { use } from "react";
import JobCard from "../../Components/JobCard";

const LatestJobs = ({ latestJobsPromise }) => {
  const LatestJobsData = use(latestJobsPromise);
  return (
    <div>
      <JobCard LatestJobsData={LatestJobsData}></JobCard>
    </div>
  );
};

export default LatestJobs;
