import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";
import image7 from "./images/Picture7.PNG";

export const FilterPanel = () => {
  return (
    <div className="FilterPanel">
      <h1 className="padding-Top">Filter Panel</h1>
      <p>
      In order to build a <span className="bold-text">Filter Panel</span>, simply drag and drop the widget into the dashboard work space area.A new window will appear that allows you to customize the list's <span className="bold-text">properties</span>
      <li>
        <span className="bold-text">Properties</span>
      </li>
      <br />
      In this section, you can name and set up a style for the Filter Panel.
      <br />
      Once you lock the position, you will not be able to move the widget in the dashboard area, unless you disable the option again. 
      <br />
       </p>
       <p>
       The visibility of the widget can be set here as well as the persist selections option.
       </p>
       <img src={image1} className="imageClass" />
      <br />
      <p>
      You can change the filter panel type under this tab to Horizontal or vertical.
      <br />
      <li>
        <span className="bold-text">Data</span>
      </li>
      <br />
      Here you can select the columns where you want the filter values to be generated from. The values can be displayed as a list or as a dropdown list.
      </p>
      <img src={image2} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Filter Items</span>
        </li>
        In this section you can set how users can interact with the different filters. You can apply the settings to all the filters or to specific ones. The option to enable search in the list as well as enabling multiple selections or no selections can be found here as well.
      </p>
      <img src={image3} className="imageClass" />
      <br />
      
      <p>
      Depending on the list settings you can set the default selection to be <span className="bold-text">first item,specific item or all</span> the items, or have the selection be based on a formula.
      </p>
      <p>
        <li>
          <span className="bold-text">Sort & Filter</span>
        </li>
        In this section, you can sort the entries in the list by activating the <span className="bold-text">Sort Series/Values by </span>button. Select the column you want to sort by and the desired order: <span className="bold-text">Ascending , descending , Fixed </span>
      </p>
      <img src={image4} className="imageClass" />
      <p>
      If you want to filter the data shown in the list, click on <span className="bold-text">Add Filter </span>and select the column you want to apply the filter on.
      </p>
      <p>
      You can select your filter based on <span className="bold-text">Data, Formula, Input widget, User parameters or Team parameters.</span>
      <p>
        1.) If you choose <span className="bold-text">Data </span>, you can select between the values existent in the chosen column.
      </p>
      <p>
        2.) If you choose <span className="bold-text">Input widget </span>, you can link the filters (lists) existent in your dashboard to your drop-down list.
      </p>
      <p>
        3.) If you choose <span className="bold-text">Formula Editor </span>, you have to write the syntax by clicking on f(x).
      </p>
      <p>
        3.) If you choose <span className="bold-text">User parameters/Team parameters,</span>you can choose your already defined parameters and restrict the view of the users.
      </p>
      </p>
      <img src={image5} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Format</span>
        </li>
        In this section, you can adjust the appearance of your list by choosing the <span className="bold-text">background color , font , text format ,etc.</span>
      </p>
      <img src={image6} className="imageClass" />
      <br />
      <p>
      In the <span className="bold-text">Filter Items </span>side tab you can style the individual filter lists.
      </p>
      <img src={image7} className="imageClass" />
      <br />
      
    </div>
  );
};
