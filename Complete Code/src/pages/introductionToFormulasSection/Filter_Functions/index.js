import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";

export const FilterFunctions = () => {
  return (
    <div className="FilterFunctions">
      <h1 className="padding-Top">Filter Functions</h1>
      <p>
      The Filter functions allow you to retrieve information about the filters you have used in dashboards. These formulas will return a text output of what the selected filter's actions are.
      </p>
      <p>
        <li>
          <span className="bold-text">DashboardFilter() </span>returns the filter used in the specified dashboard filter.
        </li>
        <li>
          Syantax : <span className="bold-text"> DashboardFilter(name) </span>
        </li>
      </p>      
    <p><span className="bold-text , italic">Example </span></p>
    <p><span className="bold-text , italic">DashboardFilter('Filter #1') returns ([Country] IN ('France')) </span></p>
    
      
      <img src={image1} className="imageClass" />
      <br />
      <p>
        <li>
      <span className="bold-text">WidgetFilter() </span>Returns the filter used in the specified widget.
      </li>
      <li>
      Syantax : <span className="bold-text"> WidgetFilter(name) </span>
      </li>
      </p>
      <p><span className="bold-text italic">Example </span></p>
      <p><span className="bold-text , italic">DashboardFilter('Bar Chart #1') returns ([Year] IN ('2020')) </span>
      </p>

      <img src={image2} className="imageClass" />
      <br />
      <p>
        <p><span className="bold-text">Use Cases </span></p>
        Both these functions does not do much on their own but are super useful in combination with a powerful formula-<span className="bold-text">DataAggregate</span>.
        <br/>
        By embedding the formula in DataAggregate() like below, the filter formulas acts as the Filter for the calculation performed and refer to the dataset used.
      </p>
      <br/>
      <p>
        <li>
          <span className="bold-text">DataAggregate(‘Dataset Name’, ‘Column Name’, ‘Aggregation’, DashboardFilter(Name))</span>
        </li>
        <li>
          <span className="bold-text">DataAggregate(‘Dataset Name’, ‘Column Name’, ‘Aggregation’, WidgetFilter(Name))</span>
        </li>
      </p>
      
      <p>
      These two formula combinations are best used as a display for the Indicator widgets, where a single value is displayed.
      <br />
      Example of a combination with extra filters :
      <br />
      <li>
      <span className="bold-text">DataAggregate(‘Dataset Name’, ‘Column Name’, ‘Aggregation’, WidgetFilter(Name) + 'and [Country] = "France" ')</span>
      </li>

      </p>
    </div>
  );
};
