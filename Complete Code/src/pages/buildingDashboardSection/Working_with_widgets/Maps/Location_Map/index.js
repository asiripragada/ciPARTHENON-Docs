import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";
import image7 from "./images/Picture7.PNG";
import image8 from "./images/Picture8.PNG";
import image9 from "./images/Picture9.PNG";
import image10 from "./images/Picture10.PNG";
import image11 from "./images/Picture11.PNG";
import image12 from "./images/Picture12.png";
import image13 from "./images/Picture13.PNG";
import image14 from "./images/Picture14.PNG";

export const LocationMap = () => {
  return (
    <div className="LocationMap">
      <h1 className="padding-Top">LocationMap</h1>
      <p>
      The <span className="bold-text">Location Map</span> allows the user to have an exact visualization of places. For example, if sales were done in a specific area (Address, City, Post Code). If data is available for these specific places, the user can visualize them. This widget also allows for the use of latitude and longitude data.
      </p>
      <p>
        <li>
          <span className="bold-text">Properties</span>
        </li>
        In this section, you can name your Location Map and set up a style. Once you lock the position, you will not be able to move the widget in the dashboard area, unless you disable the option again.
      </p>
       <img src={image1} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Data</span>
        </li>
        The first step to use this widget is to drag and drop the Location Map into the dashboard. A screen will appear with the <span className="bold-text">Properties</span>
      </p>
      <img src={image2} className="imageClass" />
      <br />
      <p>
      Here you can add the data from the dataset, you can choose the <span className="bold-text">Geography</span> and the <span className="bold-text">Values</span>
      </p>
      <p>
        In the <span className="bold-text">Geography</span> you can select: <span className="bold-text">Latitude, Longitude, Address, Street, State, City, Zip/Postal Code and Country.</span>
      </p>
      <p>
        <li>
          <span className="bold-text">Custom Data </span>
        </li>
        If users prefer to input the data manually, they can choose the <span className="bold-text">Custom Data </span>option. In the data tab, users can add a <span className="bold-text">Label</span>(City for example) <span className="bold-text">, Latitude and Longitude </span>data along with their respective values.
      </p>
      <img src={image3} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Sort & Filter</span>
        </li>
        In the <span className="bold-text">Sort & Filter</span> Tab you can display the <span className="bold-text">Top/Bottom </span>for specific values or filter data based on specific requirements (for example a drop down widget or based on data)
      </p>
      <img src={image4} className="imageClass" />
      <img src={image5} className="imageClass" />
      <br/>
      <p>
        <li>
          <span className="bold-text">Style & Format</span>
        </li>
        The user can also format the widget. In the format tab, the user can change the <span className="bold-text">title </span>and the <span className="bold-text">background </span>of the widget.
      </p>
      <img src={image6} className="imageClass" />
      <br />
      <p>
      As default, the widget displays as a <span className="bold-text">Map</span>, alternatively it can also display the view as a <span className="bold-text">Satellite</span>
      </p>
      <img src={image7} className="imageClass" />
      <br />
      <p>
      To allow more interactivity, the <span className="bold-text">Position and Zoom </span>tab will allow different interactions such as <span className="bold-text">manual zoom or allow mouse wheel zoom. </span>
      </p>
      <img src={image8} className="imageClass" />
      <br />
      <p>
      The markers that are shown on the map can be changed along with the colors, there are more than 70 different markers. Using conditional formatting allows to have different markers based on certain conditions.
      </p>
      <img src={image9} className="imageClass" />
      <br />
      <p>
        <span className="bold-text">Style,</span>, allows users to further customize their Location Map in terms of Style and Features by using JSON style. 
      </p>
      <img src={image10} className="imageClass" />
      <br/>
      <p>
        The final tab, <span className="bold-text">Tooltip</span> adds interaction and displays data when hovering the mouse. The data displayed on the tooltip can be customized and can be used to show your data through macros.
      </p>
      <p>
      The macros that can be used on the location map widget are as follows:
      </p>
      <p>
        <li><span className="bold-text">this.geography -</span> On hover displays all of the the geography data of the region</li> On hover displays all of the the geography data of the region
        <li><span className="bold-text">this.values[index] -</span> On hover displays the value for the region with the index of the values starting at 0 </li>
        <li><span className="bold-text">this.geographies[index] -</span>  - On hover displays the the geography data of the region by index </li>
      </p>
      <img src={image11} className="imageClass" />
      <br/>
      <p>
      How the tool tip is displayed
      </p>
      <img src={image12} className="imageClass" />
      <br/>
      <p>
      The index used in the macros are determined under the data tab of the widget.
      </p>
      <img src={image13} className="imageClass" />
      <br/>
      <p>
        <li>
          <span className="bold-text">interactions</span>
        </li>
        The interaction section allows you to choose the action which will be performed when you click on the map. You can display a new dashboard or navigate to a URL in a new tab.
      </p>
      <img src={image14} className="imageClass" />
      <br/>
      <p>

      </p>

      
    </div>
  );
};
