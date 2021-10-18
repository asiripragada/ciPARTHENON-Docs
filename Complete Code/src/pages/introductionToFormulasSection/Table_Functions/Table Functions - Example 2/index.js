import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";

export const TableFunctionsExample2 = () => {
  return (
    <div className="TableFunctionsExample2">
      <h1 className="padding-Top">Table Functions Example-2</h1>
      <p>
      Let's take the following example:  
      </p>
      <p>
      I have a Drilldown table showing  Sales per month. 
      </p>
      <p>
      I would like to calculate <span className="bold-text">Change in Price MOM</span>
      </p>
      <img src={image1} className="imageClass" />
      <br />
      <p>
      I can retrieve the current month sales : <span className="bold-text">RowValue('Price')</span>
      </p>
      <p>
      I can also retrieve the previous month sales :<span className="bold-text">RowValue('Price',-1)</span>
      </p>
      <p>
      This way, I can build a formula in the data bindings
      </p>
      <p>
        <span className="bold-text">if( IsEmpty(RowValue('Sales', -1) ) , Nothing(),  (RowValue('Sales')  - RowValue('Sales', -1)) / RowValue('Sales', -1)  *100)</span>
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
        Result :
      </p>
      <img src={image3} className="imageClass" />
      <p>
      You can go ahead and apply conditional formatting option on the column in order to highlight the increase/decrease in sales over time. 

      You can apply the same formulas  for the Simple table also. 
      </p>
      

      
    </div>
  );
};
