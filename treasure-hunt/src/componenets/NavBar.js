import React from "react";
import authStore from "../stores/authStore";
import SigninButton from "../buttons/SigninButton";
import SignupButton from "../buttons/SignupButton";
import { BiLogInCircle } from "react-icons/bi";

const NavBar = () => {
  return (
    <div>
      {authStore.user ? (
        <>
          <p> Hi , {authStore.user.username} </p>
          <BiLogInCircle />
        </>
      ) : (
        <>
          <SigninButton />
          <SignupButton />
        </>
      )}
    </div>
  );
};

export default NavBar;
