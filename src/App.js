import React, { useContext } from "react";

import { ModalContext } from "./hooks";

import Navbar from "./components/Navbar";

import NavbarModal from "./components/Modal";
const App = () => {
  const { signupOpen, signInOpen } = useContext(ModalContext);
  return (
    <>
      <Navbar />
      <div>{(signupOpen || signInOpen) && <NavbarModal />}</div>
    </>
  );
};

export default App;
