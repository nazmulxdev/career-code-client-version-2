import React, { useContext } from "react";
import logInAnimation from "./../../assets/Lottes/logIn-animation.json";
import {
  sweetErrorMessage,
  sweetSuccessMessage,
} from "../../Utilities/sweetAlertFN";
import AuthContext from "../../Context/AuthContext";
import NavBar from "../Shared/NavBar";
import Lottie from "lottie-react";
import SocialLogIn from "../Shared/SocialLogIn";
import { useLocation, useNavigate } from "react-router";

const LogIn = () => {
  const { logInUser, setLoading, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    logInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoading(false);
        setCurrentUser(user);
        sweetSuccessMessage("You have log in Successfully").then(() => {
          navigate(from);
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        sweetErrorMessage(errorMessage);
      });
  };
  return (
    <div>
      <NavBar></NavBar>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie
              style={{ width: "30rem" }}
              animationData={logInAnimation}
              loop={true}
            ></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-5xl font-bold">LogIn now!</h1>

              <form className="fieldset" onSubmit={handleLogIn}>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4" type="submit">
                  LogIn
                </button>
              </form>
              <SocialLogIn from={from}></SocialLogIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
