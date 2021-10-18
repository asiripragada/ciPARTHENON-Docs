import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";

export const TextInput = () => {
  return (
    <div className="TextInput">
      <h1 className="padding-Top">Text Input</h1>
      <p>
      If you want to enter a text into your dashboard, you can use the <span className="bold-text">Text Input </span>widget
      </p>
      <p>
        Go to <span className="bold-text">Inputs </span>category and drag and drop it onto the work space area.
      </p>
      <p>
        <li>
          <span className="bold-text">Properties</span>
        </li>
        If you want to customize your text input, head into the Properties tab to add a title for future reference, choose the style, or lock its position and size. Once you lock the position and size, you will not be able to move or re-size the widget in the work space area until the setting is disabled.
      </p>
     <img src={image1} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Data</span>
        </li>
        A new window will appear containing the <span className="bold-text">Data</span> tab.Here, you can set up a <span className="bold-text">default value </span>for your text input based on a <span className="bold-text">formula</span> or you can just <span className="bold-text">type</span> a default value.
      </p>
      <img src={image2} className="imageClass" />
      <br />
      <p>
      <li>
          <span className="bold-text">Format</span>
        </li>
        Access the <span className="bold-text">Format</span> tab to further customize the shape of your text box and format the text value. 
      </p>
      <img src={image3} className="imageClass" />
      <br />
      <p>
      <li>
          <span className="bold-text">Interactions</span>
        </li>
        The interaction section allows you to display the Tooltip when the mouse cursor is hovered over the widget.
      </p>
      <img src={image4} className="imageClass" />

      

      
    </div>
  );
};
