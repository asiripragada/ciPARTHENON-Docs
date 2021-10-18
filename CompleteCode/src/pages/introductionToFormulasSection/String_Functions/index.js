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
import image12 from "./images/Picture12.PNG";
import image13 from "./images/Picture13.PNG";
import image14 from "./images/Picture14.PNG";
export const StringFunctions = () => {
  return (
    <div className="StringFunctions">
      <h1 className="padding-Top">String Functions</h1>
      <p>
      ciPARTHENON allows the user to work with strings, performing operations like: <span className="bold-text">"Concat", "Contains", "EndsWith", "FindText", "Left", "Length", "LetterCase", "Lower", "Middle", "Replace", "Right", "StartsWith", "SubString", "Upper".</span></p>
      <p>
        <li>
          <span className="bold-text">Concat</span> is a function that allows the user to concatenate words. For example if you wish to concatenate the name "ci" and "PARTHENON" you can use Concat ('ci', 'PARTHENON'  ) which will give ciPARTHENON.
        </li>
      </p>
      <img src={image1} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Contains</span> returns true if the search value is found anywhere in the passed value. The function  is case sensitive. Contains ( 'Starcraft', 'arc') will return true.
        </li>
      </p>
      <img src={image2} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">EndsWidth</span> The function will search values at the end of the passed value . EndsWith ( 'Starcraft', 'craft') will return true. 

        </li>
      </p>
      <img src={image3} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">FindText</span> returns the character position (starting at 0) of the search text in the value. If the exact match parameter is true, then the string must match exactly (upper and lower case). (exact match) is true by default. If string is not found it returns -1. FindText('Can you find me','You', false) returns 4.
        </li>
      </p>
      <img src={image4} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Left</span>  returns the left characters from the passed value. Left('Testing String', 4) returns 'Test'.

        </li>
      </p>
      <img src={image5} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Length</span> returns the length of the string. Length ('House') will return 5.
        </li>
      </p>
      <img src={image6} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">LetterCase</span> changes all characters in the value string to UPPER, lower, or Proper case. These are the options "Upper", "Lower" and "Proper". LetterCase('JOHN SMITH','proper') returns 'John Smith'.
        </li>
      </p>
      <img src={image7} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">LowerFunction</span> changes all characters in the value string to lowercase. Lower('Test One Two') will return test one two.
        </li>
      </p>
      <img src={image8} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Middle</span> returns the characters from the value from a start position within the string and for as many characters as specified in the length parameter. Middle('Testing One Two', 9, 3) returns 'One'.
        </li>
      </p>
      <img src={image9} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Replace</span> - Replaces all occurrences of a specified string value with another string value. Example: REPLACE('Hello there', 'Hello', 'Hi') returns 'Hi there'
        </li>
      </p>
      <img src={image10} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Right</span> returns the rightmost characters from the passed value. Right('Testing String', 4) returns 'ring'.

        </li>
      </p>
      <img src={image11} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">StartsWith</span> returns true if the search value is found at the beginning of the passed value. It is case sensitive. StartsWith ( 'Starcraft', 'Star') returns true. 
        </li>
      </p>
      <img src={image12} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">SubString</span> returns the characters from the value from a start position until the end position inclusive. Substring('Testing One Two', 9, 11) returns 'One'.
        </li>
      </p>
      <img src={image13} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Upper</span> changes all characters in the value string to UPPER case. LetterCase('Test One Two','upper') returns 'TEST ONE TWO'.
        </li>
      </p>
      <img src={image14} className="imageClass" />
      <br />

      
    </div>
  );
};
