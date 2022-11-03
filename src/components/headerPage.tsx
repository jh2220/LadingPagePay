import React, { useRef, useState } from "react";
import "../styles/HeaderPage.scss";
import { AiOutlineMenu } from "react-icons/ai";
import InstitutoPay from "../img/institutoPay.png";

interface IHeaderPage {
  menuItens: any,
  menuHeight: string
}

const HeaderPage: React.FC<IHeaderPage> = (props) => {

  const { menuItens, menuHeight } = props

  const [menuHamburguerIsOpen, setMenuHamburguerIsOpen] = useState(false);

  return (
    <header
      id="mainHeader"
      style={{
        right: menuHamburguerIsOpen ? "0%" : "100%",
        height: menuHeight,
      }}
    >
      <div
        id="menuHamburguer"
        onClick={() => {
          setMenuHamburguerIsOpen(!menuHamburguerIsOpen);
        }}
      >
        <AiOutlineMenu
          style={{
            color: menuHamburguerIsOpen ? "#cd0028" : "#1a1a1a",
          }}
          className="menuHamburgerIcon"
        />
      </div>

      <div id="headerContainer">
        <img src={InstitutoPay} />

        <ul>
          {menuItens.map((menuItens, index) => {
            return (
              <li onClick={() => { menuItens.click(); setMenuHamburguerIsOpen(!menuHamburguerIsOpen); }}>
                <div id="menuItemHome" style={{ color: menuItens.color }}>
                  <span className="tinyText">
                    {index > 8 ? index + 1 : `0${index + 1}`}
                  </span>
                  <p>{menuItens.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default HeaderPage;
