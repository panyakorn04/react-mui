import React from "react";
import ReactDOM from "react-dom";
import { ModalProvider } from "./hooks";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
