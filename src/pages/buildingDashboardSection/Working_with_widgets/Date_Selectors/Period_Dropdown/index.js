import React from "react";
import image1 from "./image/Picture1.PNG";
import image2 from "./image/Picture2.PNG";
import image3 from "./image/Picture3.PNG";
import image4 from "./image/Picture4.PNG";


export const PeriodDropdown = () => {
  return (
    <div className="PeriodDropdown">
      <h1 className="padding-Top">Period Dropdown</h1>
      <p>
      If you want to add a widget in order to select a date period, you can drag and drop the Period Dropdown widget into the dashboard work space area.
      <br />
      A new window will appear that allows you to customize the period dropdown's properties.
      <br />
      </p>
      
      <p>
        <li>
          <span className="bold-text">Properties</span>
        </li>
        <br />
        In this section you can name your Period Dropdown and set up a style.
        <br />
        Once you lock the position, you will not be able to move the widget in the dashboard area, unless you disable the option again. You can choose the <span className="bold-text">Type </span>of calendar you want: Weekly, Monthly, Quarterly, Yearly.
        <br />
        Also, you can allow the user to select multiple values and the list will become a check box list instead.

      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      <li>
          <span className="bold-text">Data</span>
        </li>
        <br />
        In this section, you can customize the minimum, maximum and default date for the calendar. For each value, you can choose between None, Current (Week/Month/Quarter/Year), Specific, or Formula. 
        <br />
        You can enable the button <span classname="bold-text">Display None </span>then label the option accordingly.
 
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
