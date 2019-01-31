import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Backdrop, BurgerContainer, Nav } from './index.styles';

interface IProps {}

interface IState {
  open: boolean;
  mobile: boolean;
}
export default class BurgerIcon extends Component<IProps, IState> {
  pageWrapper: any;
  constructor(props: IProps) {
    super(props);
    this.state = {
      open: false,
      mobile: (window.innerWidth < 620),
    };
    this.toggleMobileNavigation = this.toggleMobileNavigation.bind(this);
  }

  componentDidMount() {
    this.pageWrapper = document.getElementById('page-wrapper');
    window.addEventListener('resize', (e: any) => {
      this.setState({
        mobile: (e.target.innerWidth < 620),
      });
    });
  }

  toggleMobileNavigation() {
    if (this.state.mobile) {
      this.setState({
        open: !this.state.open,
      });
      this.pageWrapper.classList.toggle('open');
    }
  }

  render() {
    const { open } = this.state;
    return (
      <>
        <Backdrop
          onClick={this.toggleMobileNavigation}
          open={open}
        />
        <BurgerContainer
          id="burger-container"
          onClick={this.toggleMobileNavigation}
          open={open}
        >
          <div id="burger">
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
        </BurgerContainer>

        <Nav
          onClick={this.toggleMobileNavigation}
          open={open}
        >
          <Link
            to="/"
          >Home</Link>
          <Link
            to="/cc"
          >Coding Challenges</Link>
          <Link
            to="/tutorials"
          >Tutorials</Link>
          <Link
            to="/streams"
          >Streams</Link>
          <Link
            to="/courses"
          >Courses</Link>
          <a
            href="https://github.com/CodingTrain/website"
            target="_blank"
          >Github</a>
        </Nav>
      </>
    );
  }
}
