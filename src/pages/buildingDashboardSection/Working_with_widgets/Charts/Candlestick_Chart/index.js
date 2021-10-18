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
import image10 from "./images/Picture10.PNG";
import image11 from "./images/Picture11.PNG";

export const CandlestickChart = () => {
  return (
    <div className="CandlestickChart">
      <h1 className="padding-Top">Candlestick Chart</h1>
      <p>
      Candlestick chart is a style of financial chart used to describe price movements of a security, derivative, or currency. Each "candlestick" typically shows one day. A daily candlestick shows the market's open, high, low, and close price for the day. The candlestick has a wide part, which is called the "real body."

      <br />

      While preparing a candlestick chart, you have the following elements:

      Date - Represents typically a trading day

      High - Represents the day's high for a particular stock

      Low - Represents the day's low for a particular stock

      Close - Represents the day's closing price

      Open - Represents the day's open price

      <br />

      This real body represents the price range between the open and close of that day's trading. When the real body is filled in Red, it means the close was lower than the open. If the real body is White (sometimes traders use Green), it means the close was higher than the open.
      <br />


      In order to build a candlestick chart, you have to drag and drop the widget into the dashboard work space area. 



      A new window will appear that allows you to customize the chart's properties. 
      <br />
      <li>Properties</li>
      In this section you can name the chart, set up a style and choose the colors of the Candlestick.
    
      Once you lock the position, you will not be able to move the widget in the dashboard area, unless you disable the option again.
      You can quickly change the type of visualization by changing the type of the chart: bar, column, area, line. You have to access the Type drop down list. </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      
      <p>
        You can build the graph based on: 
        <br />
        <span className="bold-text">Data</span>
        <br />
        If you choose this option, click on Data tab and link your Candlestick chart with an already imported data source. Click on the <span className="bold-text">Select A Datasource </span>search bar and select your data set. All the columns are added in the left end side of the screen. 
        The red buttons on the right end side of the search bar allow you to sort the data fields.
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br/>
      <p>
      The next step is to drag and drop the columns into the Dates (represents typically a trading day), Open (represents the day's open price), High (represents the day's high for a particular stock), Low (represents the day's low for a particular stock) or Close (represents the day's closing price). 
      Here, you have the option of setting up the aggregation needed for the value. If you click on Sum below the column name, you will see the different aggregations possible you can apply on your measure. 
      A preview of the chart is available on the right end side of your screen.

      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
        <li>
          Custom Data
        </li>
        If you choose this option,click on the <span className="bold-text">Data </span>tab and start typing the data in the cells.
        You will find our data editor quite similar to an Excel worksheet. You can click on the <span className="bold-text">Plus </span>button to add a new column (Series). If you want to delete a column, you have to click on the arrow on the right end side of the column name (Series 1). From there, you can also rename the column. 
        In order to add a new row, you have to simply type the values on the empty line and you will see a new row will be added automatically. 
      </p>
      <br />
      <img src={image4} className="imageClass" />
      <br />
      <p>
      <li>
        Sort and Filter
        </li>
        <br />
        In this section you can select the data you want to show in the graph. 

        You have the possibility of only focusing on certain rows for your values/series: activate the Display Top / Bottom button, select the number of rows you want to include and the corresponding value. In case you have rows with the same value you can include them separately by enabling the Include same ranking rows button or you can position them on the same rank.
      </p>
      <br />
      <img src={image5} className="imageClass" />
      
      <br/>
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
        You can further personalize your candlestick graph (colors and lines) in the "Candlestick" section :
        </p>
        <br />
        <img src={image8} className="imageClass" />
        <p>
        In the Format section you can define <span className="bold-text , italic">Lines and Bands </span>
        Click <span className="bold-text">add a Line </span>set the orientation, visibility, the value Max Min Avg or a specific formula
        </p>
        <br />
        <img src={image9} className="imageClass" />
        <br />
        <img src={image10} className="imageClass" />
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
       <img src={image11} className="imageClass" />

      
    </div>
  );
};
