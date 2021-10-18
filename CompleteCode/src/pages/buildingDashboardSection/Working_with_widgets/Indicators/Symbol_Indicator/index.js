import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";
import image7 from "./images/Picture7.PNG";

export const SymbolIndicator = () => {
  return (
    <div className="SymbolIndicator">
      <h1 className="padding-Top">Symbol Indicator</h1>
      <p>
      If you want to add a Symbol to your values that changes the appearance automatically, you can use the <span className="bold-text">Symbol Indicator </span>includes in the <span className="bold-text">Indicators </span>catogary
      <br />
      To use the <span className="bold-text">Number Indicator </span>drag and drop it onto the dashboard work space area, bringing you to a new window that allows you to customize its properties.  
      <li>
        <span className="bold-text">Properties</span>
      </li>
      <br />
      In this section, you can name and set up a style for the indicator.
      <br />
      Once you lock the position, you will not be able to move the widget in the dashboard area, unless you disable the option again. 
      <br />
       </p>
       <img src={image1} className="imageClass" />
      <br />
      <p>
      You can build the indicator based on:
      <br />
      <li>
        <span className="bold-text">Data</span>
      </li>
      <br />
      If you choose this option, go to the Data tab and link your <span className="bold-text">Symbol Indicator </span>with an already imported data source. Click on <span className="bold-text">Select a data source </span>search bar and select your data set. All the columns are added in the left side of the screen. The red buttons on the right side of the search bar allow you to filter your columns based on their type: <span className="bold-text">to show only the measures, the time columns, or the dimensions. </span>
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
      <br />
      The next step is to drag and drop the column into the <span className="bold-text">Values </span>
      <br />
      You have the option of setting up the <span className="bold-text">Aggregation </span>needed for the <span className="bold-text">Value.</span>If you click on the <span className="bold-text">Sum </span>(Numerical column) or <span className="bold-text">DistinctCount </span>(categorical columns) below the column name, you will see the different aggregations types that you can apply to your measure.
      <br />
      A preview of the indicator is available on the right side of your screen:
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Formula</span>
        </li>
        <br />
        If you choose this option, click on the f(x) button to build your own formula using our Formula Editor Menu.
      </p>
      <br />
      <img src={image4} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Sort & Filter</span>
        </li>
        <br />
        In this section, you can filter the data shown on the Symbol Indicator by applying filters.
        <br />
        Click on <span className="bold-text">Add filter </span>and select the column you want to apply the filter on. 
        <br />
        You can select your filter based on <span className="bold-text">Data, Formula, Input widget, User parameters or Team parameters. </span>
        <br />
      1) If you choose <span className="bold-text">Data</span>, you can select between the values existent in the chosen column. 
      2) If you choose <span className="bold-text">Input Widget</span>,, you can link the filters (lists) existent in your dashboard to your chart.
      3) If you choose <span className="bold-text">Formula Editor,</span> you have to write the syntax by clicking on f(x).
      4) If you choose <span className="bold-text">User parameters/Team parameters,</span>you can choose your already defined parameters and restrict the view of the users.
      </p>
      <br />
      <img src={image5} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Format</span>
        </li>
        <br />
        In the <span className="bold-text">Format</span> section you have the possibility of adding a title, format the <span className="bold-text">Background Color </span>of the Indicator, add an <span className="bold-text">Image/icon</span> for the indicator.
        You can build conditional formatting for the colors and symbols, in order for the color or shape to change depending on how the data changes. You can use absolute numbers or you can generate dynamic values based on the Formula Editor.
      </p>
      <br />
      <img src={image6} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Interactions</span>
        </li>
        <br />
        The interaction section allows you to choose the action which will be performed when you double click or hover on the <span className="bold-text">Symbol indicator</span>. You can display a new dashboard/navigate to a URL in a new tab, or display the ToolTip respectively.
      </p>
      <br />
      <img src={image7} className="imageClass" />
      <br />
      
      
    </div>
  );
};
