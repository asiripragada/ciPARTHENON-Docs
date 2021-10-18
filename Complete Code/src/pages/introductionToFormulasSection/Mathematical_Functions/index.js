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
import image15 from "./images/Picture15.PNG";
import image16 from "./images/Picture16.PNG";
import image17 from "./images/Picture17.PNG";
import image18 from "./images/Picture18.PNG";
import image19 from "./images/Picture19.PNG";
import image20 from "./images/Picture20.PNG";
import image21 from "./images/Picture21.PNG";
import image22 from "./images/Picture22.PNG";
import image23 from "./images/Picture23.PNG";
import image24 from "./images/Picture24.PNG";
import image25 from "./images/Picture25.PNG";
import image26 from "./images/Picture26.PNG";
import image27 from "./images/Picture27.PNG";

export const MathematicalFunctions = () => {
  return (
    <div className="MathematicalFunctions">
      <h1 className="padding-Top">Mathematical Functions</h1>
      <p>
      In the Formula Editor F(x) in ciPARTHENON, you can perform various operatons using mathematical functions such as:  <span className="bold-text"> "Abs", "Acos", "Asin", "Atan", "Avg", "Ceilling", "Cos", "Count", "DistinctCount", "Floor", "Log", "Log10", "Max", "Min", "Pow", "Random", "RandomBetween", "Round", "Sign", "Sin", "Sqrt", "StdDev", "StdDevP", "StdDevS", "Sum", "Tan" and "Truncate".</span></p>

      <p>
        <li>
          <span className="bold-text">Abs</span> returns the absolute (positive value of a number).  Ex: Abs(-1) and Abs(1) will return the value 1. 
        </li>
      </p>
      <img src={image1} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Acos</span> returns the angle/arc cosine of the specified value. The Acos(-1) returns 3.14159 and the Acos (1) returns 0.
        </li>
      </p>
      <img src={image2} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Asin</span> returns the angle/arc sine of the specified value. The Asin(-1) returns -1.57079 and the Asin (1) returns 1.57079.
        </li>
      </p>
      <img src={image3} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Atan</span>  returns the angle/arc sine of the specified value. Atan (1) returns 0.78539
        </li>
      </p>
      <img src={image4} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Avg</span> returns the average of the specified values. Avg ( 10,20,30 ) returns 20
        </li>
      </p>
      <img src={image5} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Ceilling</span> returns the nearest higher integer to the number provided. Ceiling(14.2 ) returns 15
        </li>
      </p>
      <img src={image6} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Cos</span> returns the cosine of the specified value. Cos(1) returns 0.54030
        </li>
      </p>
      <img src={image7} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Count</span> returns a distinct count of the values passed. Count(House, boat, computer, laptop) and Count (2,5,6,4) returns 4
        </li>
      </p>
      <img src={image8} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">DistinctCount</span> returns a distinct count of the values passed. DistinctCount ( 10,20,10 ) returns 2
        </li>
      </p>
      <img src={image9} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Floor</span> returns the nearest lowest integer the number provided. Floor( 12.8 ) returns 12
        </li>
      </p>
      <img src={image10} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Log</span> returns the logarithmic value in base e (natural base) of value. Log(2 ) returns 0.69314.

        </li>
      </p>
      <img src={image11} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Log10</span> returns the logarithmic value in base 10. Log10 ( 10 ) returns 1.  
        </li>
      </p>
      <img src={image12} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Max</span> returns the highest value in the list of values passed. Max( 10,20,30 ) returns 30
        </li>
      </p>
      <img src={image13} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Min</span> returns the lowest value in the list of values passed. Min( 10,20,30 ) returns 10.
        </li>
      </p>
      <img src={image14} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Pow</span> returns the value raised to the power specified. Pow (10, 2) returns 100.
        </li>
      </p>
      <img src={image15} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Random</span> returns a floating point random number between 0 and 1. Random () returns 0.70301 for example.
        </li>
      </p>
      <img src={image16} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">RandomBetween</span> Returns an integer random value between provided minimum and maximum values. RandomBetween( 10, 50 ) returns 20 for example.
        </li>
      </p>
      <img src={image17} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Round</span> rounds down or up a decimal value to the specified number of decimals. Default is 0 decimals. Round(10.1234) returns 10 and Round(10.1234, 2) returns 10.12, being 2 the decimals.
        </li>
      </p>
      <img src={image18} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Sign</span> returns a value indicating the sign of the specified value. Sign (-123.999) returns -1 and Sign (123.999) returns 1.
        </li>
      </p>
      <img src={image19} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Sin</span> returns the sine of the specified value. For example Sin (1 ) returns 0.84147.
        </li>
      </p>
      <img src={image20} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Sqrt</span> returns the square root of the provided value. Sqrt (4) returns 2
        </li>
      </p>
      <img src={image21} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">StdDev</span> returns the population standard deviation of the values passed. StdDev (10,20,30) returns 8.1649
        </li>
      </p>
      <img src={image22} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">StdDevP</span> returns the population standard deviation of the values passed. StdDevP (10,20,30) returns 8.1649
        </li>
      </p>
      <img src={image23} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">StdDevS</span> returns the population standard deviation of the values passed. StdDevS (10,20,30) returns 10
        </li>
      </p>
      <img src={image24} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Sum</span> sums the values in the list of values passed. Sum( 10,20,30 ) returns 60
        </li>
      </p>
      <img src={image25} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Tan</span> returns the tangent of the specified value. Tan (1) returns 1.55740.
        </li>
      </p>
      <img src={image26} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Truncate</span> returns the integral part of the passed value. For example Truncate (52.256 ) returns 52.
        </li>
      </p>
      <img src={image27} className="imageClass" />
      <br />

      
      
    </div>
  );
};
