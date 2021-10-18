import React from "react";
import { useHistory } from "react-router";
import image1 from "./images/Picture1.PNG";

export const Annotations = () => {
  let history = useHistory();
  return (
    <div className="mainPage">
      <h1 className="padding-Top">Annotations</h1>
      <br />
      
      <img src={image1} className="imageClass" />
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Ballon")}
          >
            Ballon
          </span>
        </li>
        
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Notes")}
          >
            Note
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/DateTime")}
          >
            Date/Time
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Shape")}
          >
            Shape
          </span>
        </li>
        
      </div>


      
    </div>
  );
};
