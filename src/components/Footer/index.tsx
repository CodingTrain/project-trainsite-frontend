import React, { Component } from 'react';
import './index.css';


export default class Footer extends Component {
  render() {

    return (
      <footer>
        <div className="footer-links">
          <a href="http://natureofcode.com" target="_blank" className="nature-of-code"><span>Nature of Code</span></a>
          <a href="http://learningprocessing.com/" target="_blank" className="learning-processing"><span>Learning Processing</span></a>
          <a href="http://shiffman.net/" target="_blank" className="shiffman-net"><span>shiffman.net</span></a>
        </div>
      </footer>
    );
  }
}
