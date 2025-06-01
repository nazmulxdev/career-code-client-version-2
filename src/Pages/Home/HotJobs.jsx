import React from "react";
import JobCard from "../Shared/JobCard";
import LoadingSpinner from "../../Components/LoadingSpinner";

const HotJobs = ({ jobs, loading }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">
        Hot Jobs of the day
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
        {loading ? (
          <LoadingSpinner />
        ) : (
          jobs.map((job) => <JobCard key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default HotJobs;
