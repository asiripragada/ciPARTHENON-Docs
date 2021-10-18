import React from "react";
import image1 from "./images/Picture1.PNG";
import { useHistory } from "react-router-dom";

export const Media = () => {
  let history = useHistory();

  return (
    <div className="mainPage">
      <h1 className="padding-Top padding-bottom">Media</h1>
      <p>
      You want to be creative and build an original dashboard? In this section you will learn how to work with Images, Audios and Videos in your dashboard. 
      </p>
      
      
     <br />
     <img src={image1} className ="image class" />
     <br />
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Image")}
          >
            Image
          </span>
        </li>
        
      </div>
    </div>
  );
};