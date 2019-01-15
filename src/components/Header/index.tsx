import React, { Component } from 'react';
import './index.css';

export default class Header extends Component {

  render() {
    return (
      <header className="header">
        <nav className="header-links">
          <a href="/">Home</a>
          <a href="#">Coding Challenges</a>
          <a href="#">Tutorials</a>
          <a href="#">Streams</a>
          <a href="#">Courses</a>
          <a href="https://github.com/CodingTrain/website" target="_blank">Github</a>
        </nav>
      </header>
    );
  }
}
