import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { ModalContext } from "../hooks";

import Signup from "../pages/Signup";
import SignIn from "../pages/SignIn";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 4,
};

const NavbarModal = () => {
  const { signupOpen, signInOpen, handleClose } = useContext(ModalContext);

  return (
    <>
      <Modal
        open={signupOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Signup />
        </Box>
      </Modal>

      <Modal
        open={signInOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SignIn />
        </Box>
      </Modal>
    </>
  );
};
export default NavbarModal;
