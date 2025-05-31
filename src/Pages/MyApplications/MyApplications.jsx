import React, { Suspense, useEffect, useState } from "react";
import ApplicationsStats from "./ApplicationsStats";
import ApplicationLists from "./ApplicationLists";
import LoadingSpinner from "../../Components/LoadingSpinner";
import UseAuth from "../../Hooks/UseAuth";

const MyApplications = () => {
  const { currentUser } = UseAuth();
  const [loading, setLoading] = useState(true);
  const [applications, setApplications] = useState([]);

  console.log(currentUser.accessToken);

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://localhost:3000/application?applicantUID=${currentUser?.uid}&applicantEmail=${currentUser?.email}`,
      {
        headers: {
          authorization: `Bearer ${currentUser.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setApplications(data);
        setLoading(false);
      });
  }, [currentUser]);
  return (
    <div>
      <ApplicationsStats></ApplicationsStats>
      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <ApplicationLists applications={applications}></ApplicationLists>
      )}
    </div>
  );
};

export default MyApplications;
