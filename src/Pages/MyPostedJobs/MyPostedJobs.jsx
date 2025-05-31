import React, { Suspense } from "react";
import UseAuth from "../../Hooks/UseAuth";
import MyPostedJobLists from "./MyPostedJobLists";
import LoadingSpinner from "../../Components/LoadingSpinner";
import useApplicationApi from "../../API/useApplicationApi";

const MyPostedJobs = () => {
  const { currentUser } = UseAuth();
  const { myJobApplicationPromise } = useApplicationApi();
  return (
    <div>
      <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
        <MyPostedJobLists
          jobsCreatedByPromise={myJobApplicationPromise(currentUser.email)}
        ></MyPostedJobLists>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
