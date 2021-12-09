import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [signupOpen, setSignupOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

  const handleSignup = () => setSignupOpen(true);
  const handleSignIn = () => setSignInOpen(true);

  const handleClose = () => {
    setSignupOpen(false);
    setSignInOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        signInOpen,
        signupOpen,
        handleSignup,
        handleSignIn,
        handleClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
