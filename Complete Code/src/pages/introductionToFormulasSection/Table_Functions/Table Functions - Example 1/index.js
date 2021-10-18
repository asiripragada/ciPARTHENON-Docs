import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";

export const TableFunctionsExample1 = () => {
  return (
    <div className="TableFunctionsExample1">
      <h1 className="padding-Top">Table Function Example-1</h1>
      <p>
      When we work with Percentages, it is preferable that the values are calculated at the widgets level and not at the data set level, especially when the data set is aggregated on the dashboards side. 
      </p>
      <p>
      Let's take the following example: 
      </p>
      <p>
      I have a Drilldown table shoiwng the Sales and the Budget for each Product Id and Country.
      </p>
      <img src={image1} className="imageClass" />
      <br />
      <p>
      I want to calculate Sales vs. Budget in the table. The table is filtered by a couple of lists ( Country, product Id, region) and a DateRangePicker. 
      </p>
      <p>
      This means that The Percentages Sales vs. Budget need to be calculated directly in the table and to be responsive to the filters. 
      </p>
      <p>
      In tables, we have contextual columns to do this.</p>
      <p>Go to Data Bindings in the Table Properties - Add Calculated Column and type the following formula: <span className="bold-text">RowValue('Sales')/RowValue('Budget') *100</span></p>
      <img src={image2} className="imageClass" />
      <br/>
      <p>
      Then, if you want to have a Footer for your table, you go to Properties  - Footer - Add New Summary
      If for Sales and Budget you can select Sum, for % you can not select Sum, Avg, etc. 
      The calculation needs to be done on the spot. 
      </p>
      <p>
        And type the following formula: 
      </p>
      <p>
        <span className="bold-text">RowTotal('Sales', 'Sum') / RowTotal('Budget', 'Sum') *100</span>
      </p>
      <img src={image3} className="imageClass" />
      <p>
      The Formulas are the same for the Simple table also. 

      </p>

      
    </div>
  );
};
