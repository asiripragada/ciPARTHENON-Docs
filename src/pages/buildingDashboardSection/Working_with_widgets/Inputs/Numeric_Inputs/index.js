import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";

export const NumericInputs = () => {
  return (
    <div className="NumericInputs">
      <h1 className="padding-Top">Numeric Input</h1>
      <p>
      If you want to enter a number into your dashboard, you can use the <span className="bold-text">Numeric Input</span> widget
      </p>
      <p>
        Go to the <span className="bold-text">inputs</span> category and drag and drop it onto the work space area.
      </p>
      <p>
        <li>
          <span className="bold-text">Properties</span>
        </li>
        If you want to customize your numeric input, head into the <span className="bold-text">Properties</span> tab to add a title for future reference, choose the style, or lock its position and size. Once you lock the position and size, you will not be able to move or re-size the widget in the work space area until the setting is <span className="bold-text">disabled</span>
      </p>
      <img src={image1} className="imageClass" />
      <br />
      <p>
      <li>
          <span className="bold-text">Data</span>
        </li>
        A new window will appear containing the <span className="bold-text">Data </span>tab. Here, you can set up a default value for your text input based on a formula or you can just type a default value. 
      </p>
      <img src={image2} className="imageClass" />
      <br />
      <p>
      <li>
          <span className="bold-text">Format</span>
        </li> 
        Access the <span className="bold-text">Format</span> tab to further customize the shape of your text box and format the numerical value. 
      </p>
      <img src={image3} className="imageClass" />
      <br />
      <p>
        <li><span className="bold-text">Interactions</span></li>
        The interaction section allows you to display the Tooltip when the mouse cursor is hovered over the widget.
      </p>
      <img src={image4} className="imageClass" />

      
    </div>
  );
};
