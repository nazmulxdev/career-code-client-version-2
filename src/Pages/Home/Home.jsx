import React, { useContext, useEffect, useState } from "react";
import LoadingSpinner from "../../Components/LoadingSpinner";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("https://career-code-server-version-2.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Banner></Banner>
      <HotJobs jobs={jobs} loading={loading}></HotJobs>
    </div>
  );
};

export default Home;
