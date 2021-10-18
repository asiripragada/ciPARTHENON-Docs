import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";

export const WorkingwithFormulas = () => {
  return (
    <div className="WorkingwithFormulas">
      <h1 className="padding-Top">Working with Formulas</h1>
      <p>
      In ciPARTHENON you have the possibility of creating widgets using Formulas. They use our ciPARTHENON language, very close to SQL.
      <br />
      The Formula Editor is available in various use cases, such as:
      <br />      
      </p>
      <p>
        <li>
        Widgets in various scenarios, such as display (see our example below), targets, calculated values, thresholds, etc.
        </li>
        <li>
        Widget And Dashboard filters
        </li>
        <li>
          <span className="bold-text">Alerts</span>
        </li>
        <li>
          <span className="bold-text">Data queries</span>
        </li>
      </p>
      <p>
        Using the <span className="bold-text">Formulas Editor </span>gives you the freedom to combine multiple scenarios to be displayed on your dashboard.

        Simply click the 'F(x)' icon to access the editor.
        <br />
        How to use a formula in a Number indicator
        <br />
        Go to the widget's <span className="bold-text">properties </span>and instead of choosing Data, choose <span className="bold-text">Formula</span>.
      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
        In the <span className="bold-text">Data </span>tab, you need to build the formula by clicking on F(x).
        A new window will appear containing the <span className="bold-text">Formula Editor. </span>
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Widget properties</span>
        </li>
        With the formula editor you have the capability of using elements included in your dashboard and link them to any of your widgets.
        Click on <span className="bold-text">Widgets </span>and you will get the following widget properties.
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
        Click on <span className="bold-text">Functions </span>and you will find the list of available functions split into categories. These are ciPARTHENON built in functions. Once you choose a Category and a Formula, click on the i button to discover its syntax.
        <br />
        Click the '+' button to add the formula to the editor and adapt as needed it to display the wished data.
        <br />
        <img src={image4} className="imageClass" />
      </p>
      <br />


      
    </div>
  );
};
