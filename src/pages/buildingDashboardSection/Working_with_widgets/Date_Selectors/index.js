import React from "react";
import { useHistory } from "react-router-dom";
import image1 from "./images/Picture1.PNG";

export const DateSelectors = () => {
  let history = useHistory();
  return (
    <div className="mainPage">
      <h1 className="padding-Top">Date Selectors</h1>
      <br />
      <p>
      The date selectors allow you to filter your widgets. The users will be able to select dates within a period or on a calendar dropdown.
      </p>
      <br />
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <br />
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/CalenderDropdown")}
          >
            Calender Dropdown
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/DateRangePicker")}
          >
            Date Range Picker
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/PeriodDropdown")}
          >
            Period Dropdown
          </span>
        </li>
      </div>
    </div>
  );
};
