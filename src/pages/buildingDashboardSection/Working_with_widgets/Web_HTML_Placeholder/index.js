import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";



export const WebsHTMLPlaceholder = () => {
  return (
    <div className="WebsHTMLPlaceholder">
      <h1 className="padding-Top">Web HTML Placeholder</h1>
      <p>
      Web/HTML Placeholder is a very flexible widget. Below is what the widget looks like when it is first created.
      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      There are <span className="bold-text">three </span>types of content that you can be used:
      </p>
      <p>1)<span className="bold-text">Static URL</span>
        <li>
        this is the plain URL you would use to link pathways
        </li></p>
      <p>2)<span className="bold-text">Formula URL</span>
        <li>
        this would be used in conjunction with a normal HTML
        </li></p>
      <p>and 3)<span className="bold-text">Plain HTML</span>
        <li>
        example can be seen below:
        </li>
      </p>
      <br />
      <p>
      This is how the Youtube video embedded in the dashboard above was set up:

      You can obtain the iframe code from the desired Youtube video page.
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>This is how the website was embedded in the dashboard above:</p>
      <br />
      <img src={image3} className="imageClass" />
      <br />


      
      <br />

      
    </div>
  );
};
