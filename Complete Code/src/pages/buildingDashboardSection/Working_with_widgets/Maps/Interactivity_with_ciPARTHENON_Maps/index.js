import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";

export const InteractivityWithCiparthenonMaps = () => {
  return (
    <div className="InteractivityWithCiparthenonMaps">
      <h1 className="padding-Top">Interactivity with ciPARTHENON Maps</h1>
      <p>
      You can now add interactivity to your ciPARTHENON maps! 
      Click on a Region Country etc.and the other widgets will be filtered accordingly. 
      You can achieve this by using the contextual formulas for the maps. 
      </p>
      <p>
      In this example I am using the Regional Map, but you can create the same functionality with the Location Map as well. 
      </p>
      <p>
      Consider a dashboard with a location map and a table showing the details for specific Country. I want to be able to click on a section of the map and I want the table to show the specific results for this Country. 
      </p>
      <p>
      Here are the steps on how to implement the above scenario: 
      </p>
      <p>
      1. Select the table. Access the table Properties. Go to the Filters section. 
      Select the column that you want to apply the interactivity on. 
      Select the operator and then click on Formula Editor. 
      Go to Widgets and select the name of the map. 
      </p>
      <img src={image1} className="imageClass" />
      <br />
      <p>
      The Regional Map has 3 formulas available: selectedvalue, selectedregion, selectedregioncode,selectedvalues,selectedregions,selectedregioncodes,visible.
      </p>
      <p>
      2. Click on " +" and check your formula: 
      </p>
      <img src={image2} className="imageClass" />
      <br/>
      <p>
      3. Click Save. You might want to move the filter in the middle. This will be telling you that even if you do not select any region in the map, you will still see all the data in the table. 
      </p>
      <img src={image3} className="imageClass" />
      <br/>
      <p>4. And it is done!  You can check the dashboard by accessing the live link</p>
      <br/>
      
      <p className="bold-text center Allign">Happy Dashboarding </p>

      
    </div>
  );
};
