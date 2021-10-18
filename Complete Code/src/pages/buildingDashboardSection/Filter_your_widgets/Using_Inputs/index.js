import React from "react";
import { useHistory } from "react-router-dom";

export const UsingInputs = () => {
  let history = useHistory();

  return (
    <div className="mainPage">
      <h1 className="padding-Top padding-bottom">Using Inputs</h1>
      <br />
      <p>
      In this section you will learn how to link the visual representations of your data with the already created inputs. 
      You will learn how to filter charts, indicators, gauges with <span className="bold-text">Numeric Inputs </span> and <span className="bold-text">Text Input</span>
      </p>
      <br />
      <br />

      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/UsingNumericInputs")}
          >
            Using Numeric Inputs
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/UsingTextInputs")}
          >
            Using Text Inputs
          </span>
        </li>
      </div>
    </div>
  );
};
