import React from "react";
import { Link, useNavigate, useParams } from "react-router";
import AuthContext from "../../Context/AuthContext";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";
import { sweetSuccessMessage } from "../../Utilities/sweetAlertFN";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { currentUser } = UseAuth();
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const gitHub = form.gitHub.value;
    const resume = form.resume.value;
    const userId = currentUser.uid;
    const application = {
      jobId,
      applicantEmail: currentUser.email,
      applicantUID: userId,
      linkedIn,
      gitHub,
      resume,
    };

    axios
      .post(
        "https://career-code-server-version-2.vercel.app/applications",
        application,
      )
      .then((res) => {
        if (res.data.insertedId) {
          sweetSuccessMessage("Application has been submitted successful").then(
            () => {
              navigate("/myApplications");
            },
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <p className="text-4xl font-bold text-center">
        Apply for this job :
        <Link className="text-green-600" to={`/jobs/${jobId}`}>
          Details
        </Link>
      </p>
      <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <label className="label">LinkedIn Link</label>
          <input
            type="url"
            name="linkedIn"
            className="input w-full"
            placeholder="Your linkedin profile link"
          />

          <label className="label">GitHub Link</label>
          <input
            type="url"
            name="gitHub"
            className="input w-full"
            placeholder="Your github link"
          />

          <label className="label">Resume Link</label>
          <input
            type="url"
            className="input w-full"
            name="resume"
            placeholder="Your resume link"
          />
          <input
            type="submit"
            className="btn w-full mt-2"
            value="Apply"
          ></input>
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
