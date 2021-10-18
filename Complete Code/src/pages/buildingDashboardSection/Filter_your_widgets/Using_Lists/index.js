import React from "react";
import { useHistory } from "react-router-dom";

export const UsingLists = () => {
  let history = useHistory();

  return (
    <div className="mainPage">
      <h1 className="padding-Top padding-bottom">Using Lists</h1>
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/UsingFormula")}
          >
            Using Formula
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/UsingWidgets")}
          >
            Using Widgets
          </span>
        </li>
      </div>
    </div>
  );
};
