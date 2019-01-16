import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Button from '../Button';
import './index.css';

export default class BurgerIcon extends Component {
  burgerRef: any;
  // rootEl: any;
  mobileLinksRef: any;
  mobileBackDropRef: any;
  constructor(props: any) {
    super(props);
    this.burgerRef = React.createRef();
    this.mobileLinksRef = React.createRef();
    this.mobileBackDropRef = React.createRef();
    this.toggleMobileNavigation = this.toggleMobileNavigation.bind(this);
  }

  toggleMobileNavigation() {
    this.burgerRef.current.classList.toggle('open');
    this.mobileLinksRef.current.classList.toggle('open');
    this.mobileBackDropRef.current.classList.toggle('open');
  }

  // componentWillMount() {
  //   this.rootEl = document.getElementById('root');
  // }

  render() {
    // return ReactDOM.createPortal(
    return (
      <BrowserRouter>
        <>
          <div className="mobilenav-backdrop" ref={this.mobileBackDropRef}></div>
          <div
            id="burger-container"
            onClick={this.toggleMobileNavigation}
            ref={this.burgerRef}
          >
            <div id="burger">
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
            </div>
          </div>

          <nav
            className="mobile-links"
            ref={this.mobileLinksRef}
            onClick={this.toggleMobileNavigation}
          >
            <Button
              className="mobile-link"
              link="/"
              background="blue"
            >Home</Button>
            <Button
              className="mobile-link"
              link="/"
              background="blue"
            >Coding Challenges</Button>
            <Button
              className="mobile-link"
              link="/"
              background="blue"
            >Tutorials</Button>
            <Button
              className="mobile-link"
              link="/"
              background="blue"
            >Streams</Button>
            <Button
              className="mobile-link"
              link="/"
              background="blue"
            >Courses</Button>
            <Button
              className="mobile-link"
              link="https://github.com/CodingTrain/website"
              background="blue"
              target="_blank"
            >Github</Button>
          </nav>
        </>
      </BrowserRouter>
      // this.rootEl,
    );
  }
}
