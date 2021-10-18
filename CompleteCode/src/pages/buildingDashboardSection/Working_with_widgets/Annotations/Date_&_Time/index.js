import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";

export const DateTime = () => {
  return (
    <div className="DateTime">
      <h1 className="padding-Top">Date & Time</h1>
      <p>
      The Date & Time widget is a widget which allows user display the time on the dashboard.
      <br />
      In order to build a Date & Time widget, you have to drag and drop the widget into the dashboard work space area. 
      <br />
      A new window will appear that allows you to customize the Date/Time's properties. 
      <br />
      <br />
      <li>
        <span className="bold-text">Properties</span>
      </li>
      In This section you can choose to rename the widget, change the style of the widget. You can also Lock the position in the dashboard. In the "Type" option, you can choose to display the "Current Date/Time", "Dashboard Created Date/Time" or the "Dashboard Last Updated Date/Time". You can also choose to Display the "Local Time" or a "Custom Time" based on a different time zone.
      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      <li>
        <span className="bold-text">Format</span>
      </li>
      In the format tab you can change the background color, gradient, borders and shadow.
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
      Additional to this you can change in the "Date/Time" left tab, the font of your text and other options such as the Alignment or Format of Time and Date.
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
      <li>
        <span className="bold-text">Interactions</span>
      </li>
      Finally in the "Interaction" tab you can choose to "Do nothing", "Display Dashboard" or "Open an URL" when double clicking on the widget.
      </p>
      <br />
      <img src={image4} className="imageClass" />
      <br />


      

      
    </div>
  );
};
