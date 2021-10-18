import React from "react";
import image1 from "./images/Picture1.PNG";
import { useHistory } from "react-router-dom";

export const Maps = () => {
  let history = useHistory();

  return (
    <div className="mainPage">
      <h1 className="padding-Top padding-bottom">Maps</h1>
            
     <br />
     <img src={image1} className ="image class" />
     <br />
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/RegionMap")}
          >
            Region Map
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/LocationMap")}
          >
            Location Map
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/BubbleMap")}
          >
            Bubble Map
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/InteractivityWithCiparthenonMaps")}
          >
            Interactivity with ciPARTHENon Maps
          </span>
        </li>
        
      </div>
    </div>
  );
};