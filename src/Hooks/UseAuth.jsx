import React, { use } from "react";
import AuthContext from "../Context/AuthContext";

const UseAuth = () => {
  const authData = use(AuthContext);
  return authData;
};

export default UseAuth;
