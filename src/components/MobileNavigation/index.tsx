import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Button from '../Button';
import { Backdrop, BurgerContainer, Nav } from './index.styles';

export default class BurgerIcon extends Component<any, any> {
  pageWrapper: any;
  constructor(props: any) {
    super(props);
    this.state = {
      open: '',
      mobile: window.innerWidth < 620 ? true : false,
    };
    this.toggleMobileNavigation = this.toggleMobileNavigation.bind(this);
  }

  componentDidMount() {
    this.pageWrapper = document.getElementById('page-wrapper');
    window.addEventListener('resize', (e: any) => {
      this.setState({
        mobile: e.target.innerWidth < 620 ? true : false,
      });
    });
  }

  toggleMobileNavigation() {
    if (this.state.mobile) {
      this.setState({
        open: this.state.open === '' ? 'open' : '',
      });
      this.pageWrapper.classList.toggle('open');
    }
  }

  render() {
    const { open } = this.state;
    return (
      <>
        <Backdrop
          className={`mobilenav-backdrop ${open}`}
          onClick={this.toggleMobileNavigation}>
        </Backdrop>
        <BurgerContainer
          id="burger-container"
          className={open}
          onClick={this.toggleMobileNavigation}
        >
          <div id="burger">
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
        </BurgerContainer>

        <Nav
          className={`nav-links ${open}`}
          onClick={this.toggleMobileNavigation}
        >
          <Link
            className={`nav-link ${open}`}
            to="/"
          >Home</Link>
          <Link
            className={`nav-link ${open}`}
            to="/cc"
          >Coding Challenges</Link>
          <Link
            className={`nav-link ${open}`}
            to="/tutorials"
          >Tutorials</Link>
          <Link
            className={`nav-link ${open}`}
            to="/streams"
          >Streams</Link>
          <Link
            className={`nav-link ${open}`}
            to="/courses"
          >Courses</Link>
          <a
            className={`nav-link ${open}`}
            href="https://github.com/CodingTrain/website"
            target="_blank"
          >Github</a>
        </Nav>
      </>
    );
  }
}
