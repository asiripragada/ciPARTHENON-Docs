import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";
import image7 from "./images/Picture7.PNG";
import image8 from "./images/Picture8.PNG";
import image9 from "./images/Picture9.PNG";
import image10 from "./images/Picture10.PNG";


export const SlideSwitch = () => {
  return (
    <div className="SlideSwitch">
      <h1 className="padding-Top">Slide Switch</h1>
      <p>
      The <span className="bold-text">Slide Switch </span>allows the user to implement dashboard interactivity depending on whether the switch is <span className="bold-text">enabled </span>or <span className="bold-text">Disabled </span>For example, you can use the input switch to toggle the visibility of another widget (see below).
      </p>
      <p>
        <li>
          <span className="bold-text">Properties</span>
        </li>
        In the <span className="bold-text">Properties</span> tab, the user can adjust the general properties of the widget. We can select the style and the type of widget.
      </p>
      <img src={image1} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Data</span>
        </li>
        In the following screenshot, we can set the <span className="bold-text">values </span>that would be passed through depending on the <span className="bold-text">State </span>of the Input Switch, in addition to selecting the <span className="bold-text">default state </span>upon opening the dashboard.
      </p>
      <img src={image2} className="imageClass" />
      <br />
      <p>
      <li>
          <span className="bold-text">Format</span>
        </li>
        In the <span className="bold-text">Format Section </span>, you change the appearance of the Input Switch. You can change the <span className="bold-text">background color </span>or <span className="bold-text">Switch color </span>when the widget is <span className="bold-text">enabled/disabled,</span>adjust the <span className="bold-text">border</span>,or add a <span className="bold-text">Shadow.</span>
      </p>
      <img src={image3} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Interactions</span>
        </li>
        As of current, you can only <span className="bold-text">Display the tooltip</span> when hovering the <span className="bold-text">Slide switch </span>widget
        </p>
        <img src={image4} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Example</span>
        </li>
        This example demonstrates the <span className="bold-text">Slide switch </span>in practice. In the following dashboard, there are two input switches and a drilldown table. One input switch will filter the entire table (Body Type) while the other will only filter one year (Year).
      </p>
      <img src={image5} className="imageClass" />
      <br />
      <p>
      The following screenshots shows the drilldown table properties.
      </p>
      <img src={image6} className="imageClass" />
     <br/>
     <p>
     Filters applied with the following formulas:
     </p>
     <p>
       <span className="bold-text">1. This Filter will hide or show the entire table:</span>
     </p>
     <p>
     if(widget('Slide Switch', 'value')=false,0,null)
     </p>
     <p>
     <span className="bold-text">2. This Filter will show only the most recent year if it is active, else it will show the input switch 1 properties:</span>
     </p>
     <p>
     if(widget('Body Type', 'value')=true,DataAggregate ('Sales.xlsx (original)', 'ModelYear', 'max'),if(widget('Slide Switch', 'value')=false,0,null))
     </p>
     <img src={image7} className="imageClass" />
     <br />
     <p>
     This is the <span className="bold-text">default selection </span>(table displaying all years and data)
     </p>
     <img src={image8} className="imageClass" />
     <br/>
     <p>
     After enabling the <span className="bold-text">Year </span>input switch, only the one year will be displayed.
     </p>
     <img src={image9} className="imageClass" />
     <br/>
     <p>
     Finally when we switch off the <span className="bold-text">year </span>input switch, the entire table will be filtered.
     </p>
     <img src={image10} className="imageClass" />
    <br />
    
      

      
    </div>
  );
};
