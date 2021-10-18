import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";


export const ButtonGroup = () => {
  return (
    <div className="ButtonGroup">
      <h1 className="padding-Top">Button Group</h1>
      <p>
      You can use the <span className="bold-text">Button Group </span>widget to add on-click functionality to your dashboard:
      </p>
      <br />     
      <img src={image1} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Properties</span>
        </li>
        In this section, you can assign the <span className="bold-text">Button Group </span> widget a <span className="bold-text">Name </span>,set the <span className="bold-text">theme , lock position and Size </span>set <span className="bold-text">Visibility </span>enable <span className="bold-text">Multiple selection </span>and enable <span className="bold-text">No selection.</span>
      </p>
      <img src={image2} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Data</span>
        </li>
        in the <span className="bold-text">Data Tab</span>, each row represents a button in the <span className="bold-text">Button Group </span>in which you can assign a <span className="bold-text">Label</span> and a <span className="bold-text">Value </span>You can also set the <span className="bold-text">Default Selection </span>upon loading your dashboard.
      </p>
      <img src={image3} className="imageClass" />
      <br />
      <p>
      <li>
          <span className="bold-text">Format</span>
        </li>
        In the <span className="bold-text">Format Section </span>,you can Tweak the <span className="bold-text">asthetics</span> of your button(s), format the <span className="bold-text">Fonts </span>, add/remove/change the <span className="bold-text">Icons </span>and set the <span className="bold-text">Layouts </span>(i.e. Vertical/Horizontal and padding).
      </p>
      <img src={image4} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Interactions</span>
        </li>
        As of current, you can only <span className="bold-text">Display the tooltip</span> when hovering the <span className="bold-text">Button Group </span>widget
        </p>
        <img src={image5} className="imageClass" />
      <br />
      
     
      

      
    </div>
  );
};
