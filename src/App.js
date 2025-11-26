
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

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
       
        <Navbar  mode={this.state.mode} toggleMode={this.toggleMode} />
        <News  pagesize={6} category="sports"/>
       
      
      </div>
    )
  }
}
