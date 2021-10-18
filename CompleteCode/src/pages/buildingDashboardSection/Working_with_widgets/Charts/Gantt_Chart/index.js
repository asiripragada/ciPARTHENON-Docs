import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";
import image7 from "./images/Picture7.PNG";


export const GanttChart = () => {
  return (
    <div className="GanttChart">
      <h1 className="padding-Top">Gantt Chart</h1>
      <p>
      The Gantt chart is a graph with horizontal bars whose lengths are proportional to the values that they represent. It displays the aggregated values associated with items included in a category like regions, departments, age groups etc.
      <br />


      In order to build a Column chart, you have to drag and drop the widget into the dashboard work space area. 
      <br />


      A new window will appear that allows you to customize the chart's properties. 
      <br />
      <li>Properties</li>
      In this section you can name the chart, set up a style and choose the colors of the bars.
    
      Once you lock the position, you will not be able to move the widget in the dashboard area, unless you disable the option again.
      You can quickly change the type of visualization by changing the type of the chart: bar, column, area, line. You have to access the Type drop down list. </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      
      <p>
      You will also be able to choose the type of Gantt chart from two styles: Project or Resource. You will be able to see a preview of the chart on the right side of the pop-up.
      <br />
      <p>
        <li>
          Data
        </li>
        <br />
        Based on the selection from the Properties tab, you can will be able to select the Data you want to represent or enter the values to create the data from scratch.

        If you choose to use a data source, you will need to link your Gantt Chart with an imported data source. Click on the search bar containing ‘Select a Datasource’ and choose your data set, all the available columns will self populate underneath the search bar. Then you can drag and drop the columns into the desired box on in the middle of screen. Again, the preview on the right will reflect the data changes immediately.
      </p>
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br/>
      <p>
      If you choose to use custom data, you can directly type in your data and the preview will reflect the changes as you enter them.



      Here is an example of what a data set should look like for a gantt chart
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
        <span className="bold-text">Sort and Filter</span>
        <br />
        <li>
          Sort
        </li>
        You can fine tune your chart by sorting the values or dimensions in a descending, ascending or custom way.
      </p>
      <br />
      <img src={image4} className="imageClass" />
      <br />
      <p>
        <li>
          Filters
        </li>
      You can narrow down your data by applying filters. 
      Click on <span className="bold-text">Add Filters</span> and select the column you want to apply the filter on. 
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
        <span className="bold-text">Format</span>
        <br />
        Here you can adjust the appearance of your table by choosing the background color, the font, the text format of the title, the header, the rows, as well display tooltips. You can also apply conditional formatting to the displayed chart values or like in the image below the color of a row based on hover or selection.
      </p>
      <br />
      <img src={image6} className="imageClass" />
      <br />
      <p>
        <span className="bold-text">Interactions</span>
        <br />
        The interaction section allows you to choose the action which will be performed when you click on it as well as when you double click on it. 
        <br />
        <img src={image7} className="imageClass" />
      </p>
      <br />
      

      
    </div>
  );
};
