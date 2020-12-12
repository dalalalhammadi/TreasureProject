import React from "react";
import { Link } from "react-router-dom";
import RandomList from "../componenets/RandomList";
import { AuthButtonStyled } from "../Styles";
const RandomThings = () => {
  return (
    <Link to="/random">
      <AuthButtonStyled>Random Things ! </AuthButtonStyled>
    </Link>
  );
};

export default RandomThings;
