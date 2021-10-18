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


export const SimpleTable = () => {
  return (
    <div className="SimpleTable">
      <h1 className="padding-Top">Simple Table</h1>
      <p>
      The Simple table displays data as columns in the table. For example, if you are examining the average price for various countries, you can add and view prices for each country in the simple table.


      <br />
      In order to build a Drilldown Table, you have to drag and drop the widget into the dashboard work space area. 
      A new window will appear that allows you to customize the chart's properties. 
      <br/>
      <li>
        <span className="bold-text">properties</span>
      </li>
      In this section you can name the table, set up a style for this table and size of your widget. 

      Once you lock the position, you will not be able to move the widget in the dashboard area, unless you disable the option again. 
      </p> 
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
        You can build the Table based on: 
        <br />
        <li><span className="bold-text">Data</span></li>
        <br />
        If you choose this option, click on Data tab and link your Simple Table with an already imported data source. Click on the <span className="bold-text">Select A Datasource </span>search bar and select your data set. All the columns are added in the left end side of the screen. 
        The red buttons on the right end side of the search bar allow you to filter them to show only the measures, the time columns or the dimensions.
      </p>
      <br />
      <p>
      The next step is to drag and drop the columns into the Drilldown columns and Value columns. 
      <p>Here, you have the option of setting up the aggregation needed for the value. If you click on Sum below the column name, you will see the different aggregations possible you can apply on your measure. 
      A preview of the chart is available on the right end side of your screen.</p>
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Custom Data</span>
        </li>
        If you choose this option,click on the <span className="bold-text">Data </span>tab and start typing the data in the cells.
        You will find our data editor quite similar to an Excel worksheet. You can click on the <span className="bold-text">Plus </span>button to add a new column. If you want to delete a column, you have to click on the arrow on the right end side of the column name (Series 1). From there, you can also rename the column. 
        In order to add a new row, you have to simply type the values on the empty line and you will see a new row will be added automatically. 
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Table Footer</span>
        </li>
        In this section you can add one or multiple summaries to the bottom of the table. You have to click on the Add new summary button and then choose the type of aggregation you want to display.

        You can also change the aggregation default name if you want. 
      </p>
      <img src={image4} className="imageClass" />
      <br/>
      <p>
      <li>
      <span className="bold-text">Sort & Filter</span>
        </li>
        <br />
        In this section you can select the data you want to show in the Drilldown Table. 

        </p>
      <p>
      You can fine tune your graph by sorting the values or dimensions in a descending, ascending or custom way. You have to enable the Sort Series / Values by button and select the column on which you want to apply the sorting. 
      </p>
      <br/>
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
      <span className="bold-text">Format</span>
        </li>
        <br /> 
        In the Format section you have the possibility of adding a title, format the background color, the font, the text format of the whole table, the header, the body, the footer etc.
        </p>
        <br />
        <img src={image7} className="imageClass" />
        <br />
        <p>
          <li><span className="bold-text">Conditional Format</span></li>
          In the format section under <span className="bold-text">Columns </span>you can set the conditions of how you want your data displayed. The conditions can be based on <span className="bold-text">Number, Percentage, or Formula.</span>
        </p>
        <img src={image8} className="imageClass" />
        <br/>
        <p>
        For numeric data you can set the formatting of the cells/values based on a range. In the following example all values from 0-50 will display with a red background while values from 51-100 display with a yellow background. All other values display with the default background.
        </p>
        <img src={image9} className="imageClass" />
        <br/>
        <p>
        To set conditional visibility on a text column you must choose <span className="bold-text">Formula </span>. The values set in the <span className="bold-text">Min and Max </span>section must be the same. In the following example cells with H in them will have a blue background.
       </p>
       <br />
       <img src={image10} className="imageClass" />
       <br/>

      
    </div>
  );
};
