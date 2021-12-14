import React, { useContext } from "react";

import { ModalContext } from "./hooks";

import NavBar from "./components/Navbar";
import NavbarModal from "./components/Modal";

const App = () => {
  const { signupOpen, signInOpen } = useContext(ModalContext);
  return (
    <>
      <NavBar />
      <div>{(signupOpen || signInOpen) && <NavbarModal />}</div>
    </>
  );
};

export default App;
