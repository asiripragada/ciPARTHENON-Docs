import React from "react";
import image1 from "./images/Picture1.PNG";
import { useHistory } from "react-router-dom";

export const Inputs = () => {
  let history = useHistory();

  return (
    <div className="mainPage">
      <h1 className="padding-Top padding-bottom">Inputs</h1>
      
      
     <br />
     <img src={image1} className ="image class" />
     <br />
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/AutoComplete")}
          >
            Auto Complete
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/ButtonGroup")}
          >
            Button Group
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/SlideSwitch")}
          >
            SlideSwitch
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/MultipleTagInput")}
          >
            Multiple Tag Input
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/NumericInputs")}
          >
            NumericInputs
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/RadioButton")}
          >
            Radio Button
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/TextInput")}
          >
            Text Input
            </span>
          </li>
      </div>
    </div>
  );
};