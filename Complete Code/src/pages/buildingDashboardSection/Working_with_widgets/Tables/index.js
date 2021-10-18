import React from "react";
import image1 from "./images/Picture1.PNG";
import { useHistory } from "react-router-dom";

export const Tables = () => {
  let history = useHistory();

  return (
    <div className="mainPage">
      <h1 className="padding-Top padding-bottom">Tables</h1>     
     <p>
     Tables are used to display detailed information, both quantitative or qualitative data. 
      They organize the data for further investigations and it is preferable to use tables if you have both numerical and no numerical data or if you want to display individual values. In this section you will learn how to build simple and drill down tables.
     </p>
     <img src={image1} className ="image class" />
     <br />
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/DrilldownTable")}
          >
            Drilldown Table
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/SimpleTable")}
          >
            Simple Table
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/PivotTable")}
          >
            Pivot Table
          </span>
        </li>
        
      </div>
    </div>
  );
};