import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
export const Paragraph = () => {
  return (
    <div className="Paragraph">
      <h1 className="padding-Top">Paragraph</h1>
      <p>
      If you want to add a text to your dashboard, use the <span className="bold-text">Paragraph </span>indicator included in the <span className="bold-text">Text </span>category . Drag and drop it onto the dashboard work space area and a new window will appear where you can add the text using the text editor.
      </p>
      <img src={image1} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Properties</span>
        </li>
        Access the Properties tab to name the widget and choose a Style. If you lock the position and size, you will not be able to move or re-size the widget in the work space area.
      </p>
      <img src={image2} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Format</span>
        </li>
        In the Format tab, you can adjust the Paragraph appearance, you can add a border, shadow or a background.
      </p>
      <img src={image3} className="imageClass" />

      
    </div>
  );
};
