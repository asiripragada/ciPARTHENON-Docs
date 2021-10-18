import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";

export const Exportbutton = () => {
  return (
    <div className="Exportbutton">
      <h1 className="padding-Top">Export Button</h1>
      <p>
      The export button allows the user to export widgets data into an excel file, examples are the tables widgets. Simply have some widgets on the dashboards, drag this button and click on it. Other widgets are also supported such as pie char, bar chart among others.
      <br />
      In this screenshoot the user can see the properties of the widget.
      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      In the following screenshot we can see that currently there is a table in the dashboard and we select it to export.

      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
      In the format tab we can select the formating of the shape, the text and change the icon displayed 
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />

      

      
    </div>
  );
};
