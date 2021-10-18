import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";

export const UsingTextInput = () => {
  return (
    <div className="UsingTextInput">
      <h1 className="padding-Top">Using Text Input</h1>
      <p>
      Once you have created your widget, you can add a <span className="bold-text">Text Input</span>  in order to filter your widget. 
      <br />
      In the example below we have already created a column chart. We want to filter it by Country using a <span className="bold-text">Text Input</span>
      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      To filter the column chart by Country, you need to add the Text Input in the dashboard area.
      <br />
      In order to link the Text Input to your Column chart, you need to access the graph's <span className="bold-text">Properties</span> and go to the <span className="bold-text">Sort and Filter </span>tab.
      Click on <span className="bold-text">Add Filter </span>and choose the Country column. Then choose the operator.
      In Filters, select <span className="bold-text">Input Widget</span>
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
      When you click on the drop down you will have the <span className="bold-text">Text Input </span>that you have added in your dashboard work space area.Select the Text Input that contains the country information. 
      In case you want to disable a filter, you have to roll back the green button next to the corresponding condition. 
      </p>
      <img src={image3} className="imageClass" />
      <br />
      <p>
      Once the filter is applied, the chart will return the values based on the user's input.
      </p>
      <br />
      <img src={image4} className="imageClass" />

      
      </div>
  );
};
