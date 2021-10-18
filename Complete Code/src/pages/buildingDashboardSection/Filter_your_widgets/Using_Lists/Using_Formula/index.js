import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";

export const UsingFormula = () => {
  return (
    <div className="UsingFormula">
      <h1 className="padding-Top">Using Formula</h1>
      <p>
      In this section you will learn how to apply filters on your data and how to link the already created filters to the widgets. Also, you will learn how to set up the parameters in order to restrict each user's/team's view.  
      <br />
      Once you have created your widget, you can add a Dropdown list or a List in order to filter your widget. In the example below we have already created a bar chart. We want to filter it by year using a Dropdown list and by manufacturer by using a list.The <span className="bold-text">Lists </span> allows for multiple selection while the <span className="bold-text">Dropdown list</span> does not.</p>
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
      In order to refer the result of the users' selection to the Dropdown list, you need to access <span className="bold-text">f(x)</span>
      This way, we will compare the name of the Manufacturer to the ManufacturerList selected labels.
      Go to <span className="bold-text">Widgets </span>and choose the right filter. 
      Click on <span className="bold-text">Plus</span> and the formula will be added in the right side of the panel.  
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br/>
      <p>
      If you click <span className="bold-text">Check </span>you will find the result of your selection in the bar.  Click <span className="bold-text">Save </span>and the filter is set up!
      You should follow the same steps in order to link other filters to your widget. 
      There is no limitation on the number of filters linked to a widget or on the number of widgets linked to one filter.
      In case you want to disable a filter, you have to roll back the green button next to the corresponding condition. 
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />

      
    </div>
  );
};
