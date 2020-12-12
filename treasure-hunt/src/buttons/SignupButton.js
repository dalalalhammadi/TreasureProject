import React from "react";
import { AuthButtonStyled } from "../Styles";
import SignupModal from "../modal/SignupModal";
import { useState } from "react";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <AuthButtonStyled onClick={openModal}>Sign up</AuthButtonStyled>
      <SignupModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SignupButton;
