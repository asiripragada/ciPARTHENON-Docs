import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";
import image7 from "./images/Picture7.PNG";
import image8 from "./images/Picture8.PNG";

export const WaterfallChart = () => {
  return (
    <div className="WaterfallChart">
      <h1 className="padding-Top">Waterfall Chart</h1>
      <p>
      A waterfall chart is a form of data visualization that helps in understanding the cumulative effect of sequentially introduced positive or negative values. The waterfall chart is also known as a flying bricks chart or Mario chart due to the apparent suspension of columns (bricks) in mid-air.
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
      <img src={image1} className="imageClass" />
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
      <img src={image2} className="imageClass" />
      <br />
      <p>
      The red buttons on the right end side of the search bar allow you to filter them to show only the measures, the time columns or the dimensions.
      </p>
      <img src={image3} className="imageClass" />
      <p>
      The next step is to drag and drop the columns into the Value(Weight) and Categories/dates.
      You have to add a numeric column into the value section, the dimensions into the Category section. 
      </p>
      <p>
      Here, you have the option of setting up the aggregation needed for the value. If you click on Sum below the column name, you will see the different aggregations possible you can apply on your measure. 
      A preview of the chart is available on the right end side of your screen.
      </p>
      <p>
        <li>
          <span className="bold-text">Custom Data</span>
        </li>
        If you choose this option,click on the Data tab and start typing the data in the cells.
        You will find our data editor quite similar to an Excel worksheet. You can click on the Plus button to add a new column (Series). If you want to delete a column, you have to click on the arrow on the right end side of the column name (Series 1). From there, you can also rename the column.
        In order to add a new row, you have to simply type the values on the empty line and you will see a new row will be added automatically. 
      </p>
      <img src={image4} className="imageClass" />
      <br/>
      <p>
      <li>
          <span className="bold-text">Sort & FIlter</span>
        </li>
        In this section you can select the data you want to show in the graph. 
        You have the possibility of only focusing on certain rows for your values/series: activate the Display Top / Bottom button, select the number of rows you want to include and the corresponding value. In case you have rows with the same value you can include them separately by enabling the Include same ranking rows button or you can position them on the same rank.
      </p>
      <img src={image5} className="imageClass" />
      <br/>
      <p>
      You can narrow down your data by applying filters.
      Click on <span className="bold-text">Add Filter</span> and select the column you want to apply the filter on.
      </p>
      <img src={image6} className="imageClass" />
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
        In the Format section you have the possibility of adding a title, format the background of the graph, add a legend, format the axis. 
      </p>
      <img src={image7} className="imageClass" />
      
      <br />
      <p>
        <li>
          <span className="bold-text">Interactions</span>
        </li>
        The interaction section allows you to choose the action which will be performed when you hover over the graph or when you click on it. 
        You can display the tool tips when you hover over the chart.   
      </p>
      <img src={image8} className="imageClass" />
      

      <p className="bold-text center Allign">Happy Dashboarding </p>
      <br />
    </div>
  );
};
