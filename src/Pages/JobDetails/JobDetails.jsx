import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdWorkOutline, MdOutlineDateRange, MdEmail } from "react-icons/md";
import { FaMoneyBillWave, FaUserTie } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();
  const {
    _id,
    title,
    company,
    company_logo,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
  } = job;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-base-100 rounded-xl shadow-lg space-y-6 mt-6">
      {/* Top Info */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={company_logo}
          alt={company}
          className="w-24 h-24 rounded-full border object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-lg text-gray-600">{company}</p>

          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <HiOutlineLocationMarker className="text-lg" />
              {location}
            </span>
            <span className="flex items-center gap-1">
              <MdWorkOutline className="text-lg" />
              {jobType}
            </span>
            <span className="flex items-center gap-1">
              <MdWorkOutline className="text-lg" />
              Category: {category}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Job Description</h2>
        <p className="text-gray-700">{description}</p>
      </div>

      {/* Requirements */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Requirements</h2>
        <ul className="list-disc list-inside text-gray-700">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-700">
          {responsibilities.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>

      {/* Other Details */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <FaMoneyBillWave className="text-xl text-green-600" />
          <div>
            <h2 className="text-lg font-medium">Salary Range</h2>
            <p className="text-gray-700">
              {salaryRange.min} - {salaryRange.max}{" "}
              {salaryRange.currency.toUpperCase()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineDateRange className="text-xl text-blue-600" />
          <div>
            <h2 className="text-lg font-medium">Application Deadline</h2>
            <p className="text-gray-700">{applicationDeadline}</p>
          </div>
        </div>
      </div>

      {/* HR Contact */}
      <div className="flex items-center gap-2 mt-4">
        <FaUserTie className="text-xl text-purple-600" />
        <div>
          <h2 className="text-lg font-medium">HR Contact</h2>
          <p className="text-gray-700">
            {hr_name} —{" "}
            <MdEmail className="inline text-base text-red-500 mr-1" />
            <a className="text-blue-500" href={`mailto:${hr_email}`}>
              {hr_email}
            </a>
          </p>
        </div>
      </div>

      {/* Apply Button */}
      <div className="text-center mt-6">
        <Link to={`/apply/${_id}`}>
          <button className="btn btn-primary">Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
