import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";
import image7 from "./images/Picture7.PNG";
import image8 from "./images/Picture8.PNG";

export const AutoComplete = () => {
  return (
    <div className="AutoComplete">
      <h1 className="padding-Top">Auto-Complete</h1>
      <p>
      When you type the first letter or letters of a word, the Auto-Complete widget predicts one or more possible words to select from. The suggestions are based on the type of data linked to the <span className="bold-text">Auto-Complete </span>widget.
      <br />
      For example if you type 'Ch' for a country and the data linked to the widget contains the word China, then China would be displayed as one of the suggestions.. 
      <br />
      If you want to add the Auto-complete widget to your dashboard, drag and drop the widget from the Inputs category. A new window will appear allowing you to customize its properties. 
      <br />
      <li>Properties</li>
      In this section you can name and set up a style for the Widget.
      <br />
      Once you lock the position, you will not be able to move the widget in the dashboard area, unless you disable the option again.
      <br />
      You can select the type as: <span className="bold-text">Contains, Starts-with and Ends-with </span>to determine how the auto-complete will work. </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      
      <p>
      You could build the Auto-complete widget based on:
      <br />
      <p>
        <li>
          Data
        </li>
        <br />
        If you choose this option, click on the <span className="bold-text">Data </span>tab and link your auto-complete widget with an already imported data source.
        <br />
        Click on the <span className="bold-text">Select a Data source </span>search bar and select your data set. All the columns are added in the left side of the screen. The red buttons on the right side of the search bar allow you to filter them and only show the <span className="bold-text">measure, the timecolumn, </span>or the <span className="bold-text">Dimensions </span>
      </p>
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br/>
      <p>
      The next step is to drag and drop the columns into the <span className="bold-text">Labels</span> and <span className="bold-text">Values</span>
      <br/>
      Select a column for the <span className="bold-text">Labels</span> and and optionally, you can select another column as <span className="bold-text">Values</span>
      <br />
      A preview of the chart is available on the right end side of your screen:
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
        <li>
        <span className="bold-text">Custom Entries</span>
        </li>
        If you choose this option, once you move to the Data tab, you will have to type in the data. You will find our data editor quite similar to an Excel worksheet. Complete the labels to be shown in the auto-complete and optionally the values attached to them. In order to add a new row, you have to simply type the values on the empty line and you will see a new row will be added automatically.
      </p>
      <br />
      <img src={image4} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Sort & Filters</span>
        </li>
        In this section you can sort the entries in the list by activating the Sort Series / Values By button. Select the column you want to sort by and the desired order: ascending or descending.
      You can narrow down your data by applying filters. 
      <br />
      </p>
      <img src={image5} className="imageClass" />
      <p>
      If you want to filter the data shown in the auto-complete, click on <span className="bold-text">Add Filters</span> and select the column you want to apply the filter on. 
      <br />
      You can select your filter based on Data, Formula, Input widget, User parameters or Team parameters.
      If you choose <span className="bold-text">Data</span>, you can select between the values existent in the chosen column. 
      If you choose <span className="bold-text">Input Widget</span>,, you can link the filters (lists) existent in your dashboard to your chart.
      If you choose <span className="bold-text">Formula Editor,</span> you have to write the syntax by clicking on f(x).
      If you choose <span className="bold-text">User parameters/Team parameters,</span>you can choose your already defined parameters and restrict the view of the users.
      </p>
      <br />
      <img src={image6} className="imageClass" />
      <br />
      <p>
        <span className="bold-text">Format</span>
        <br />
        In this section, you can adjust the appearance of your list by selecting a <span className="bold-text">Background Color , font and format</span>
      </p>
      <br />
      <img src={image7} className="imageClass" />
      <br />
      <p>
        <span className="bold-text">Interactions</span>
        <br />
        The interaction section allows you to display the ToolTip of your widget when your mouse cursor is hovered over.
        <br />
        <img src={image8} className="imageClass" />
      </p>
      <br />
      

      
    </div>
  );
};
