import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import PlayStore from '../img/playStore.png';
import AppleStore from '../img/appleStore.png';

interface ITitleGroup {
  tinyNumber: Number,
  title: String,
  tinyText: String,
  text: String,
  linkText: String,
  pathLink: String,
  customLink?: Boolean
}

const TittleGroup: React.FC<ITitleGroup> = (props) => {

  const { tinyNumber, title, tinyText, text, linkText, pathLink, customLink } = props;

  return (
    <>
      <h2 className="defaultHeadTitle">
        <span className="defaultTinyTitle">
          {tinyNumber > 8 ? tinyNumber : `0${tinyNumber}`}.
        </span>
        {title}
      </h2>
      <div className="defaultDivisionTitle">
        <p className="defaultDivisionLeftTitle">{tinyText}</p>
        <p className="defaultDivisionRightTitle">
          {text}
        </p>
      </div>
      {customLink ? (
        <div className="defaultLinkTitle">
          <a href={pathLink}>
            {linkText} <AiOutlineArrowRight className="defaultLinkArrow" />
          </a>
        </div>
      ) : (<>
        <div class="defaultLinkTitle">
          <a href="#">
            <img src={PlayStore} />
          </a>
          <a href="#">
            <img src={AppleStore} />
          </a>
        </div>

      </>)
      }

    </>
  );
};

export default TittleGroup;
