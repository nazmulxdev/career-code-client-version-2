import React from "react";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company_logo,
  } = job;

  return (
    <div className="card bg-base-100 shadow-xl p-4 border">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={company_logo}
          alt={company}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>

      <div className="space-y-2">
        <p>
          <span className="font-semibold">Location:</span> {location}
        </p>
        <p>
          <span className="font-semibold">Type:</span> {jobType}
        </p>
        <p>
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p>
          <span className="font-semibold">Deadline:</span> {applicationDeadline}
        </p>
        <p>
          <span className="font-semibold">Salary:</span> {salaryRange.min} -{" "}
          {salaryRange.max} {salaryRange.currency.toUpperCase()}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">About:</span>{" "}
          {description.slice(0, 100)}...
        </p>
      </div>

      <div className="mt-4">
        <Link to={`jobs/${_id}`}>
          <button className="btn btn-primary w-full">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
