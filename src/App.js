
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useState } from 'react';

 
function App() { 
  const [mode, setMode] = useState ('light');
  const [green, setGreenMode] = useState ('light');
  const [alert, setAlert] = useState (null);

const showAlert=(massage,type)=>{
setAlert({
  msg:massage,
  type:type
})
setTimeout(() => {
  setAlert(null)
}, 1500);
 
}

  const toggleMode= ()=>{
    if (mode=== 'light') {
      setMode('dark');
      // document.body.style.backgroundColor='dark';
      
         document.body.style.backgroundColor = 'black';  
      document.body.style.color = 'white';   
      showAlert("dark mode has been enable","success");
      document.title='textuits-Darkmode';   
    }
    else{
      setMode('light');
      // document.body.style.backgroundColor='white';
      document.body.style.backgroundColor = 'white';    // white background
      document.body.style.color = 'black'; 
      showAlert("light mode has been enable","success");   
      document.title='textuits-lightmode';   
    }
  }
  const greenMode= ()=>{
    if (green=== 'light') {
      setGreenMode('green');
      // document.body.style.backgroundColor='dark';
      
      document.body.style.backgroundColor = 'green';  
      document.body.style.color = 'white';   
      showAlert("green mode has been enable","success");   
      document.title='textuits-greenmode';   
    }
    else{
      setGreenMode('light');
      // document.body.style.backgroundColor='white';
      document.body.style.backgroundColor = 'white';    // white background
      document.body.style.color = 'black'; 
      showAlert("light mode has been enable","success");   
      document.title='textuits-lightmode';   
    }
  }
  return (
    <>
    <Router>
{/* <Navbar /> */}
<Navbar title="textuits2" abouttext="About us" mode={mode} green={green} greenMode={greenMode} toggleMode={toggleMode} />
<Alert  alert={alert}/>
<div className='container my-3'>
  {/* <Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/> */}
  {/* <About mode={mode} /> */}
     <Routes>
          <Route path="/" element={<Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>} />
          <Route path="/about" element={<About mode={mode} />} />
          {/* <Route path="/home" element={<Home />} /> */}
        </Routes>

</div>
</Router>
</>
  );
}
export default App;
