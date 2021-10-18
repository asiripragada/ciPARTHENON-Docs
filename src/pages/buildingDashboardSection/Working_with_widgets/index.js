import React from "react";
import image1 from "./images/Picture1.PNG";
import { useHistory } from "react-router-dom";

export const WorkingWithWidgets = () => {
  let history = useHistory();

  return (
    <div className="mainPage">
      <h1 className="padding-Top padding-bottom">Working with widgets</h1>
      
      <p>
      The widgets are all the graphical elements you can add into your dashboard. They are classified by categories and you can find them in the left hand side of the screen. 
      <br />
      Some of them provide specific ways for a user to interact with the dashboard. Widgets include annotations, charts, date charts, date selectors, diagrams, gauges, indicators, infographics, inputs, lists, maps, media, multi charts, sliders/knobs, social, special charts, tables, text.
     </p>
     <br />
     <img src={image1} className ="image class" />
     <br />
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Action")}
          >
            Action
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/WebHTMLPlaceholder")}
          >
            Web HTML Placeholder
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/DataForm")}
          >
            DataForm
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Annotations")}
          >
            Annotations
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Charts")}
          >
            Charts
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/DateCharts")}
          >
            Date Charts
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/DateSelectors")}
          >
            Date Selectors
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Guages")}
          >
            Guages
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Indicators")}
          >
            Indicators
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Inputs")}
          >
            Inputs
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Lists")}
          >
            Lists
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Maps")}
          >
            Maps
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Media")}
          >
            Media
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Slider/Knobs")}
          >
            Slider/Knobs
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Social")}
          >
            Social
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/SpecialChart")}
          >
            Special Chart
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Tables")}
          >
            Tables
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Text")}
          >
            Text
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/TrendLines")}
          >
            Trend Lines
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/QuickProperties")}
          >
            Quick Properties
          </span>
        </li>
      </div>
    </div>
  );
};