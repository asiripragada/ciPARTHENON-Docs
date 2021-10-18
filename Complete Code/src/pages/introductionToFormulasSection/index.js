import React from "react";
import { useHistory } from "react-router-dom";

export const IntroductionToFormulas = () => {
  let history = useHistory();

  return (
    <div className="mainPage">
      <h1 className="padding-Top padding-bottom">Introduction To Formulas</h1>
      <p>
      In ciPARTHENON, there are times where you need to write formulas in order to achieve the result you need. You can write many different formulas, depending on how you want to implement them and the result you need.
      <br />
      <span className="bold-text">On Data Side - </span>You need to write formulas on the data side if you want to calculate a new KPIs, add a mapping for your data values. The formulas need to be written in the <span className="bold-text">Data Transformation </span>section in order to add a new <span className="bold-text">Calculated Column </span>or <span className="bold-text">Update </span>an Existing column.
      <br />
      Regarding the syntax for formulas, the language we use is <span className="bold-text">Transact SQL </span>Once a module activates, simply click on Q(x) to access the query editor where you can refer to the syntax along with a couple of examples. Here are some examples where we create a <span className="bold-text">Mapping </span> or a <span className="bold-text">New Indicator </span>at the row level.
      </p>
      <br />
      <p>
        <span className="bold-text">On the Dashboard Side - </span>In order to write formulas in the dashboard/widgets section, you need to use Formula Editor. Simply click on F(x) to find all the formulas that you can use within the dashboard editor. It is important to note that any filter must be passed on through the last parameter. If filters are applied through the <span className="bold-text">Sort & Filter </span>tab instead, the <span className="bold-text">Data Aggregate </span>functions will be effected.
        <br />
        The formulas can be split into two categories:
        <br />
      </p>
      <p><span className="bold-text">Data Formulas - </span>These formulas go back to the data and extract the information based on a condition that you can pass as the last parameter.</p>
      <br />
      <br />
      <p><span className="bold-text">Contextual Formulas - </span>These formulas extract the information from a specific cell/point in the widget. You can use contextual formulas in charts and tables (e.g. Simple table and Drilldown table). The filters applied in Sort & Filter area affect the result, you do not need to input special filters in the syntax as we have previously seen before.
      </p>
      <br />
      <br />
      <p><span className="bold-text">Other Formulas - </span>Date & Time, String, Logical, Mathematical, Array which help you manipulate the extracted values (e.g. numeric, dates, etc.) to arrive to the desired result.</p>
      <br />
      <p><span className="bold-text">Widget Properties Formulas - </span> All widgets in ciPARTHENON have properties attached to them that we can use in order to link them to any of your widgets.
      <br />
      Go to F(x) – Widgets to see all the widgets you have added in your dashboard. Every widget has access to certain formulas.
      </p>
      <p><span className="bold-text">Happy Dashboarding!</span></p>

      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
      <li>
          <span
            className="pageLink"
            onClick={() => history.push("/WorkingWithFunctions")}
          >
            Working with Functions
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/DashboardFunctions")}
          >
            Dashboard Functions
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/DataFunctions")}
          >
            Data Functions
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/ParametersFunctions")}
          >
            Parameters Functions
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/MathematicalFunctions")}
          >
            Mathematical Functions
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/StringFunctions")}
          >
            String Functions
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Date&TimeFunctions")}
          >
            Date & Time Functions
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/ArreyFunctions")}
          >
            Arrey Functions
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/LogicalFunctions")}
          >
            Logical Functions
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/TableFunctions")}
          >
            Table Functions
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/chartFunctions")}
          >
            Chart Functions
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/FilterFunctions")}
          >
            Filter Functions
          </span>
        </li>
      </div>
    </div>
  );
};
