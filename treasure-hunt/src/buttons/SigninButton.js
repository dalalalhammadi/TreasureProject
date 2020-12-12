import React, { useState } from "react";
import SigninModal from "../modal/SigninModal";
import { AuthButtonStyled } from "../Styles";

const SigninButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <AuthButtonStyled onClick={openModal}>Sign in</AuthButtonStyled>
      <SigninModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SigninButton;
