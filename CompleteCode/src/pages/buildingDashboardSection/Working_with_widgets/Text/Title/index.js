import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
export const Title = () => {
  return (
    <div className="Title">
      <h1 className="padding-Top">Title</h1>
      <p>
      If you want to add a Title to your dashboard, use the <span className="bold-text">Title </span>indicator included in the <span className="bold-text">Text </span>category . Drag and drop it onto the dashboard work space area and click on it to add the text. 
      </p>
      <p>
        <li>
          <span className="bold-text">Properties</span>
        </li>
        In order to customize the widget,access the <span className="bold-text">Properties</span> tab at the bottom of the screen. You can <span className="bold-text">name</span> it and choose a <span className="bold-text">Style.</span>If you lock the <span className="bold-text">position and size,</span>you will not be able to move or re-size the widget in the work space area.
      </p>
      <img src={image1} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Format</span>
        </li>
        In the Format tab, you can adjust the Paragraph appearance, you can add a border, shadow or a background.
      </p>
      <img src={image2} className="imageClass" />
      <br/>
      <p>
        <li>
          <span className="bold-text">Interactions</span>
        </li>
        In the <span className="bold-text">Interactions</span> tab, you can add interactions <span className="bold-text">(i.e. double click or hover) </span>to the title. When the title widget is double clicked, you can either <span className="bold-text">open a new dashboard or navigate to a specified URL, or display the ToolTip </span>when the mouse cursor hovers over the widget.
      </p>
      <br />
      <img src={image3} className="imageClass" />
      
    </div>
  );
};
