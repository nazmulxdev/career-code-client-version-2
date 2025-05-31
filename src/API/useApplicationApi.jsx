import useAxiosSecure from "../Hooks/useAxiosSecure";

const useApplicationApi = () => {
  const axiosSecure = useAxiosSecure();
  const myJobApplicationPromise = (email) => {
    return axiosSecure
      .get(`/jobs/applications?email=${email}`)
      .then((res) => res.data);
  };
  return {myJobApplicationPromise};
};

export default useApplicationApi;
