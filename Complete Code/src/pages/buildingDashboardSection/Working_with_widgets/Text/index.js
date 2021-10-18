import React from "react";
import image1 from "./images/Picture1.PNG";
import { useHistory } from "react-router-dom";

export const Text = () => {
  let history = useHistory();

  return (
    <div className="mainPage">
      <h1 className="padding-Top padding-bottom">Text</h1>
      <img src={image1} className ="image class" />
      <br />
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
      <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Title")}
          >
            Title
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Paragraph")}
          >
            Paragraph
          </span>
        </li>
        
      </div>
    </div>
  );
};
