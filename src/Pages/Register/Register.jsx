import React, { useContext } from "react";
import NavBar from "../Shared/NavBar";
import Lottie from "lottie-react";
import registerAnimation from "./../../assets/Lottes/register-animaton.json";
import AuthContext from "../../Context/AuthContext";
import {
  sweetErrorMessage,
  sweetSuccessMessage,
} from "../../Utilities/sweetAlertFN";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/fireBase.init";
import SocialLogIn from "../Shared/SocialLogIn";

const Register = () => {
  const { registerUser, setCurrentUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const updateUser = {
      displayName: name,
      photoURL: photoUrl,
    };
    console.log(name, email, photoUrl, password);
    registerUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, updateUser).then(() => {
          setCurrentUser(user);
          sweetSuccessMessage("User Register Successful");
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
              animationData={registerAnimation}
              loop={true}
            ></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <form className="fieldset" onSubmit={handleRegister}>
                <label className="label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Your name"
                />
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photoUrl"
                  className="input"
                  placeholder="Your Photo Url"
                />
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
                  Register
                </button>
              </form>
              <SocialLogIn></SocialLogIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
