import React from "react";
import image1 from "./images/Picture1.PNG";
import { useHistory } from "react-router-dom";

export const Social = () => {
  let history = useHistory();

  return (
    <div className="mainPage">
      <h1 className="padding-Top padding-bottom">Social</h1>     
     <br />
     <img src={image1} className ="image class" />
     <br />
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/SocialSharing")}
          >
            Social Sharing
          </span>
        </li>
        
        
      </div>
    </div>
  );
};