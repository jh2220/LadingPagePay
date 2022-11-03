import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

interface ITitleGroup {
  tinyNumber: Number,
  title: string,
  tinyText: string,
  text: string,
  linkText: string,
  pathLink: string,
}

const TittleGroup: React.FC<ITitleGroup> = (props) => {

  const { tinyNumber, title, tinyText, text, linkText, pathLink } = props;

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
      <div className="defaultLinkTitle">
        <a href={pathLink}>
          {linkText} <AiOutlineArrowRight className="defaultLinkArrow" />
        </a>
      </div>
    </>
  );
};

export default TittleGroup;
