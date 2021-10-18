import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";

export const CustomColorPalette = () => {
  return (
    <div className="CustomColorPalette">
      <h1 className="padding-Top">Custom Color Palette</h1>
      <p>
      With ciPARTHENON's Palette chooser you can easily define the color scheme of widgets and dashboards. In this document we will take you through the steps to implement a color scheme via the Custom Palette feature.
      <br />
      <span className="bold-text">Access the Color Palette</span>
      <br />
      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      1. From within the dashboard editor select the paint drop icon in the header tool bar

      2. To create a new Color Palette click the "Add New Palette" button

      3. To choose the first color in the palette click the drop down arrow beside the color window, from here you can manually choose the color or specify the hex code in the text box

      4. To add additional colors follow step 3 on the color window displaying "X"
      </p>
      <br />
      <p>
      <span className="bold-text">Apply Custom Color Palette to Dashboard</span>
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
      1. Access the dashboard settings window by clicking on the gear icon in the dashboard editor header toolbar

      2. Select dashboard properties tab

      3. From the left margin select "Size / Theme"

      4. Select your Custom Palette from the drop down list
      </p>
      <br />
      <p>
      <span className="text-bold">Apply Custom Color Palette to individual widgets</span>
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
      1. From the widget properties window access the Properties tab

      2. In the colors drop down pick your custom Color Palette


      </p>
    </div>
  );
};
