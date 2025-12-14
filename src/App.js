
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
   constructor() {
    super();
    this.state = {
      mode: 'light',
       progress:0   // dark ya light mode
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


 

setProgress = (progress) => {
  this.setState({ progress: progress });
};
  render() {
    return (


      <div>
       <Router>

        <Navbar  mode={this.state.mode} toggleMode={this.toggleMode} />
          <LoadingBar
          height={3}
        color="#f11946"
        progress={this.state.progress}
      
      />

        <Routes>
        
          <Route path="/" element={<News setProgress={this.setProgress}  key="home" pageSize={this.pageSize} category="general" />} />
          <Route path="/business" element={<News setProgress={this.setProgress}  key="business" pageSize={this.pageSize} category="business" />} />
          <Route path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" pageSize={this.pageSize} category="entertainment" />} />
          <Route path="/general" element={<News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} category="general" />} />
          <Route path="/health" element={<News setProgress={this.setProgress}  key="health" pageSize={this.pageSize} category="health" />} />
          <Route path="/science" element={<News setProgress={this.setProgress}  key="science" pageSize={this.pageSize} category="science" />} />
          <Route path="/sports" element={<News setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} category="sports" />} />
          <Route path="/technology" element={<News setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} category="technology" />} />

        </Routes>
       </Router>
      
      </div>
    )
  }
}
