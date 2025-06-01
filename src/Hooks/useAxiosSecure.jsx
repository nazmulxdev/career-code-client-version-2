import axios from "axios";
import UseAuth from "./UseAuth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { currentUser, signOutUser } = UseAuth();

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${currentUser.accessToken}`;
    return config;
  });

  // response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error);
      if (error.status === 401 || error.status === 403) {
        signOutUser()
          .then(() => {
            console.log("user sign  out");
          })
          .cath((err) => {
            console.log(err.message);
          });
      }

      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export default useAxiosSecure;
