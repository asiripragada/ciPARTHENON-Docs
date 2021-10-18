import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";

export const Buttons = () => {
  return (
    <div className="Buttons">
      <h1 className="padding-Top">Button</h1>
      <p>
      If you need to add an interaction between your dashboards, you can use a <span className="bold-text">Button.</span>This <span className="bold-text">button </span>can also take you to external websites.
      <br />
      <br />
      <li>
        Properties
      </li>
      <br />
      In this section, you can name your button and set up a style. Once you lock the position, you will not be able to move the widget in the dashboard area, unless you disable the option again.
      <br />
      You can customize the label of the <span className="bold-text">button </span>as well as enable the <span className="bold-text">Display Icon </span>to display an icon. 


      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
        <li>
          Format
        </li>
        <br />
        In this section, you can adjust the appearance of your <span className="bold-text">button </span>by choosing the <span className="bold-text">background color </span> ,the <span className="bold-text">label </span>,the <span className="bold-text">Icon </span> etc.
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
        <li>
          Interactions
        </li>
        <br />
        The <span className="bold-text">Interactions </span>section allows you to choose the action when the button is clicked. You can display another dashboard, navigate to any URL, use it log out of ciPARTHENON, or reset all <span className="bold-text">Input widgets </span>to their default value.
        <br />
        You have 2 actions available for the same button. If you choose to use both, adjust the Delay between the 2 clicks to adapt for a good user experience.
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />


      
      
    </div>
  );
};
