import React from "react";
import { Link } from "react-router-dom";
import { AuthButtonStyled } from "../Styles";

const SignupButton = () => {
  return (
    <Link to="/signup">
      <AuthButtonStyled>Sign up</AuthButtonStyled>
    </Link>
  );
};

export default SignupButton;
