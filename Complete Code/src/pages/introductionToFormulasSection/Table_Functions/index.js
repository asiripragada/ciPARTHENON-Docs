import React from "react";
import { useHistory } from "react-router-dom";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";

export const TableFunctions = () => {
  let history = useHistory();
  return (
    <div className="mainPage">
      <h1 className="padding-Top">Table Functions</h1>
      <p>
      When you have a simple table/drilldown table in your dashboard, you have the possibility of adding calculated columns in the table.  We call them contextual column because they at at the widget level and they are dynamic. 
      </p>
      <p>
      They help you building new KPIs that will be dynamically changed once you add filters to your dashboard. 
      </p>

      <p>
        
      For this, you can choose from the following three functions: <span className="bold-text">"RowGroup", "RowTotal", "RowValue".
      </span>
      </p>

      <img src={image1} className="imageClass" />
      <br />
      <p>
      Each of these functions allow you to perform different operations.
      </p>
      <p>
        <li>
          <span className="bold-text">RowGroup </span>will aggregate the values based on another column. The formula is similar with the GroupBy from SQL. 
        </li>
      </p>
      <p>
      For example,<span className="bold-text">RowGroup("Price", "Country", "sum")</span> will return the Sum of Sales for each Country.
      </p>
      <img src={image2} className="imageClass" />
      <br/>
      <p>
      <li>
          <span className="bold-text">RowTotal </span>will return the aggregate values for the specified column.
        </li>
      </p>
      <p>
      For example,<span className="bold-text">RowTotal("Price", "sum")</span> will return the Sum of values for the entire column.
      </p>
      <img src={image3} className="imageClass" />
      <br/>
      <p>
      <li>
          <span className="bold-text">RowValue </span>will return the value of a row for specified column. 
        </li>
      </p>
      <p>
      For example,<span className="bold-text">RowValue("Price")</span> we refer the values by row for the Sales column.
      </p>
      <img src={image4} className="imageClass" />
      <br/>
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
      <li>
          <span
            className="pageLink"
            onClick={() => history.push("/TableFunctionsExample1")}
          >
            Table Functions Example-1
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/TableFunctionsExample2")}
          >
            Table Functions Example-2
          </span>
        </li>
        </div>
    </div>
  );
};
