import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";

export const RadioButton = () => {
  return (
    <div className="Radio Button">
      <h1 className="padding-Top">Radio Button</h1>
      <p>
        You can use <span className="bold-text">Radio Buttons </span>widget to add on-click functionality to your dashboard:
      </p>

      <img src={image1} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Properties</span>
        </li>
        In this section, you can assign the <span className="bold-text">Radio Button </span>widget a <span className="bold-text">Name,</span>set the <span className="bold-text">Style,lock position and size,</span>set <span className="bold-text">Visibility </span>, have the widget be based on <span className="bold-text">data </span>or <span className="bold-text">Custom entries.</span>
      </p>
      <img src={image2} className="imageClass" />
      <br />
      <p>
      <li>
          <span className="bold-text">Data</span>
        </li>        
          In the <span className="bold-text">Data Tab </span>, each row represents a button in the <span className="bold-text">Radio Button </span>widget in which you can assign a <span className="bold-text">Label </span>and the <span className="bold-text">Value</span>. You can also set the <span className="bold-text">Default selection </span>upon loading your dashboard.
      </p>
      <img src={image3} className="imageClass" />
      <br />
      <p>
      <li>
          <span className="bold-text">Sort & Filter</span>
        </li> 
        In the <span className="bold-text">Sort & Filter</span> tab you can sort your radio buttons by the <span className="bold-text">Labels </span>or <span className="bold-text">Values.</span>If your radio button widget is based on a data table you can filter out values you don't want to appear.
      </p>
      <img src={image4} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Style & Format</span> 
        </li>
        In the <span className="bold-text">Style & Format</span> , you can tweak the <span className="bold-text">aesthetics</span> of your button(s),set a <span className="bold-text">title, background,</span>and format the font.
      </p>
      <img src={image5} className="imageClass" />
      

      
    </div>
  );
};
