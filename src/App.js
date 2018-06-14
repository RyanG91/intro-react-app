import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Project from './components/Project';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>My Portfolio</h1>
        <p>Hey</p>
        <a href="https://github.com/RyanG91/Ruby-shopping-list"><Project title="Ruby Project" /></a>
        <Project description="Ruby Shopping Cart" />
        <a href="https://github.com/RyanG91/delivery"><Project title="Portfolio Project" /></a>
        <Project description="Design a Portfolio" />
        <a href="https://github.com/RyanG91/Portfolio-web-page"><Project title="Rails Project" /></a>
        <Project description="Kode Academy!" />
      </div>
    );
  }
}

export default App;
