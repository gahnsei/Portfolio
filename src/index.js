import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./Components/NavBar";
import FullPage from "./Components/FullPage";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <FullPage />
  </React.StrictMode>
);

reportWebVitals();
