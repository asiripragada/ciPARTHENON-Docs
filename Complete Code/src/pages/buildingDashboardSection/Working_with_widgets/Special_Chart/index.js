import React from "react";
import image1 from "./images/Picture1.PNG";
import { useHistory } from "react-router-dom";

export const SpecialChart = () => {
  let history = useHistory();

  return (
    <div className="mainPage">
      <h1 className="padding-Top padding-bottom">Special Chart</h1>     
     <br />
     <img src={image1} className ="image class" />
     <br />
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/FunnelChart")}
          >
            Funnel Chart
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/WaterfallChart")}
          >
            Waterfall Chart
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/SankeyChart")}
          >
            Sankey Chart
          </span>
        </li>
        
      </div>
    </div>
  );
};