import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";
import image7 from "./images/Picture7.PNG";

export const DataFunctions = () => {
  return (
    <div className="DataFunctions">
      <h1 className="padding-Top">Data Function</h1>
      <p>
        The <span className="bold-text">Data </span> functions allow you to retrieve information about your data sets:
        <span className="bold-text">'Data', 'DataAggregate','DataDistinct',DataInfo </span>are functions that you can use in the Formula Editor.
      </p>
      <br />
      <p>
        <li>
          <span className="bold-text">Data</span> is a function that returns an array containing the data. There is a maximum of 1000 items returned. Optionally you can specify a filter as a last parameter.
        </li>
        <br/>
        <span className="bold-text">Syntax: Data('name','Column') </span>
        <span className="bold-text">or with filter: Data('name', 'column', '[variable_name] +condition') </span>
      </p>
      <br />
      <br />
      <p>
      <span className="bold-text ,italic">Example: </span>
      </p>
      <p>
      Data('SalesData', 'Car Model')</p>
      <p>Returns: Toyota, Porsche, Mercedes, Peugeot</p>
      <p>Data('SalesData', 'Car Model', '[Country]="France"')</p>
      <p>Returns: Peugeot
      </p>
      <br />
      <p>
        <li>
          <span className="bold-text">DataAggregate </span>will return a single numeric value for the specified column.
        </li>
        <li>
        It can return a sum, avg, min, max, count, distinct count.
        </li>
      </p>
      <br />
      <p>
      <span className="bold-text">Syntax: DataAggregate('Data','Column',Aggregation) </span>
      <span className="bold-text">or with filter : DataAggregate('data', 'column', aggregation, '[variable_name] +condition') </span>
      </p>
      <br />
      <p>
      Filter is any combination of columns in logical expressions =, and , or

      'DistinctCount' to count the unique number of rows.

      'Count' to count the number of rows.

      'Max' to find the highest value.

      'Min' to find the lowest value.

      'Avg' or 'Average' to average all values.

      ‘Sum' to sum all values.
      </p>
      <br />
      <p>
      <span className="bold-text ,italic">Examples: </span>
      <br />
      <li>
      DataAggregate('datasetname','column', ‘SUM’) – gives you the sum of the column in the dataset.
      </li>
      </p>
      <br />
    
      <img src={image1} className="imageClass" />
      <br />
      <p>
        <li>
        DataAggregate('datasetname','column', ‘SUM’, ‘[Country] = “France”’) – gives you the sum of the column in the dataset where values in the Country column are only France.
        </li>
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
      You can also use Data Aggregate formulas to incorporate calculations in a Number Indicator widget. Here's an example of a Sales/Budget value:
      <br />
      <li>
      DataAggregate('datasetname',Sales, ‘SUM’, ‘filter’)/DataAggregate('datasetname',Budget, ‘SUM’, ‘filter’)
      </li>
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
      Connecting your DataAggregate formula to a DateRangePicker:
      <br />
      <li>
        DataAggregate('datasetname','column', 'sum', '[Date column] Greater than equal to "'+widget('DateRangePicker', 'selectedstartdate')+'" and [Date column] Less than equal to "'+widget('DateRangePicker', 'selectedenddate')+'" ')
      </li>
      </p>
      <br />
      <img src={image4} className="imageClass" />
      <br />
      <p>
      Connecting your DataAggregate formula to a single selection filter:
      <br />
      <li>
      DataAggregate('datasetname', 'column', 'sum' , '[Country] = "'+widget('Dropdown List #1', 'selectedvalue') + '"')
      </li>
      </p>
      <br />
      <img src={image5} className="imageClass" />
      <br />
      <p>
      Connecting your DataAggregate formula to a multi-selection filter:
      <li>
      DataAggregate('datasetname', 'column', 'sum' , '[Country] IN (' +ArrayToValues(widget('Dropdown List', 'selectedvalues'),'"') + ')')
      </li>
      </p>
      <br />
      <img src={image6} className="imageClass" />
      <br/>
      <p>
      Referencing multiple filters simultaneously using the AND/OR statement:
      <li>
      DataAggregate('datasetname', 'column', 'sum' , '[Country] = "'+widget('Dropdown List #1', 'selectedvalue') + '" and [Date column] Greater than or equal to "'+widget('DateRangePicker', 'selectedstartdate')+'" and [Date column] Less than or equal to "'+widget('DateRangePicker', 'selectedenddate')+'" ')
      </li>
      </p>
      <br />
      <img src={image7} className="imageClass" />
      <br />
      <p>
        <span className="bold-text">DataDistinct</span> function returns only unique distinct values. Filters are optional to narrow results.
        <br />
      </p>
      <p>
      <span className="bold-text">Syntax: DataDistinct('data','Column',[filter]) </span>
      <br />
      <span className="bold-text ,italic">Examples: </span>
      <p>DataDistinct ('SalesData', 'Car Model')</p>
      <p>Returns: Toyota, Porsche, Mercedes, Peugeot</p>
      <br />
      <li>
        <span className="bold-text">DataInfo</span> function gives you properties for your data set, such as:
      </li>
      <br />
      RowCount - Number of rows in the data table

      CurrentSize - Size of the data table

      CreatedDate - Created date of the data table

      Owner - Owner of the data table

      LastDataRefresh - Date of last data refresh

      Version - Current version of the data table

      Description - Description of the data table

      LastCacheUpdated - Date of last data cache

      LiveLink - Short code of the data live link

      LiveLinkURL - Full path to the data live link      
      </p>
      <br />
      <p>
      <span className="bold-text">Syntax: DataInfo('name' , Property) </span>
      <br/>
      <span className="bold-text ,italic">Examples: </span>
      DataInfo('My Data', 'LastDataRefresh')
      returns the Last refresh date of the data set named 'My Data'.
      </p>
    </div>
  );
};
