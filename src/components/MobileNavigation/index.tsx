import React, { Component } from 'react';
import Button from '../Button';
import './index.css';

export default class BurgerIcon extends Component {
  burgerRef: any;
  mobileLinksRef: any;
  mobileBackDropRef: any;
  pageWrapper: any;
  constructor(props: any) {
    super(props);
    this.burgerRef = React.createRef();
    this.mobileLinksRef = React.createRef();
    this.mobileBackDropRef = React.createRef();
    this.toggleMobileNavigation = this.toggleMobileNavigation.bind(this);
  }

  componentDidMount() {
    this.pageWrapper = document.getElementById('page-wrapper');
  }

  toggleMobileNavigation() {
    this.burgerRef.current.classList.toggle('open');
    this.mobileLinksRef.current.classList.toggle('open');
    this.mobileBackDropRef.current.classList.toggle('open');
    this.pageWrapper.classList.toggle('open');
  }

  render() {
    return (
      <>
        <div
          className="mobilenav-backdrop"
          ref={this.mobileBackDropRef}
          onClick={this.toggleMobileNavigation}>
        </div>
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
    );
  }
}
