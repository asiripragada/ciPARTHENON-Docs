import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";

export const SocialSharing = () => {
  return (
    <div className="SocialSharing">
      <h1 className="padding-Top">Social Sharing</h1>
      <p>
      Placing a Social Sharing widget on a dashboard,allows you or your customers to easily share the dashboards they have created within their social networks.
      </p>
      <p>
      In order to add a Social Sharing widget to your dashboard use the <span className="bold-text">Social Sharing</span> widget included in the <span className="bold-text">Social </span>Category. Drag and drop it onto the dashboard work space area and a new window will appear where you can edit the properties.
      </p>
      <p>
        <li>
          <span className="bold-text">Properties</span>
        </li>
        In this section you can name the widget, set up a style and lock the position of  the widget.  
        Once you have locked the position, you will not be able to move the widget in the dashboard area, unless you disable the option again. 
        You can quickly change the type of  Layout by selecting from the drop-down either Horizontal or Vertical . You can also chose the button type either custom or official.
      </p>
      <img src={image1} className="imageClass" />
      <br />
      <p>
       <li>
         <span className="bold-text">Data</span>
      </li> 
      In this Section you could enable or disable the social buttons that you need to display in the dashboard.
      You could rearrange the order of the buttons by dragging it up and down.
      </p>
      <p>
      A preview of the widget is available on the right end side of your screen which displays the changes made real time.
      </p>
     <img src={image2} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Format</span>
        </li>
        In the Format section you can format the background of the widget, fonts of the text as well as the buttons. 
      </p>
      <img src={image3} className="imageClass" />
      <br/>
      <p>
      Once you have made all the changes in the social sharing widget you need to enable the live link of the dashboard in the dashboard properties to be able to share it.
      </p>
      <p>
      To enable the live link go to the dashboard properties by selecting the icon in the top right corner of the screen.
      The Live Link is an easy way to share the dashboard. Depending on the security permissions, the user can open the dashboard into a browser tab and access the dashboard in an interactive way..
      </p>
      <p>
      You have 4 types of permissions you need to choose from in order to share the dashboard in a secure way:
      </p>
      <p>
        <li>Private: Only the owner of the dashboard and the people in the security list have access to the link</li>
        <li>Public: Anyone can access the link </li>
        <li>Password: Anyone can access the link, but they will be asked for a password. </li>
        <li>Team: Only the people from the selected team can access the dashboard.</li>
      </p>
      <img src={image4} className="imageClass" />
      <br/>
      <p>
      Once you have  saved  all the settings, when you double click any social button, a small popup appears prompting you to enter your custom message, sharing options etc. Once you have logged in the social network you will be able to share the dashboard. 
      The message will contain the live link of the dashboard so that others can easily click and view the dashboard. Click on the Publish button and the content is instantly shared with all of your social followers.
      </p>
      <img src={image5} className="imageClass" />
      
      <p className="bold-text center Allign">Happy Dashboarding </p>

      
    </div>
  );
};
