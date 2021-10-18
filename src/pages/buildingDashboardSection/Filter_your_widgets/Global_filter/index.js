import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";

export const GlobalFilter = () => {
  return (
    <div className="GlobalFilter">
      <h1 className="padding-Top">Global Filter</h1>
      <p>
      For every dashboard, there is the option to utilize a tool called the Global Filter to speed up your building process. By having a Global Filter, you can quickly and easily create a filter for multiple widgets.



      Global Filters is located at the bottom left menu block of the Dashboard Editor. From here, you can add a new filter by clicking on the ‘+’ sign.
      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      Similar to normal filters, the Global Filter requires a Datasource to function properly. And once a data source has been selected, the appropriate filters can be added.

      Each global filter can only use one data source.
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>Widgets on the same dashboard that uses the same Datasource will then be available as a selection to apply the Global Filter to. After toggling on the Global Filter, the selected widgets will react to the filters as intended.
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
      Under the Filter tab for each of the widgets, the Global Filter will show up as one entry that can be toggled on or off.
      </p>
      <br />

      <img src={image4} className="imageClass" />

      
    </div>
  );
};
