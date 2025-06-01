import React from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationLists = ({ applications }) => {
  return (
    <div>
      <p>Job applied so far: {applications.length}</p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <JobApplicationRow
                application={application}
                key={application._id}
                index={index}
              ></JobApplicationRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationLists;
