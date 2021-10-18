import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";

export const DataForms = () => {
  return (
    <div className="DataForms">
      <h1 className="padding-Top">Data Form</h1>
      <p>
      The Data Form widget enables dashboard users to edit data from any datasets stored in your ciPARTHENON account in different ways : users can view, edit, delete or create rows through this widget. 
      <br />
      To create a Data Form widget, drag and drop the widget's icon from the widgets catalogue to the dashboard area.

      A new window will appear that allows you to customize the widget.
      <br />
      <li>
        <span className="bold-text">Properties</span>
        <br />
      </li>
      In this section, as for all widgets, you can name the widget, set up a style, set the visibility, add a CSS class, and lock the position and size of your widget. Once you lock the position, you will not be able to move the widget in the dashboard area, unless you disable the option again.
      </p>
      <br />
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <br />
      <p>
      This is also where you can enable the various editing options :
      <li>
        Previous & Next buttons
      </li>
      <li>
        Edit
      </li>
      <li>
        New
      </li>
      <li>
        Delete
      </li>
      <br />
      <br />
      <li>
        <span className="bold-text">Data</span>
      </li>
      <br />
      Choose the dataset to use with this widget. Click on 'Select a Datasource' in the search bar and choose your dataset. All the available columns will then populate automatically underneath.
      <br />      
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
      Now drag and drop the wished columns into the Fields area. You can then choose how you want your column to be displayed : as a text field, a date field, a dropdown, etc.

      The preview of the table is available on the right end side of your screen, and will be updated automatically with each change you make.
      <br />
      <br />
      <li>
        <span className="bold-text">Sort & Filter</span>
      </li>
      <br />
      You can further organize your data by setting up how columns are sorted and by applying filters to various columns of the underlying data. Click on ‘Add Filter’ button and select the column you want to apply the filter on.
      <br />
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
      You can select your filter based on Data, Formula, Input widget, User parameters or Team Parameters.
      <br />
      <br />
      <p>1.Data based filters will allow you to choose between the values included in the selected column.</p>
      <p>2.Input Widget based filters allows you to link the filters (lists) included in your dashboard to your simple table.</p>
      <p>3.Formula Editor based filter lets you write your own syntax (which you can do by clicking on the 'f(x)' button).</p>
      <p>4.User Parameters / Team Parameters based filters allows you to use previous set-up user defined parameters and restrict the view of the users. </p>
      <br />
      <br />
      </p>
      <p>
        <li>
          <span className="bold-text">Validations & Default</span>
        </li>
        <br />
        Here you can set default values, validation rules and default display when loading the widget.
      </p>
      <img src={image4} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Style & Format</span>
        </li>
        <br />
        In this section you can change the layout and display of all features of the widget, such as
        <br />
        <li>
        Vertical or Horizontal layout
        </li>
        <li>
        Number of columns
        </li>
        <li>
        Background display
        </li>
        <li>
        Header display
        </li>
        <li>
        Labels font, alignment, title
        </li>
        <li>
        Fields width and format
        </li>
        <li>
        Buttons design
        </li>
      </p>
      <br />
      <img src={image5} className="imageClass" />
      <p>Editing in any way will update the data immediately with the changes.</p>
      <br />

      
    </div>
  );
};
