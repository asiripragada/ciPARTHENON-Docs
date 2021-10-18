import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";

export const UsingWidgets = () => {
  return (
    <div className="UsingWidgets">
      <h1 className="padding-Top">Using Widgets</h1>
      <p>
      Once you have created your widget, you can add a <span className="bold-text">Dropdown list</span> or <span className="bold-text">list</span> in order to filter your widget. In the example below we have already created a bar chart. We want to filter it by Manufacturer using a list.
      </p>
      <br />
    
      <img src={image1} className="imageClass" />
      <br />
      <p>
      To filter the bar chart by manufacturer, you need to add the Dropdown list in the dashboard area.
      You have to link the list to your data, by choosing the Manufacturing column. 
      <br />
      In order to link the list to your bar chart, you need to access the graph's properties and go to the Sort&Filter tab. Click on Add Filter and choose the Manufacturer column. 
      Then choose the operator. Since multiple selection is allowed in the list, you need to use the "in" keyword. 
      <br />
      In Filters, select <span className="bold-text">Input Widget</span>
      You will have below all the lists that you have added in your dashboard. 
      Select the list that contains the manufacturer information.   
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br/>
      <p>
      In case you want to disable a filter, you have to roll back the green button next to the corresponding condition. 
 
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />

      
    </div>
  );
};
