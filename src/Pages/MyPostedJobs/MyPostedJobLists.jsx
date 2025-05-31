import React, { use } from "react";
import { Link } from "react-router";

const MyPostedJobLists = ({ jobsCreatedByPromise }) => {
  const myJobs = use(jobsCreatedByPromise);
  console.log(myJobs);
  return (
    <div>
      <p className="text-4xl">this is my cerated jobs : {myJobs.length}</p>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Total Applied</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myJobs.map((job, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.application_count}</td>
                <td>
                  <Link to={`/applications/${job._id}`}>View Applications</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobLists;
