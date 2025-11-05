import React, { useState } from "react";

export default function Textform(props) {

  const handleupclick=()=>{
    // console.log("upercase was clicked");
    let newtext= text.toUpperCase();
    setText(newtext)
    props.showAlert("convert to uppercase","success");
  }
  
  const handleloclick=()=>{
    // console.log("upercase was clicked");
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("convert to lowerrcase","success");
  }
  
  const handleclearclick=()=>{
    // console.log("upercase was clicked");
    let newtext = " ";
    setText(newtext)
    props.showAlert("clear text","success");
  }

  const handleonchange=(event)=>{
    console.log("on change");
    setText(event.target.value)
  }


  const [text, setText] = useState("");

  // setText("enter");

  return (
    <>
    <div className="container" >                  
      <h1>
        {props.heading} 
      </h1>
      <div className="mb-3">
        {/* <label for="mybox" className="form-label">  Example textarea </label> */}
        <textarea
          className="form-control"
          value={text}
          onChange={handleonchange}
          rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#a9b6c067' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black'}}
          id="mybox"
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
      <p>{text.length>0?text:'enter something to preview it here'}</p>
    </div>
    </>
  );
}
