import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.gif";
import image4 from "./images/Picture4.gif";

export const DashboardFunctions = () => {
  return (
    <div className="DashboardFunctions">
      <h1 className="padding-Top">Dashboard Functions</h1>
      <p>
      In the <span className="bold-text">Dashboard Functions </span>section you have a couple of options to retrieve information for your dashboard. It can be a last updated date, how many users accessed the dashboard or you can get the value for your dashboard parameter. You can also get information related to each widget in the dashboard. 
      <br/>
      <li>
        <span className="Bold-text">DashboardInfo </span>
      </li>
      For example, if you have a dashboard named "Sales" and you want to know which version the Dashboard is, you can use the function <span className="bold-text">DashboardInfo( 'Sales', 'Version' ).</span>
      The resulting number will be the version of the dashboard.
      Alternatively if you want to know the creation date of your dashboard, <span className="bold-text">DashboardInfo( 'Sales', 'CreateDate' ) </span>will provide the result.
      </p>
      <br />
      <img src={image1} className="imageClass" />
      <p>
       <span className="bold-text">Property:</span> 
       <span className="italic">AccessCount - </span>Number of times dashboard has been accessed.
       <span className="italic">LiveLinkAccessCount - </span>Number of times dashboard live link has been accessed.
       <span className="italic">CreatedDate - </span>Creation dote of the dashboard.
       <span className="italic">PrintDate - </span>Number of time the dashboard has been printed.
       <span className="italic">Owner - </span>Owner of the Dashboard.
       <span className="italic">LastAccessDate - </span>Last date the dashboard was accessed
       <span className="italic">ExportCount - </span>Number of times the dashboard has been exported.
       <span className="italic">Description - </span>Description of the Dashboard
       <span className="italic">Version - </span>Version of the Dashboard
       <br />
       <br/>
       <li>
         <span className="bold-text">Widget</span>
       </li>
       Each widget in ciPARTHENON has an a couple of attribute attached to it that can be retrieved using formulas. 
       If you have for example a Drop down widget, you can retrieve various attributes.
       If you have 7 values, the formula <span className="bold-text">widget('dropdown', 'Count') </span>will return 7.
       With the option <span className="bold-text">"Selected Values"</span> , it will allow to display the current selected values in an array. 
       You should use <span className="bold-text">"Selected Value"</span> attribute for single selection list and <span className="bold-text">"Selected Values"</span> attribute for multiple-selection lists. 
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
      You can perform calculations between 2 or more widgets. For example, you can retrieve the value of a number indicator and use it in another widget.
      </p>
      <br/>
      <img src={image3} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">DashboardFormulas</span>
        </li>
        You can define formulas at the dashboard level and use them for filter your widget. 

        There are advantages of using dashboard formulas from a performance point of view. 

        ciPARTHENON evaluate the formula once and uses the results to filter the widget. 

        Also, imagine the below example: 
      </p>
      <br/>
      <img src={image4} className="imageClass" />
      <br />
      <p>
      You have a DashboardFormula which gives you a Country name. You filter all the widgets in the dashboard using the general parameter. You send the dashboard to the manager for France. The manager for Italy needs a similar report, so instead of building a new dashboard from scratch, you just need to duplicate the dashboard and change the value of your Dashboard Formula.
      </p>
      <br />
      <p>
        <li>
          <span className="bold-text">DashboardParameter</span>
        </li>
        The dashboard parameter function helps you to transfer selected values from one dashboard to another. 
      </p>
      
      
    </div>
  );
};
