import React, { Component } from 'react';
import logo from './logo.svg';
import Apptest from './Apptest';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state= {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
        title: 'Saurabh',
        id: 'sp'
      },
      {
        title: 'Prerna',
        id: 'pp'
      }
    ]});
  }
  render() {
    return (
      <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <hr/>
        My App
        <Projects />
        <Apptest />
      </div>
    );
  }
}

export default App;
