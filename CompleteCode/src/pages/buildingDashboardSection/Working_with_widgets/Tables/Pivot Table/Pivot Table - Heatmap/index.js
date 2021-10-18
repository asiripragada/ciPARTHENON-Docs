import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";
import image7 from "./images/Picture7.PNG";
import image8 from "./images/Picture8.PNG";

export const PivotTableHeatMap = () => {
  return (
    <div className="PivotTableHeatMap">
      <h1 className="padding-Top">Pivot Table - Heat Map</h1>
      <p>
      A Heatmap in the pivot table acts as a visual representation that enables the user to quickly obtain a comparative view of the dataset.
      </p>
      <p>
      To begin, click on the "Style & Format" table in the widget Properties tab. 
      </p>
      <img src={image1} className="imageClass" />
      <br />
      <p>Then choose the value that you want to represent with a heatmap.
      </p>
      <img src={image2} className="imageClass" />
      <br/>
      <p>
        Toggle on "Enabled"
      </p>
      <img src={image3} className="imageClass" />
      <br/>
      <p>A preset selection should be enabled, which you can modify to fit your needs to visualize the data.</p>
      <img src={image4} className="imageClass" />
      <br/>
      <p>The various items that you can configure are:
        <br/>
        <li>Level - when setting up a collapsible table, you will be able to choose from the higher levels or the lower levels to display the heatmap</li>
      </p>
      <img src={image5} className="imageClass" />
      <br/>
      <p>
        <li>Compare - choose how you would like your heatmap to draw the comparison from</li>
      </p>
      <img src={image6} className="imageClass" />
      <br/>
      <p><li>Style - choose from a two colour gradient or a three colour gradient</li></p>
      <img src={image7} className="imageClass" />
      <br/>
      <p><li>Preset - this along with the <span className="bold-text">Highest/Lowest Value</span> are the colour settings for the heatmap; choose from the preset colours or pick your own</li></p>
      <img src={image8} className="imageClass" />
      
    </div>
  );
};
