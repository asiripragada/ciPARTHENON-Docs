import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
export const Notes = () => {
  return (
    <div className="Notes">
      <h1 className="padding-Top">Note</h1>
      <p>
      The Note widget as with the Ballon widget is a widget in which the user can  input some ideas or notes that allow a clear visualization of the key results of a dashboard.
      <br />
      In order to build a Note, you have to drag and drop the widget into the dashboard work space area. 
      <br />
      A new window will appear that allows you to customize the Ballon's properties. 
      <br />
      <br />
      <li>
        <span className="bold-text">Properties</span>
      </li>
      In This section you can choose to rename the widget, change the style of the widget. You can also Lock the position in the dashboard. You can have data based on text or a formula.
      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      <li>
        <span className="bold-text">Data</span>
      </li>
      In the Data tab you can input your message.
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
      <li>
        <span className="bold-text">Format</span>
      </li>
      In the format tab you can change the background color, gradient, borders and shadow.
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
      Additional to this you can change in the "Text" left tab, the font of your text and other options such as the Alignement.
      </p>
      <br />
      <img src={image4} className="imageClass" />
      <br />
      <p>
      <li>
        <span className="bold-text">Interactions</span>
      </li>
      Finally in the "Interaction" tab you can choose to "Do nothing", "Display Dashboard" or "Open an URL" when double clicking on the widget.
      </p>
      <br />
      <img src={image5} className="imageClass" />
      <br />


      

      
    </div>
  );
};
