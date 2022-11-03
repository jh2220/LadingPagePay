import React, { useEffect, useRef, useState } from 'react';
import HeaderPage from "./components/headerPage.tsx";
import ShowCase from "./components/ShowCase.tsx";
import Users from "./components/users.tsx";
import Variation from "./components/variation.tsx";
import FooterPage from "./components/footerPage.tsx";

function App() {

  const refShowCase = useRef(null);
  const refUsers = useRef(null);
  const refVariation = useRef(null);
  const refFooter = useRef(null);

  const [indexColor, setIndexColor] = useState(0);
  const [menuHeight, setMenuHeight] = useState("100px");

  const menuItens = [
    {
      text: "home",
      click: () => { refShowCase.current?.scrollIntoView({ behavior: 'smooth' }, 2000) },
      color: indexColor === 0 ? "#1a1a1a" : "#cccccc",
    },
    {
      text: "Quem usa?",
      click: () => { refUsers.current?.scrollIntoView({ behavior: 'smooth' }, 2000) },
      color: indexColor === 1 ? "#1a1a1a" : "#cccccc",
    },
    {
      text: "Diferenciais",
      click: () => { refVariation.current?.scrollIntoView({ behavior: 'smooth' }, 2000) },
      color: indexColor === 2 ? "#1a1a1a" : "#cccccc",
    },
    {
      text: "Contato",
      click: () => { refFooter.current?.scrollIntoView({ behavior: 'smooth' }, 2000) },
      color: indexColor === 3 ? "#1a1a1a" : "#cccccc",
    },
  ];


  const menuColors = () => {
    window.addEventListener("scroll", function () {
      var elementShowcase = document.querySelector("#refShowCase");
      var elementUser = document.querySelector('#refUsers');
      var elementVariation = document.querySelector("#refVariation");
      var elementFooter = document.querySelector("#refFooter");

      var positionShowcase = elementShowcase.getBoundingClientRect();
      var positionUser = elementUser.getBoundingClientRect();
      var positionVariation = elementVariation.getBoundingClientRect();
      var positionFooter = elementFooter.getBoundingClientRect();

      if (positionShowcase.bottom >= 58) {
        setIndexColor(0);
      } else if ((positionUser.bottom >= 58 && positionUser.top <= 57.9) || false) {
        setIndexColor(1);
      } else if (positionVariation.bottom >= 0 && positionVariation.top <= 57.9) {
        setIndexColor(2);
      } else if (positionFooter.bottom >= 0 && positionFooter.top <= 0) {
        setIndexColor(3);
      }

      if (positionShowcase.top <= 10) {
        setMenuHeight('56px');
      } else {
        setMenuHeight('100px');
      }
    })
  }

  useEffect(() => {
    menuColors();
  }, []);

  return (<>
    <HeaderPage
      menuItens={menuItens}
      menuHeight={menuHeight}
    />
    <div ref={refShowCase} id="refShowCase">
      <ShowCase />
    </div>
    <div ref={refUsers} id="refUsers">
      <Users />
    </div>
    <div ref={refVariation} id="refVariation">
      <Variation />
    </div>
    <div ref={refFooter} id="refFooter">
      <FooterPage />
    </div>
  </>)
}

export default App;
