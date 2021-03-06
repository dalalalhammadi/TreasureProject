import React from "react";
import { Link } from "react-router-dom";
import { AuthButtonStyled } from "../Styles";

const SigninButton = () => {
  return (
    <Link to="/signin">
      <AuthButtonStyled>Sign in</AuthButtonStyled>
    </Link>
  );
};

export default SigninButton;
