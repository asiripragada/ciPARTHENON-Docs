import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";
import image7 from "./images/Picture7.PNG";
import image8 from "./images/Picture8.PNG";

export const LogicalFunctions = () => {
  return (
    <div className="LogicalFunctions">
      <h1 className="padding-Top">Logical Functions</h1>
      <p>
      The logical functions allows you to return logical statements, based on predefined functions, currently there are 7:<span className="bold-text"> "If", "IfError", "IfNull", "IsEmpty", "IsEmptySpace", "IsNull", "Not", "Nothing"</span> </p>

      <p>
        <li><span className="bold-text">if</span> is a function that allows the user to create conditions, for example if  2 is Less than 3, then if it is true, it returns the second parameter, otherwise the last parameter if false. In this example it will return true.</li>
      </p>
      <img src={image1} className="imageClass" />
      <br />
      <p>
      <li><span className="bold-text">ifError</span> When using dynamic formulas, there may be cases where the end result is an error. Using the IfError function will force a value (e.g. NULL, Number, String) in these cases until the criteria is satisfied.</li> 
      </p>
      <img src={image2} className="imageClass" />
      <br />
      <p>
      <li><span className="bold-text">ifNull</span> If a value is NULL it will display the value specified in the second parameter instead. </li> 
      </p>
      <img src={image3} className="imageClass" />
      <br />
      <p>
      <li><span className="bold-text">isEmpty</span> Returns true if the value is empty (strings only) otherwise returns false </li> 
      </p>
      <img src={image4} className="imageClass" />
      <br />
      <p>
      <li><span className="bold-text">isEmptySpace</span> Returns true if the value is empty or just spaces (strings only) otherwise returns false
 </li> 
      </p>
      <img src={image5} className="imageClass" />
      <br />
      <p>
      <li><span className="bold-text">isNull</span> It returns TRUE if the specified value is NULL. 
 </li> 
      </p>
      <img src={image6} className="imageClass" />
      <br />
      <p>
      <li><span className="bold-text">Not</span>  Negates whatever value or expression is passed as a parameter. 
 </li> 
      </p>
      <img src={image7} className="imageClass" />
      <br />
      <p>
      <li><span className="bold-text">Nothing</span>  Returns the equivalent of no selection or null. Useful to return a widget to an unselected state. 
 </li> 
      </p>
      <img src={image8} className="imageClass" />
      <br />
    </div>
  );
};
