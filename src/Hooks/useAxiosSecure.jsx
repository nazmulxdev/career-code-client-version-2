import axios from "axios";
import UseAuth from "./UseAuth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { currentUser } = UseAuth();

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${currentUser.accessToken}`;
    return config;
  });

  return axiosInstance;
};

export default useAxiosSecure;
 