import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";



export const PivotTable = () => {
  return (
    <div className="PivotTable">
      <h1 className="padding-Top">Pivot Table</h1>
      <p>
      The pivot table is a table graph which displays data based off two attributes in a dataset. For example, if you are examining the count of sales per country by car type for a car dealership, a pivot table will do an effective job in doing so by transposing attribute groups as row and column headings.
      <br />
      In order to build a Pivot Table, you have to drag and drop the widget into the dashboard work space area. 
      A new window will appear that allows you to customize the chart's properties. 
      <br/>
      <li>
        <span className="bold-text">Properties</span>
      </li>
      In this section you can name the table, set up a style for this table and size of your widget. 

      Once you lock the position, you will not be able to move the widget in the dashboard area, unless you disable the option again. 
      </p> 
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
        You can build the table based on: 
        <br />
        <span className="bold-text">Data</span>
        <br />
        If you choose this option, click on Data tab and link your Pivot Table with an already imported data source. Click on the <span className="bold-text">Select A Datasource </span>search bar and select your data set. You can then drag and drop the columns into the corresponding boxes (Columns, Rows, and Values). You can then choose how you want your column values to be displayed. The preview of the table is available on the right end side of your screen, and will be updated automatically with each change you make.
      </p>
      <img src={image2} className="imageClass" />
      <br/>
      <p>
      If you choose to use Custom Data, you will be able to enter your values directly through the Data tab. The data editor is quite similar to a Microsoft Excel worksheet. In order to add a new row, you simply have to type the values in the empty line and you will see a new row be added automatically. the aggregation default name. The bars on the left allows you to adjust the order of the data.
      </p>
      <img src={image3} className="imageClass" />      
       <br/>
       <p>
         <li><span className="bold-text">Sort & Filter</span></li>
         You can further organize your data by setting up how certain columns are sorted and by applying filters to various aspects of the table. Click on ‘Add Filter’ button and select the column you want to apply the filter on.
       </p>
       <img src={image4} className="imageClass" />  
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
      <br/>
      <p>
        <li><span className="bold-text">Format</span></li>
        You have complete control to the appearance of your table through this tab, and this includes the title, the background color, the font, the text format of the whole table, and as well as the layout of the whole table.
      </p>
      <img src={image5} className="imageClass" /> 
      <br/>
      <p>
      We also introduced Conditional Formatting to this widget, where you can customize how a cell will appear based on the conditions you have pre-selected. You can format the chart by Values, % of Row Group, % of Column Group, % of Row Total, and % of Column TOtal.
      </p>
      <p>
        <li><span className="bold-text">Interactions</span></li>
        Similar to every other widget on ciPARTHENON, you have the ability to set the following action when this widget is interacted through mouse clicks.
      </p>
      <img src={image6} className="imageClass" /> 
      
    </div>
  );
};
