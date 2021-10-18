import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";

export const UsingDateSelectors = () => {
  return (
    <div className="UsingDataSelectors">
      <h1 className="padding-Top">Using Date Selectors</h1>
      <p>
      You can filter a widget using other widgets such as the Date selectors. Here are the steps to follow to filter a widget using a Date Range Picker. </p>

      <img src={image1} className="imageClass" />
      <br />
      <p>
      You need to access the <span className="bold-text">Properties </span>of the widget you want to filter, followed by the <span className="bold-text">Sort & Filter </span>tab. Once in the <span className="bold-text">Filter </span>menu, you must set up filters according to the date selector you are using:
      </p>
      <br />
      <p>
        <li>
          <span className="bold-text">Date Range Picker</span>- Add a filter, select the <span className="bold-text">Date Column,Input widget</span>, then the name of the widget. Once complete, you will notice the <span className="bold-text">Operator </span>will automatically switch to <span className="bold-text">Between</span>.
        </li>
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Calender Dropdown</span>- Add two Filters, select the <span className="bold-text">Date Column,Input widget</span> setting for both, set one filter to be <span className="bold-text">greater than/greater than or equal to, </span>and the other <span className="bold-text">less than/less than or equal to</span>,then select the corresponding Calendar Dropdown widgets.
        </li>
      </p>

      <img src={image3} className="imageClass" />
      
    </div>
  );
};
