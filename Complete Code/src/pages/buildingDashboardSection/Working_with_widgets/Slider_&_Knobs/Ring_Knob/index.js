import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";

export const RingKnob = () => {
  return (
    <div className="RingKnob">
      <h1 className="padding-Top">Ring Knob</h1>
      <p>
      If you want to select a numerical value within a specific range in order to filter your widgets, you can use the <span className="bold-text">Ring Knob.</span>
      </p>
      <p>
      In order to build a <span className="bold-text">Ring Knob</span>, you have to drag and drop the ring knob widget from the <span className="bold-text">Sliders/Knobs Category </span>into the dashboard work space area. A new window will appear that allows you to customize the Knob's properties.
      </p>
      <p>
        <li>
          <span className="bold-text">Properties</span>
        </li>
        In the <span className="bold-text">Properties</span> tab you can add a <span className="bold-text">title </span>for future reference,choose <span className="bold-text">Style</span> or <span className="bold-text">lock its position and size.</span>Once you have locked the position and size, you will not be able to move or re-size the widget.
      </p>
      <p>
        Choose the <span className="bold-text">type </span>of Ring Knob,either <span className="bold-text">Circular or semi-circular</span>, and assign your starting point from the drop down options available.
      </p>

      <img src={image1} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Data</span>
        </li>
        In this section you can set up your data range. You can define a <span className="bold-text">Default value </span>for your ring knob based on a formula or you can just type a default value. 
      </p>
      <p>
        You can also setup a <span className="bold-text">Minimum</span> or <span className="bold-text">Maximum value </span>based on a formula or just type the value you need.
      </p>
      <p>
      You can select your interval as well based on the formula or value you entered. To enter formulas, click on the f(x) button and build your own formula using our Formula Editor Menu.
      </p>
      <img src={image2} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Format</span>
        </li>
        In the <span className="bold-text">Format</span> section,, you can further customize the <span className="bold-text">shape </span>of your ring knob and format the <span className="bold-text">numerical value.</span>
      </p>
      <img src={image3} className="imageClass" />
      <br />
      <p>
        In the value <span className="bold-text">Tab</span> , you can format your data by selecting the corresponding <span className="bold-text">type </span>in the drop down and by setting the properties for decimal values.
      </p>
      <img src={image4} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Interactions</span>
        </li>
        In this tab you can <span className="bold-text">enable or disable </span>the option to change the value in the ring knob by <span className="bold-text">scrolling, disable any user input altogether, or display the ToolTip</span> when the mouse cursor is hovered over the Ring Knob.
      </p>
      <img src={image5} className="imageClass" />


      
    </div>
  );
};
