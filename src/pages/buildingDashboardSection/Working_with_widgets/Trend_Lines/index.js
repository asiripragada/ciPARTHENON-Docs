import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";
import image7 from "./images/Picture7.PNG";
import image8 from "./images/Picture8.PNG";

export const TrendLines = () => {
  return (
    <div className="TrendLines">
      <h1 className="padding-Top">TrendLines</h1>
      <p>
      This is a new feature that is available on the following widgets: Area Chart, Bar Chart, Column Chart, Line Chart, Scatter Chart and Time Slider. All these widgets have this new feature in common.
      </p>
      <p>
      To add a trend line to the chart the user should have columns into the values of the widgets, for example “Price”, the user can have multiple trend lines on one chart.
      </p>
      <p>
      To access the trend line the user should go to the format tab of the chart and then go to the Trends left tab.
      </p>
      <p>
      On here, he can select the various series that he has on the widget.
      </p>
       <img src={image1} className="imageClass" />
      <br />
      <p>
      After selecting the column, the user can name the respective trend line accordingly and choose the respective trend type.
      </p>
      <img src={image2} className="imageClass" />
      <br />
      <p>
      The widgets offer various types of trend lines, these are: Linear, Exponential, Logarithmic, Polynomial, Power and Loess.

      In this screenshot we can see the trend line based on a linear extrapolation:
      </p>
      <img src={image3} className="imageClass" />
      <br/>
      <p>
      In this screenshot we can see the trend line based on an Exponential extrapolation:
      </p>
      <img src={image4} className="imageClass" />
      <br/>
      <p>
      In this screenshot we can see the trend line based on a Logarithmic extrapolation:
      </p>
      <img src={image5} className="imageClass" />
      <br/>
      <p>
      In this screenshot we can see the trend line based on a Polynomial extrapolation: The range of the order of the polynomial can be from 2 to 6, and we can extrapolate up until 120.
      </p>
      <img src={image6} className="imageClass" />
      <br/>
      <p>
      In this screenshot we can see the trend line based on Power extrapolation:
      </p>
      <img src={image7} className="imageClass" />
      <br/>
      <p>
      Finally, in this screenshot we can see the trend line based on a Loess ([LO]cally [E]stimated [S]catterplot [S]moothing) extrapolation with a smooth option from -100 to 100:
      </p>
      <img src={image8} className="imageClass" />
      
    </div>
  );
};
