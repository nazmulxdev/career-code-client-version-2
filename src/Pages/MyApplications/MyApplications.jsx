import { useEffect, useState } from "react";
import ApplicationsStats from "./ApplicationsStats";
import ApplicationLists from "./ApplicationLists";
import LoadingSpinner from "../../Components/LoadingSpinner";
import UseAuth from "../../Hooks/UseAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyApplications = () => {
  const { currentUser } = UseAuth();
  const [loading, setLoading] = useState(true);
  const [applications, setApplications] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(
        `/application?applicantUID=${currentUser?.uid}&applicantEmail=${currentUser?.email}`,
      )
      .then((data) => {
        setApplications(data.data);
        setLoading(false);
      });

    // its general system of fetching data
    // fetch(
    //   `https://career-code-server-version-2.vercel.app/application?applicantUID=${currentUser?.uid}&applicantEmail=${currentUser?.email}`,
    //   {
    //     headers: {
    //       authorization: `Bearer ${currentUser.accessToken}`,
    //     },
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setApplications(data);
    //     setLoading(false);
    //   });
  }, [currentUser, axiosSecure]);
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
