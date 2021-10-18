import React from "react";
import image1 from "./images/Picture1.PNG";


export const QuickProperties = () => {
  return (
    <div className="QuickProperties">
      <h1 className="padding-Top">Quick Properties</h1>
      <p>
      When you select a widget in the <span className="bold-text">Dashboard Editor</span>, a sidebar appears on the right side of the widget with several actions listed below:
      </p>

      <img src={image1} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Move Widget - </span>This action serves as easy access to move your widget within your Dashboard.
        </li>
        <li>
          <span className="bold-text">Properties - </span>This button will display the widget's properties.
        </li>
        <li>
          <span className="bold-text">Duplicate - </span>Create a copy of the widget
        </li>
        <li>
          <span className="bold-text">Delete - </span>Delete the widget
        </li>
        <li>
          <span className="bold-text">Move Back/Forward - </span>Moves the widget forward/to the front or backwards/to the back
        </li>
        <li>
          <span className="bold-text">Change Display (charts only) - </span>Changes the presentation of the visual chart (i.e. Area, Bar, Column, or Line) 
        </li>
      </p>
      

      
    </div>
  );
};
