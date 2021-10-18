import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";

export const Image = () => {
  return (
    <div className="Image">
      <h1 className="padding-Top">Image</h1>
      <p>
      If you want to add a picture or your company logo to your dashboard, you can drag and drop the <span className="bold-text">Image widget </span>into the dashboard work space area. A new window will appear that will allow you to import the image from your local machine or from an URL. Click Select and the image will be added to your dashboard. 
      </p>
      <img src={image1} className="imageClass" />
      <br />
      <p>
      In order to customize the image's properties, click on the widget and access the <span className="bold-text">Properties</span> option in the bar at the bottom of the screen.
      </p>
      <p>
        <li>
          <span className="bold-text">Properties</span>
        </li>
        Here, you can <span className="bold-text">name </span>your image and change the <span className="bold-text">Source</span>. If you lock the position and size, you will not be able to move or re-size the widget in the work space area.
      </p>
      <img src={image2} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Data</span>
        </li>
        In this tab you can replace the image by uploading another one, changing the URL or generating a new formula. 
      </p>
      <img src={image3} className="imageClasss" />
      <br />
      <p>
        <li>
          <span className="bold-text">Format</span>
        </li>
        The <span className="bold-text">Format</span> tab, you can adjust the image to the <span className="bold-text">best resolution,</span>add a <span className="bold-text">border,</span>add a <span className="bold-text">shadow</span> or <span className="bold-text">other effects</span>
      </p>
      <img src={image4} className="imageClasss" />
      <br />
      
      <p>
        <li>
          <span className="bold-text">Interactions</span>
        </li>
        In this tab, you can add interactions for your image so that when the users will double click on it,<span className="bold-text">a new dashboard will be opened </span>or they will <span className="bold-text">navigate to the specified URL.</span>
      </p>
      <img src={image5} className="imageClasss" />
    </div>
  );
};
