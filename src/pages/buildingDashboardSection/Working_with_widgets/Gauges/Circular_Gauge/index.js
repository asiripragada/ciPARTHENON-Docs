import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";
import image7 from "./images/Picture7.PNG";


export const CircularGauge = () => {
  return (
    <div className="CircularGauge">
      <h1 className="padding-Top">Circular Gauge</h1>
      <p>
      In order to build a circular gauge, you have to drag and drop the widget into the dashboard work space area. 
      <br/>
      A new window will appear allowing you to customize the gauge's properties.  
      <br />
      <li>
        Properties
      </li>
      </p>
      <br />
      <p>
      In this section you can name the gauge and set up a style from your widget.
      <br />
      Once you lock the position, you will not be able to move the widget in the dashboard area, unless you disable the option again.
      <br />
      You can also change the type of circular gauge from <span className="bold-text">Circular </span>to <span className="bold-text"> Full Circular </span>or <span className="bold-text">Half Circular </span>by accessing the <span className="bold-text">Type </span>drop down list. You can also choose the starting point of your gauge from either the <span className="bold-text">Left </span>or <span className="bold-text">Right </span>side if you want.
      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
        You can build the graph based on: 
        <br />
        <span className="bold-text">Data</span>
        <br />
        If you choose this option, click on Data tab and link your Circular Guage with an already imported data source. Click on the <span className="bold-text">Select A Datasource </span>search bar and select your data set. All the columns are added in the left end side of the screen. 
        The red buttons on the right end side of the search bar allow you to filter them to show only the measures, the time columns or the dimensions.
        You have the option of setting up the <span className="bold-text">Aggregation </span> needed for your value. If you click on <span className="bold-text">Sum(Numerical Columns) </span>or <span className="bold-text">DistinctCount (categorical columns) </span> below the column name, you will see the different aggregations types that you can apply to your measure.
        <br />
        Afterwards, you can set up the minimum and maximum values for your gauge.
        <br />
        A preview of the gauge is available on the right end side of your screen:
        <br />
        </p>
        <img src={image2} className="imageClass" />
        <br />
        <p>
          <li>
            <span className="bold-text">Formula</span>
          </li>
          <br />
          If you choose this option, click on the <span classname="bold-text">Data </span>tab where you can set up the <span classname="bold-text">Maximum </span>and <span classname="bold-text">Minimum </span>values of your gauge based on formulas. 
        </p>
        <br />
        <img src={image3} className="imageClass" />
        <br />
        <p>
        When you click on f(x), you will be able to write your formula. You can learn more about the functions available on the formula editor here.
        </p>
        <br />
        <img src={image4} className="imageClass" />
        <br />
        <p>
          <li>
            <span classname="bold-text">
              Sort and Filter
            </span>
            
          </li>
          <br />
          You can select your filter based on Data, Formula, Input widget, User parameters or Team parameters.
          If you choose <span className="bold-text">Data</span>, you can select between the values existent in the chosen column. 
          If you choose <span className="bold-text">Input Widget</span>,, you can link the filters (lists) existent in your dashboard to your chart.
          If you choose <span className="bold-text">Formula Editor,</span> you have to write the syntax by clicking on f(x).
          If you choose <span className="bold-text">User parameters/Team parameters,</span>you can choose your already defined parameters and restrict the view of the users.
        </p>
        <br />
        <img src={image5} className="imageClass" />
        <br />
        <p>
          <li>
            <span classname="bold-text">
              Format
            </span>            
          </li>
          <br />
          In this section you can adjust the appearance of your <span className="bold-text">Circular Guage </span>by choosing the <span className="bold-text">title </span> the <span className="bold-text">Background color,</span>the <span className="bold-text">font</span>, the text <span className="bold-text">format,</span>the <span className="bold-text">color</span> of the bands etc.
          </p>
          <br />
          <img src={image6} className="imageClass" />
          <br />
          <p>
           <li>
            <span className="bold-text">Interactions</span>
           </li> 
           The interaction section allows you to choose the action which will be performed when you double click or hover on the <span classname="bold-text">Circular Gauge.</span>You can display a new dashboard/navigate to a URL in a new tab, or display the ToolTip respectively.
          </p>
          <br />
          <img src={image7} className="imageClass" />
          <br />


      
        <br />          
    </div>
  );
};
