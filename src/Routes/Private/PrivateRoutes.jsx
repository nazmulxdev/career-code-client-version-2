import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../../Components/LoadingSpinner";

const PrivateRoutes = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (!currentUser) {
    return <Navigate to="/logIn" state={location.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
