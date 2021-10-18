import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";

export const RadarChart = () => {
  return (
    <div className="RadarChart">
      <h1 className="padding-Top">Radar Chart</h1>
      <p>
      The Polar chart, also known as Radar or SpiderWeb chart is useful to compare multiple items across the same characteristics.  They are great for comparisons of 10 or less series and ideal for quality improvement analysis, strengths and weaknesses, and skill assessments.
      </p>
      <br />
      <p>
      In order to build a Polar chart, you have to drag and drop the widget into the dashboard work space area. 
      <br />
      A new window will appear that allows you to customize the chart's properties. 
      <br />
      <li>
        Properties
      </li>
      In this section you can name the chart, set up a style and choose the colors of the plot.  
      Once you have locked the position of the chart, you will not be able to move the widget in the dashboard area, unless you disable the option again. 
      </p>
      <br />
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
        <li>
          Data
        </li>
        <br />
        If you choose this option, click on Data tab and link your Radar chart with an already imported data source. Click on the <span className="bold-text">Select A Datasource </span>search bar and select your data set. All the columns are added in the left end side of the screen. 
        The red buttons on the right end side of the search bar allow you to filter them to show only the measures, the time columns or the dimensions.
      </p>
      <br />
      <img src={image2} className="imageClass" />
      
    </div>
  );
};
