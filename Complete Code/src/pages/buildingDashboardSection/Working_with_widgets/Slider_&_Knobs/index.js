import React from "react";
import image1 from "./images/Picture1.PNG";
import { useHistory } from "react-router-dom";

export const SliderKnob = () => {
  let history = useHistory();

  return (
    <div className="mainPage">
      <h1 className="padding-Top padding-bottom">Slider/Knobs</h1>     
     <br />
     <img src={image1} className ="image class" />
     <br />
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/RingKnob")}
          >
            Ring Knob
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Slider")}
          >
            Slider
          </span>
        </li>
        
      </div>
    </div>
  );
};