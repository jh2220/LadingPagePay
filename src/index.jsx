import React from "react";
import ReactDOM from "react-dom/client";
import HeaderPage from "./components/headerPage.tsx";
import ShowCase from "./components/ShowCase.tsx";
import Users from "./components/users.tsx";
import Variation from "./components/variation.tsx";
import FooterPage from "./components/footerPage.tsx";
import reportWebVitals from "./reportWebVitals";
import "./styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <HeaderPage />
    <ShowCase />
    <Users />
    <Variation />
    <FooterPage />
  </>
);

reportWebVitals();
