import React from "react";
import blob from "../assets/blob_one.svg"

function StartPage(props) {


    return (
      <div>
        <div className="blob-up"/>
        <div className="startpage">
          <h1>Quizzical</h1>
          <h4>This is the awesome super quiz</h4>
          <button onClick={props.handleOnClick}>Start quiz</button>
        </div>
        <div className="blob-down"/>
      </div>
      
      );
}

export default StartPage;