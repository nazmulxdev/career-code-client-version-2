import React from "react";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";
import {
  sweetErrorMessage,
  sweetSuccessMessage,
} from "../../Utilities/sweetAlertFN";

const AddJob = () => {
  const { currentUser } = UseAuth();
  const handleAddAJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const jobData = Object.fromEntries(formData.entries());

    // process salary range data
    const { min, max, currency, ...newJob } = jobData;
    newJob.salaryRange = { min, max, currency };

    //  process requirements data
    newJob.requirements = newJob.requirements
      .split(",")
      .map((requirement) => requirement.trim());

    // responsibilities
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((response) => response.trim());

    newJob.status = "active";
    axios
      .post("http://localhost:3000/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          sweetSuccessMessage(
            "This job has been saved and  published successfully"
          ).then(() => {
            form.reset();
          });
        }
      })
      .catch((error) => {
        sweetErrorMessage(error);
      });

    console.log(newJob);
  };
  return (
    <div>
      <h2>Please add a Job</h2>
      <form onSubmit={handleAddAJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="Your job title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="Your company name"
          />
          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="Your company location"
          />
          <label className="label">Company Logo</label>
          <input
            type="text"
            name="company_logo"
            className="input"
            placeholder="Your company logo url"
          />
        </fieldset>

        {/* job type */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              value="On-site"
              name="jobType"
              aria-label="On-site"
            />
            <input
              className="btn"
              type="radio"
              value="Remote"
              name="jobType"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              value="Hybrid"
              name="jobType"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>

        {/* job category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select
            defaultValue="Job Category"
            name="category"
            className="select"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>
        {/* Application deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Application deadline</legend>
          <input type="date" name="applicationDeadline" className="input" />
        </fieldset>
        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                name="min"
                className="input"
                placeholder="Minimum salary"
              />
            </div>

            <div>
              <label className="label">Maximum Salary</label>
              <input
                type="text"
                name="max"
                className="input"
                placeholder="Maximum salary"
              />
            </div>

            <div>
              <label className="label">Payment Currency</label>
              <select
                defaultValue="select a currency"
                name="currency"
                className="select"
              >
                <option disabled={true}>Select a Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>
        {/* job description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Description</legend>
          <textarea
            className="textarea"
            name="description"
            placeholder="Job description"
          ></textarea>
        </fieldset>
        {/* Job Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea
            className="textarea"
            name="requirements"
            placeholder="Requirements (separate by comma)"
          ></textarea>
        </fieldset>
        {/* Job Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            className="textarea"
            name="responsibilities"
            placeholder="Responsibilities (separate by comma)"
          ></textarea>
        </fieldset>
        {/* HR email and name */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">HR Related Info</legend>

          <label className="label">HR name</label>
          <input
            type="text"
            name="hr_name"
            className="input"
            placeholder="HR's name"
          />

          <label className="label">HR's Email</label>
          <input
            type="email"
            name="hr_email"
            defaultValue={currentUser.email}
            className="input"
            placeholder="HR's Email"
          />
        </fieldset>
        <input type="submit" className="btn" value="AddJob" />
      </form>
    </div>
  );
};

export default AddJob;
