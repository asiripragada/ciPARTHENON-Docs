import React from "react";
import { useHistory } from "react-router-dom";
import image1 from "./images/Picture1.PNG";

export const DateCharts = () => {
  let history = useHistory();
  return (
    <div className="mainPage">
      <h1 className="padding-Top">Date Chart</h1>
      

      <img src={image1} className="imageClass" />
      <br />
      <br />
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/TimeSliderChart")}
          >
            Time Slider Chart
          </span>
        </li>
      </div>
    </div>
  );
};
