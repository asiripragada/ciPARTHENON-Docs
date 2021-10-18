import React from "react";
import { useHistory } from "react-router";
import image1 from "./images/Picture1.PNG";

export const Indicators = () => {
  let history = useHistory();
  return (
    <div className="mainPage">
      <h1 className="padding-Top">Indicators</h1>
      <br />
      <p>
      The Indicators in a dashboard are used in order to show one value at a time. 
      Using a <span className="bold-text">Number Indicator</span>,you can attach a picture to your value. 
      Using a <span className="bold-text">Symbol Indicator</span>,you can change dynamically the shape and color based of the value that you choose to show. 
      Both of them can be based on your data or you can build the value based on a formula.
      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/NumberIndicator")}
          >
            Number Indicator
          </span>
        </li>
        
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/SymbolIndicator")}
          >
            Symbol Indicator
          </span>
        </li>
        
      </div>


      
    </div>
  );
};
