import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";

export const Sliders = () => {
  return (
    <div className="Sliders">
      <h1 className="padding-Top">Sliders</h1>
      <p>
      If you want to select a numerical value within a specific range in order to filter your widgets, you can use the <span className="bold-text">Slider.</span>
      </p>
      <p>
      In order to build a <span className="bold-text">Slider</span>, you have to drag and drop the Slider widget from the <span className="bold-text">Sliders/Knobs Category </span>into the dashboard work space area. A new window will appear that allows you to customize the slider's properties.
      </p>
      <p>
        <li>
          <span className="bold-text">Properties</span>
        </li>
        In the <span className="bold-text">Properties</span> tab you can add a <span className="bold-text">title </span>for future reference,choose <span className="bold-text">Style</span> or <span className="bold-text">lock its position and size.</span>Once you have locked the position and size, you will not be able to move or re-size the widget.
      </p>
      <p>
      You must also choose an <span className="bold-text">Orientation(Horizontal or Vertical) </span>using the drop down list.
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
        In the <span className="bold-text">Format</span> section,, you can further customize the <span className="bold-text">shape </span>of your slider and format the <span className="bold-text">numerical value.</span>
      </p>
      <img src={image3} className="imageClass" />
      <br />
      <p>
        In the value <span className="bold-text">Tab</span>,you can format your data by selecting the corresponding <span className="bold-text">type </span>in the drop down and by setting the properties for decimal values.
      </p>
      <img src={image4} className="imageClass" />
      <br />
      <p>
        In the <span className="bold-text">Label </span>tab, you can format your label based on the <span className="bold-text">data </span> and select the corresponding <span className="bold-text">type </span>from the drop down. 
      </p>
      <p>
      You could set the <span className="bold-text">Properties</span> for decimal values and use the advanced options available for formatting the labels displayed.
      </p>
      <img src={image5} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Interactions</span>
        </li>
         The interaction section allows you to<span className="bold-text"> display the ToolTip</span> when the mouse cursor is hovered over the Slider.
      </p>
      <img src={image6} className="imageClass" />


      
    </div>
  );
};
