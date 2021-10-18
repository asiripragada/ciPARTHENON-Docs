import React from "react";

export const ParametersFunctions = () => {
  return (
    <div className="ParametersFunctions">
      <h1 className="padding-Top">Parameter Functions</h1>
      <p>
        The <span className="bold-text">Parameter </span>Functions  help the owner of a dashboard to share the reports with users with different views.

        You can have parameter functions for a <span className="bold-text">User , team and account </span>
      </p>
      <br />
      <p>
        <li>
          <span className="bold-text">TeamParameter</span>
        </li>
        <br/>
        Returns the value for the provided team parameter.

        If the parameter not found then (optionally) uses default value specified otherwise returns nothing.
      </p>
      <br />
      <p>
        <span className="bold-text , italic">Examples:</span>
        TeamParameter('DepartmentCode')

        will return the string stored DepartmentCode defined in Team properties if that parameter exists, otherwise returns blank.

        TeamParameter('DepartmentCode', '0')

        will return the string stored DepartmentCode defined in Team properties if that parameter exists, otherwise returns 0.
      </p>
      <br />
      <p>
        <li>
          <span className="bold-text">UserParameter</span>
        </li>
        <br />
        <span className="bold-text">Syntax: UserParameter(name [,default])</span>
        <br />
        Returns the value for the provided user parameter.

      If parameter not found then (optionally) uses default value specified otherwise returns nothing.
      </p>
      <br />
      <p>
      <span className="bold-text , italic">Examples:</span>
      UserParameter('EmployeeId')

      will return the string stored in EmployeeId defined in User properties if that parameter exists, otherwise returns blank.

      UserParameter('EmployeeId', '0')

      will return the string stored in EmployeeId defined in User properties if that parameter exists, otherwise returns 0.
      </p>
      <br />
      <p>
      <span className="bold-text">AccountParameter</span>
      <br />
      <span className="bold-text">Syntax: AccountParameter(name [,default])</span>
      <br />
      Returns the value for the provided account parameter.

      If parameter not found then (optionally) uses default value specified otherwise returns nothing.
      </p>
      <br />
      <p>
      <span className="bold-text , italic">Examples:</span>
      AccountParameter('Name')

      will return the string stored in Name defined in Account global parameters if that parameter exists, otherwise returns blank.

      AccountParameter('Name', '0')

      will return the string stored in Name defined in Account global parameters if that parameter exists, otherwise returns 0.



      Account global parameters can be set in the Account settings.
      </p>
      
      
    </div>
  );
};
