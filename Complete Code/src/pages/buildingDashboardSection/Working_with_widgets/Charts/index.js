import React from "react";
import { useHistory } from "react-router";
import image1 from "./images/Picture1.PNG";

export const Charts = () => {
  let history = useHistory();
  return (
    <div className="mainPage">
      <h1 className="padding-Top">Charts</h1>
      <br />
      <p>
      The charts allow you to graphically represent numerical or qualitative data by using bars, lines, or slices.
      You should use the charts when you want to present the overall shape of data or when you need to track the similarities or differences between different data sets.. </p>
      <br/>
      <img src={image1} className="imageClass" />
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/AreaChart")}
          >
            Area Chart
          </span>
        </li>
        
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/CandlestickChart")}
          >
            Candlestick Chart
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/BubbleChart")}
          >
            Bubble Chart
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/BarChart")}
          >
            Bar Chart
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/ColumnChart")}
          >
            Column Chart
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/LineChart")}
          >
            Line Chart
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/PieChart")}
          >
            Pie Chart
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/ScatterChart")}
          >
            Scatter Chart
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/RaderChart")}
          >
            Rader Chart
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/GanttChart")}
          >
            Gantt Chart
          </span>
        </li>
      </div>


      
    </div>
  );
};
