import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";


export const MultipleTagInput = () => {
  return (
    <div className="Multiple Tag Input">
      <h1 className="padding-Top">Button Group</h1>
      <p>
      The <span className="bold-text">Multiple Tag Input </span>widget allows the widget to display multiple inputs that can be used to filter data in another widget.
      </p>
      <p>
      This widget has the same properties as other input widgets.
      </p>
      <p>
        <li>
          <span className="bold-text">Properties</span>
        </li>
        The screenshot shows the <span className="bold-text">Properties</span>  of the widget in which you can change the style or to determine if the search will be case sensitive or not. The user can also change the way the search is made by: if the word <span className="bold-text">Contains </span>the text <span className="bold-text">Begins with </span>a specified text,or <span className="bold-text">ends with</span> a specific letter.
      </p>
      <img src={image1} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Data</span>
        </li>
        The first step when choosing the widget is to select the <span className="bold-text">data source</span>,then select the <span className="bold-text">label.</span>
      </p>
      <img src={image2} className="imageClass" />
      <br />
      <p>
      <li>
          <span className="bold-text">Sort & Filter</span>
        </li>
        As with other widgets you can also <span className="bold-text">Sort & Filter</span> the widget.
        </p>
      <img src={image3} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Format</span>
        </li>
        The following screenshot shows shows the <span className="bold-text">Format</span> tab in which you can format the <span className="bold-text">background,</span> the <span className="bold-text">text font </span>and <span className="bold-text">Size </span>but also the <span className="bold-text">Tags.</span>You can select the <span className="bold-text">colors,</span><span className="bold-text">text</span> and the <span className="bold-text">background color</span> of the <span className="bold-text">tags</span>
        </p>
        <img src={image4} className="imageClass" />
        <br />
        <p>
          <li>
          <span className="bold-text">Interactions</span>
          </li>
          The <span className="bold-text">Interaction</span> section allows you to display the <span className="bold-text">Tooltip</span> when the mouse cursor is hovered over the widget.


        </p>
        <img src={image5} className="imageClass" />
      <br />
      
     
      

      
    </div>
  );
};
