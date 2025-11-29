
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
   constructor() {
    super();
    this.state = {
      mode: 'light'   // dark ya light mode
    }
  }

  toggleMode = () => {
    if (this.state.mode === 'light') {
      this.setState({ mode: 'dark' });
      document.body.style.backgroundColor = '#042743';
      document.body.style.color='white'
    } else {
      this.setState({ mode: 'light' });
      document.body.style.backgroundColor = 'white';
      document.body.style.color='black'
    }
  }

  render() {
    return (


      <div>
       <Router>
        <Navbar  mode={this.state.mode} toggleMode={this.toggleMode} />

        <Routes>
        
          <Route path="/" element={<News key="home" pagesize={6} category="general" />} />
          <Route path="/business" element={<News key="business" pagesize={6} category="business" />} />
          <Route path="/entertainment" element={<News key="entertainment" pagesize={6} category="entertainment" />} />
          <Route path="/general" element={<News key="general" pagesize={6} category="general" />} />
          <Route path="/health" element={<News key="health" pagesize={6} category="health" />} />
          <Route path="/science" element={<News key="science" pagesize={6} category="science" />} />
          <Route path="/sports" element={<News key="sports" pagesize={6} category="sports" />} />
          <Route path="/technology" element={<News key="technology" pagesize={6} category="technology" />} />

        </Routes>
       </Router>
      
      </div>
    )
  }
}
