import React, { useState } from "react";

export default function Textform(props) {

  const handleupclick=()=>{
    // console.log("upercase was clicked");
    let newtext= text.toUpperCase();
    setText(newtext)
  }

  const handleloclick=()=>{
    // console.log("upercase was clicked");
    let newtext = text.toLowerCase();
    setText(newtext)
  }

  const handleclearclick=()=>{
    // console.log("upercase was clicked");
    let newtext = text.to
    setText(newtext)
  }

  const handleonchange=(event)=>{
    console.log("on change");
    setText(event.target.value)
  }


  const [text, setText] = useState("");

  // setText("enter");

  return (
    <>
    <div className="container">
      <h1>
        {props.heading} 
      </h1>
      <div class="mb-3">
        {/* <label for="mybox" class="form-label">  Example textarea </label> */}
        <textarea
          className="form-control"
          value={text}
          id="mybox"
          onChange={handleonchange}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleupclick}> convert to uppercase </button>
      <button className="btn btn-primary mx-1" onClick={handleloclick}> convert to lowercase </button>
      <button className="btn btn-primary mx-1" onClick={handleclearclick}> clear </button>
      
    </div>
    <div className="container my-2">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 *text.split(" ").length} minutes read</p>
      <h2>preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
