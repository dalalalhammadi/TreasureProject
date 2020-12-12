import React from "react";
import { Link } from "react-router-dom";
import { AuthButtonStyled } from "../Styles";

const TresureThings = () => {
  return (
    <Link to="/treasure">
      <AuthButtonStyled>Treasure ! </AuthButtonStyled>
    </Link>
  );
};

export default TresureThings;
