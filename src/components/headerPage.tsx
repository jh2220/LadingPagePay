import React, { useState } from "react";
import "../styles/HeaderPage.scss";
import { AiOutlineMenu } from "react-icons/ai";
import InstitutoPay from "../img/institutoPay.png";

const HeaderPage = () => {
  const [menuItens, setMenuItens] = useState([
    {
      text: "home",
      onClick: "temp",
    },
    {
      text: "Quem usa?",
      onClick: "temp",
    },
    {
      text: "Diferenciais",
      onClick: "temp",
    },
    {
      text: "Contato",
      onClick: "temp",
    },
  ]);

  const [menuHamburguerIsOpen, setMenuHamburguerIsOpen] = useState(false);

  return (
    <header
      id="mainHeader"
      style={{
        right: menuHamburguerIsOpen ? "0%" : "100%",
      }}
    >
      <div
        id="menuHamburguer"
        onClick={() => {
          setMenuHamburguerIsOpen(!menuHamburguerIsOpen);
        }}
        style={{
          color: menuHamburguerIsOpen ? "0%" : "#1a1a1a",
        }}
      >
        <AiOutlineMenu className="menuHamburgerIcon"></AiOutlineMenu>
      </div>

      <div id="headerContainer">
        <img src={InstitutoPay} />

        <ul>
          {menuItens.map((menuItens, index) => {
            return (
              <li>
                <a href="#showcase" id="menuItemHome">
                  <span className="tinyText">
                    {index > 8 ? index + 1 : `0${index + 1}`}
                  </span>
                  <p>{menuItens.text}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default HeaderPage;
