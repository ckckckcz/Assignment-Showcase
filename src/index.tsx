import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Navbar />
    <Header />
  </React.StrictMode>
);
