import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";
import image7 from "./images/Picture7.PNG";
import image8 from "./images/Picture8.PNG";
import image9 from "./images/Picture9.PNG";

export const SankeyDiagram = () => {
  return (
    <div className="SankeyDiagram">
      <h1 className="padding-Top">Sankey Diagram</h1>
      <p>
      The Sankey Diagram widget is great to illustrate flow of values from one state to another. The width of the connection line provides a visual clue to the size of value.
      </p>
      <p>
      In order to build a Sankey chart, you have to drag and drop the widget into the dashboard work space area.
      </p>
      <p>
      A new window will appear that allows you to customize the chart's properties. 
      </p>
      <p>
        <li>
          <span className="bold-text">Properties</span>
        </li>
        In this section you can name the chart, set up a style and choose a color scheme for the widget.
        Once you lock the position, you will not be able to move the widget in the dashboard area, unless you disable the option again. 
        You can set up advanced options and make it visible/invisible based on formulas.
      </p>
      <p>- You can set up advanced options and make it visible/invisible based on formulas.</p>
      <p>- The CSS class will allow you to assign custom CSS  to your chart when configuring the CSS of your dashboard. You can also switch between <span className="bold-text">Sankey diagram and Dependancy wheel </span>by clicking on Type.</p>
      <img src={image1} className="imageClass" />
      <img src={image2} className="imageClass" />
      <br/>
      <p>
      You can build the graph based on: 
      </p>
      <p>
        <span className="bold-text">Data</span>
      <p>
      If you choose this option, click on Data tab and link your funnel chart with an already imported data source. Click on the Select a Data Source search bar and select your data set. All the columns are added in the left end side of the screen. 
      </p>
      </p>
      <img src={image3} className="imageClass" />
      <br />
      <p>
      The next step is to drag and drop the columns into the Value(Weight) and Categories/dates.
      You have to add a numeric column into the weight section, the categories or dates into the  starting section and end section. 
      </p>
      <img src={image4} className="imageClass" />
      <br/>
      <p>
        <li>
          <span className="bold-text">Custom Data</span>
        </li>
        If you choose this option,click on the Data tab and start typing the data in the cells.
        You will find our data editor quite similar to an Excel worksheet. You can click on the Plus button to add a new column (Series). If you want to delete a column, you have to click on the arrow on the right end side of the column name (Series 1). From there, you can also rename the column.
        In order to add a new row, you have to simply type the values on the empty line and you will see a new row will be added automatically. 
      </p>
      <img src={image5} className="imageClass" />
      <br/>
      <p>
      <li>
          <span className="bold-text">Sort & FIlter</span>
        </li>
        In this section you can select the data you want to show in the graph.
        You can fine tune your graph by sorting the values or dimensions in a descending, ascending or custom way. You have to  add a sort column and select the column on which you want to apply the sorting. 
      </p>
      <img src={image6} className="imageClass" />
      <br/>
      <p>
      You can narrow down your data by applying filters.
      Click on Add Filter and select the column you want to apply the filter on.
      </p>
      <img src={image7} className="imageClass" />
      <br/>
      <p>
      You can select your filter based on Data, Formula, Input widget, User parameters or Team parameters.
      If you choose Data, you can select between the values existent in the chosen column.
      If you choose Input widget, you can link the filters (lists) existent in your dashboard to your chart.
      If you choose Formula Editor, you have to write the syntax by clicking on f(x). 
      If you choose User parameters/Team parameters, you can choose your already defined parameters and restrict the view of the users.
      </p>
      <br/>
      <p>
        <li>
          <span className="bold-text">Format</span>
        </li>
        In the Format section you have the possibility of adding a title, format the background of the graph, add a legend, format the Slices, Label or the funnel shape. 
      </p>
      <img src={image8} className="imageClass" />
      
      <br />
      <p>
        <li>
          <span className="bold-text">Interactions</span>
        </li>
        The interaction section allows you to choose the action which will be performed when you you double click on chart.  
      </p>
      <img src={image9} className="imageClass" />
      

      <p className="bold-text center Allign">Happy Dashboarding </p>
      <br />
    </div>
  );
};
