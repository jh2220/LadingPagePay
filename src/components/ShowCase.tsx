import React from "react";
import "../styles/ShowCase.scss";
import TittleGroup from "./TittleGroup.tsx";
import CelularBanner from "../img/celularbanner.png";

const ShowCase = () => {
  return (
    <section id="showcaseSection">
      <div id="showcase">
        <span className="showcaseBlackScreen"></span>

        <div id="showcaseApresentation">
          <h1>Lorem Ipsum dolor sit amet constetur elit. Fusce ut porta leo</h1>
          <a href="#" className="showcaseButton">
            Saiba mais
          </a>
          <img src={CelularBanner} />
        </div>
      </div>

      <div id="showcaseContent">
        <div className="showcaseContentText">
          <TittleGroup
            tinyNumber={1}
            title={"Tudo começa com uma marca forte. "}
            tinyText={"pagamentos"}
            text={"Fusce ut porta leo. Sed iaculis lupus augue cursus, sodales euismod vitae porttitor. Suspendisse sed nunc."}
            linkText={"Entre em contato"}
            pathLink={"#"}
            customLink={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
