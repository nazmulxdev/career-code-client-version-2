import React from "react";
import { GridLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="mx-auto text-center my-16">
      <GridLoader color="green" size={50} className="max-w-sm "></GridLoader>
    </div>
  );
};

export default LoadingSpinner;
