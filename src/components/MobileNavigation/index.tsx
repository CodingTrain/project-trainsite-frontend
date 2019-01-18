import React, { Component } from 'react';
import Button from '../Button';
import { Backdrop, BurgerContainer, MobileNav } from './index.styles';
import { any } from 'prop-types';

export default class BurgerIcon extends Component {
  burgerRef: any;
  mobileLinksRef: any;
  mobileBackDropRef: any;
  pageWrapper: any;
  mobileLinks: any;
  constructor(props: any) {
    super(props);
    this.burgerRef = React.createRef();
    this.mobileLinksRef = React.createRef();
    this.mobileBackDropRef = React.createRef();
    this.toggleMobileNavigation = this.toggleMobileNavigation.bind(this);
  }

  componentDidMount() {
    this.pageWrapper = document.getElementById('page-wrapper');
    this.mobileLinks = document.querySelectorAll('.mobile-links *');
  }

  toggleMobileNavigation() {
    this.burgerRef.current.classList.toggle('open');
    this.mobileLinksRef.current.classList.toggle('open');
    this.mobileBackDropRef.current.classList.toggle('open');
    this.pageWrapper.classList.toggle('open');
    this.mobileLinks.forEach((link: any) => link.classList.toggle('open'));
  }

  render() {
    return (
      <>
        <Backdrop
          className="mobilenav-backdrop"
          ref={this.mobileBackDropRef}
          onClick={this.toggleMobileNavigation}>
        </Backdrop>
        <BurgerContainer
          id="burger-container"
          onClick={this.toggleMobileNavigation}
          ref={this.burgerRef}
        >
          <div id="burger">
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
        </BurgerContainer>

        <MobileNav
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
        </MobileNav>
      </>
    );
  }
}
