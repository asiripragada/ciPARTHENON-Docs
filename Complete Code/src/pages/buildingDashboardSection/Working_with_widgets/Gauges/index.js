import React from "react";
import { useHistory } from "react-router-dom";
import image1 from "./images/Picture1.PNG";

export const Gauges = () => {
  let history = useHistory();
  return (
    <div className="mainPage">
      <h1 className="padding-Top">Gauges</h1>
      <br />
      <p>
      A Gauge widget is a simple status indicator that displays a needle that moves within a range of numbers displayed on its outside edges. An example of a gauge is a car's speedometer. This type of widget is designed to display the value of a single metric. The needle within the gauge is a visual representation of that single metric value.
      </p>
      <br />
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <br />
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/CircularGuage")}
          >
            Circular Gauge
          </span>
        </li>
        
      </div>
    </div>
  );
};
