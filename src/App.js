
import './App.css';
import React, { Component, useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App =()=>{
   const [mode, setMode]=useState("light")
   const [progress, setProgress]=useState(0)
   const pageSize=10;
   
   
  
      
  const toggleMode = () => {
    if (mode === 'light') {
      setMode( 'dark' );
      document.body.style.backgroundColor = '#042743';
      document.body.style.color='white'
    } else {
      setMode( 'light' );
      document.body.style.backgroundColor = 'white';
      document.body.style.color='black'
    }
  }
  

    return (


      <div>
       <Router>

        <Navbar  mode={mode} toggleMode={toggleMode} />
          <LoadingBar
          height={3}
        color="#f11946"
        progress={progress}
      
      />

        <Routes>
        
          <Route path="/" element={<News setProgress={setProgress}  country="us" key="home" pagesize={pageSize} category="general" />} />
          <Route path="/business" element={<News setProgress={setProgress}  country="us" key="business" pagesize={pageSize} category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} country="us" key="entertainment" pagesize={pageSize} category="entertainment" />} />
          <Route path="/general" element={<News setProgress={setProgress}  country="us" key="general" pagesize={pageSize} category="general" />} />
          <Route path="/health" element={<News setProgress={setProgress}  country="us" key="health" pagesize={pageSize} category="health" />} />
          <Route path="/science" element={<News setProgress={setProgress}  country="us" key="science" pagesize={pageSize} category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress}  country="us" key="sports" pagesize={pageSize} category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} country="us" key="technology" pagesize={pageSize} category="technology" />} />

        </Routes>
       </Router>
      
      </div>
    )
  
  }
export default App