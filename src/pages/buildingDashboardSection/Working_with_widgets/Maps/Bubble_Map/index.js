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

export const BubbleMap = () => {
  return (
    <div className="BubbleMap">
      <h1 className="padding-Top">Bubble Map</h1>
      <p>
        <li>
          <span className="bold-text">Properties</span>
        </li>
        In order to add data to your Bubble Map, you have to access the <span className="bold-text">Properties</span> of the widget.
      </p>
      <img src={image1} className="imageClass" />
      <br />
      <p>
        Select the <span className="bold-text">Country/Region </span>you need to represent from the Map drop down as shown in the picture:
      </p>
      <br/>
      <p>
        <li>
          <span className="bold-text">Data</span>
        </li>
        <p>1.Drop the data bindings in <span className="bold-text">Geography and Values</span></p>
        <p>2.Drop the field which contains the names of the regions in the <span className="bold-text">Geography </span>section for the map selected.</p>
        <p>Drop the field which contains the corresponding values in the <span className="bold-text">Values</span> section</p> 
      </p>
      <img src={image2} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Mapping</span>
        </li>
        Here you can see if all your data is matched to the regions in the map. This is done automatically and if you check the box at the bottom of the screen, you will see only the values which are unmatched.
      </p>
      <img src={image3} className="imageClass" />
      <br/>
      <p>
      You can add manually the countries which are not matched, by starting to type the name – a drop-down list will appear to help you selecting the correct one.
      </p>
      <p>
        <li>
          <span className="bold-text">Sort & Filter</span>
        </li>
        You can sort by top or bottom values and display only those regions
      </p>
      <img src={image4} className="imageClass" />
      <br />
      <p><span className="bold-text">You can also filter out unwanted values or regions in your data
     </span></p>
     <img src={image5} className="imageClass" />
     <br/>
     <p>
       <li>
         <span className="bold-text">Style & Format</span>
       </li>
       In the <span className="bold-text">Format</span> tab,you can format the <span className="bold-text">Labels,Legends</span> and <span className="bold-text">Colors </span>for the map.
     </p>
     <img src={image6} className="imageClass" />
     <br/>
     <p>
       <span className="bold-text">Tooltip</span> adds an on hover display that you can customize and use macros to display your data.
     </p>
     <img src={image7} className="imageClass" />
     <br/>
     <p>
       <span className="bold-text">Here is a list of the macros you can use in the tooltip.</span>
     </p>
     <p>
       <li><span className="bold-text">this.point.name - </span>On hover displays the name of the region</li>
       <li><span className="bold-text">this.point.value - </span>On hover displays the value of the region</li>
       <li><span className="bold-text">this.point.x - </span>On hover displays the index value for the region with the index starting at 0</li>
       <li><span className="bold-text">this.series.name - </span>On hover displays the series name</li>
       <li><span className="bold-text">this.series.valueMin - </span>On hover displays the minimum value</li>
       <li><span className="bold-text">this.series.valueMax - </span>On hover displays the maximum value</li>
       <li><span className="bold-text">this.points[index].name - </span>On hover displays name of the region by index</li>
       <li><span className="bold-text">this.points[index].value - </span>On hover displays value of the region by index</li>
       <li><span className="bold-text">this.points[index].x - </span>On hover displays the index value by Index</li>
     </p>
     <img src={image8} className="imageClass" />
     <p>
       <span className="bold-text">You can further customize how the tooltip values are displayed</span>
     </p>
     <img src={image9} className="imageClass" />
     <br/>
     <p>
       <li>
         <span className="bold-text">Interactions</span>
       </li>
       The interaction section allows you to choose the action which will be performed when you click on the map. You can display a new dashboard or navigate to a URL in a new tab. In addition, you can double click a section on the map to view the source data.
     </p>
     <img src={image10} className="imageClass" />
     <br/>
     
     

      
    </div>
  );
};
