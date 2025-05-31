import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import {
  sweetErrorMessage,
  sweetSuccessMessage,
} from "../../Utilities/sweetAlertFN";

const ViewApplications = () => {
  const { id } = useParams();
  const applications = useLoaderData();
  const handleStatusChange = (event, application) => {
    console.log(event.target.value, application);

    axios
      .patch(`http://localhost:3000/applications/${application}`, {
        status: event.target.value,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          sweetSuccessMessage("Status Update successful");
        }
      })
      .catch((error) => {
        sweetErrorMessage(error);
      });
  };
  return (
    <div>
      <p>
        {applications.length} applications for : {id}
      </p>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Applicant Email</th>
              <th>LinkedIn Link</th>
              <th>GitHub Link</th>
              <th>Resume</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{application.applicantEmail}</td>
                <td>{application.linkedIn}</td>
                <td>{application.gitHub}</td>
                <td>{application.resume}</td>
                <td>
                  <select
                    defaultValue={application.status}
                    onChange={(event) =>
                      handleStatusChange(event, application._id)
                    }
                    name="status"
                    className="select"
                  >
                    <option disabled={true}>Update Status</option>
                    <option>Pending</option>
                    <option>Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
