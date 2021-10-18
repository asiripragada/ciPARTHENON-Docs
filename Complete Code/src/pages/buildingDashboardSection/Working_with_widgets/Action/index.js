import React from "react";
import image1 from "./images/Picture1.PNG";
import { useHistory } from "react-router-dom";

export const Action = () => {
  let history = useHistory();

  return (
    <div className="mainPage">
      <h1 className="padding-Top padding-bottom">Action</h1>

      <img src={image1} className="imageClass" />
      <br />
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Button")}
          >
            Button
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/ExportButton")}
          >
            Export Button
          </span>
        </li>
      </div>
    </div>
  );
};
