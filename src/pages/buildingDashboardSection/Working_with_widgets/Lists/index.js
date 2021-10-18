import React from "react";
import image1 from "./images/Picture1.PNG";
import { useHistory } from "react-router-dom";

export const Lists = () => {
  let history = useHistory();

  return (
    <div className="mainPage">
      <h1 className="padding-Top padding-bottom">Lists</h1>
      <p>
      The lists allow you to filter your widgets. The users will be able to select one or multiple values inside a list or to type the value they are looking for. 
      </p>
      
      
     <br />
     <img src={image1} className ="image class" />
     <br />
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/DropdownList")}
          >
            Dropdown List
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/List")}
          >
            List
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/FilterPanel")}
          >
            Filter Panel
          </span>
        </li>
        
      </div>
    </div>
  );
};