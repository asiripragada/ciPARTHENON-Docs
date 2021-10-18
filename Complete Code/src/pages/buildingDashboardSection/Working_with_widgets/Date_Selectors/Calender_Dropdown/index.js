import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";

export const CalenderDropdown = () => {
  return (
    <div className="CalenderDropdown">
      <h1 className="padding-Top">Calender Dropdown</h1>
      <p>
      If you want to add a calendar to pick a date, you can drag and drop the Calendar Dropdown widget into the dashboard work space area.
      A new window will appear that allows you to customize the calendar's properties.  </p>
      <br />
      <br />
      <br />


      <p>
        <li>
          <span className="bold-text">Properties</span>
        </li>
        <br />
        In this section you can name your Calendar Dropdown and set up a style. 
        Once you lock the position, you will not be able to move the widget in the dashboard area, unless you disable the option again.
        You can choose the <span className="bold-text">type </span>of calendar you want: Date or Date and Time.
      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      <li>
          <span className="bold-text">Data</span>
        </li>
        <br />
        In this section you can customize the minimum, maximum and default date that can be selected in the calendar. For each value, you can choose between None, Today, Specific or Formula. 
        </p>
        <br />
        <img src={image2} className="imageClass" />
        <br />
        <p>
      <li>
          <span className="bold-text">Format</span>
        </li>
        <br />
        In this section you can adjust the appearance of your calendar by choosing the background color, the font, the text format etc.
        </p>
        <br />
        <img src={image3} className="imageClass" />
        <br />      
    </div>
  );
};
