import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";


export const DatesRangePicker = () => {
  return (
    <div className="DatesRangePicker">
      <h1 className="padding-Top">Date Range Picker</h1>
      <p>
      If you want to add a widget to select a period, you can drag and drop the Date Range Picker widget into the dashboard work space area.
      A new window will appear that allows you to customize the Date Range Picker's properties. 
      </p>
      <p>
        <li>
          <span className="bold-text">Properties</span>
        </li>
        <br />
        In this section you can name your Date Range Picker and set up a style.
        Once you lock the position, you will not be able to move the widget into the dashboard area, unless you disable the option again.
        Also, you can allow the users to choose a custom period and 2 calendars will appear.
      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      <li>
          <span className="bold-text">Data</span>
        </li>
        <br />
        In this section you can customize the presets that can be selected in the widget. For each value, you can customize the display name. 
        You can also set up the default value using one of the presets available or specific dates. 
 
        </p>
        <br />
        <img src={image2} className="imageClass" />
        <br />
        <p>
      <li>
          <span className="bold-text">Format</span>
        </li>
        <br />
        In this section you can adjust the appearance of your Date Range Picker by choosing the background color, the font, the dropdown etc.
        </p>
        <br />
        <img src={image3} className="imageClass" />
        <br />
        <p>
      <li>
          <span className="bold-text">Interactions</span>
        </li>
        <br />
        The interaction section allows you to choose the action which will be performed when the value of the widget changes. You can display a new dashboard or you can navigate to a URL in a new tab.
        </p>
        <br />
        <img src={image4} className="imageClass" />
        <br />          
    </div>
  );
};
