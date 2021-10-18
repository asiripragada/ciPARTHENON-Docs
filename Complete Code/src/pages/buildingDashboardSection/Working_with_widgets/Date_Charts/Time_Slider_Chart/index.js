import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";
import image7 from "./images/Picture7.PNG";
import image8 from "./images/Picture8.PNG";

export const TimeSliderChart = () => {
  return (
    <div className="TimeSliderChart">
      <h1 className="padding-Top">Time Slider Chart</h1>
      <p>
      The Time Slider chart is a graph which displays quantitative data as a series of data points called 'markers' connected by straight line segments based on the input time period.

      <br />

      In order to build a time slider chart, you have to drag and drop the widget into the dashboard work space area. 

      <br />

      A new window will appear that allows you to customize the chart's properties.
      <br/>
      <li>
        <span classname="bold-text">Properties</span>
      </li>
      In this section you can name the chart, set up a style and choose the colors of the lines. 

      Once you lock the position, you will not be able to move the widget in the dashboard area, unless you disable the option again. 

      You can quickly change the type of visualization by changing the type of the chart: bar, column, area, line. You have to access the <span className="bold-text">Type </span>dropdown list
      </p> 
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
        You can build the graph based on: 
        <br />
        <li>
        <span className="bold-text">Data</span>
        </li>
        <br />
        If you choose this option, click on Data tab and link your Time Slider chart with an already imported data source. Click on the <span className="bold-text">Select A Datasource </span>search bar and select your data set. All the columns are added in the left end side of the screen. 
        The red buttons on the right end side of the search bar allow you to filter them to show only the measures, the time columns or the catagorial dimensions.
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br/>
      <p>
      The next step is to drag and drop the columns into the Values, Categories or Series heading accordingly.It is important to note that adding a column under the Values heading will result into different aggregations depending on whether it is a <span className="bold-text">numerical </span> and <span className="bold-text">Text </span>.
      <br />
      Regarding the <span className="bold-text">Categories </span>heading, a column with a <span className="bold-text">Date </span>format must be added in order to make the Time Slider interactive. In case you want every value under the category heading to be split by another criteria, you have to add a dimension under the Series heading. 
      <br />
      A preview of the chart is available on the right end side of your screen.
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
        <li>
          <span classname="bold-text">
          Custom Data
          </span>
        </li>
        If you choose this option,click on the <span className="bold-text">Data </span>tab and start typing the data in the cells.
        You will find our data editor quite similar to an Excel worksheet. You can click on the <span className="bold-text">Plus </span>button to add a new column (Series). If you want to delete a column, you have to click on the arrow on the right end side of the column name (Series 1). From there, you can also rename the column. 
        In order to add a new row, you have to simply type the values on the empty line and you will see a new row will be added automatically. The first column will be always a date.
      </p>
      <br />
      <img src={image4} className="imageClass" />
      <br />
      <p>
      <li>
        Sort and Filter
        </li>
        <br />
        In this section you can specify the amount of data you want to show in the graph.
        <br />
        You have the possibility of only focusing on certain rows for your values/series: activate the <span className="bold-text">Display Top / Bottom</span> button, select the number of rows you want to include and the corresponding value. In case you have rows with the same value you can include them separately by enabling the Include same ranking rows button or you can position them on the same rank.
      </p>
      <br />
      <img src={image5} className="imageClass" />
      <br />
      <p>
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
      <img src={image6} className="imageClass" />
      <br />
      <p>
      <li>
        Format
        </li>
        <br /> 
        In the Format section you have the possibility of adding a title, format the background of the graph, add a legend, format the Y-Axis, X-Axis, the Series or transform the graph in a 3D style. 
        </p>
        <br />
        <img src={image7} className="imageClass" />
        <br />
        <p>
        <li>
        Interactions
        </li>
        <br />
        The interaction section allows you to choose the action which will be performed when you hover over the graph or when you click on it. 
        You can display the tool tips, the value names and/or the crosshairs. 
        If you enable the <span className="bold-text">Allow zoom in when dragging</span> you will be able to have a closer view on the graph by dragging the mouse on a data point. 
        Also, you have the possibility to apply an interaction to navigate to another dashboard or to an external URL if you double click on the widget. 
       </p>
       <br />
       <img src={image8} className="imageClass" />

      
    </div>
  );
};
