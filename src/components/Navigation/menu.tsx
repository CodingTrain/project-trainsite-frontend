import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Backdrop, BurgerContainer, Nav } from './menu.style';

interface IProps {
  isOpen: boolean;
  isMobile: boolean;
  setOpen: (open: boolean) => void;
}

export default class Menu extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.toggleMobileNavigation = this.toggleMobileNavigation.bind(this);
  }

  toggleMobileNavigation() {
    const {
      isMobile,
      isOpen,
      setOpen,
    } = this.props;
    if (isMobile) {
      setOpen(!isOpen);
    }
  }

  render() {
    const {
      isOpen,
    } = this.props;
    return (
      <>
        <Backdrop
          onClick={this.toggleMobileNavigation}
          isOpen={isOpen}
        />
        <BurgerContainer
          onClick={this.toggleMobileNavigation}
          isOpen={isOpen}
        >
          <div>
            <span>
              &nbsp;
            </span>
            <span>
              &nbsp;
            </span>
            <span>
              &nbsp;
            </span>
          </div>
        </BurgerContainer>

        <Nav
          onClick={this.toggleMobileNavigation}
          isOpen={isOpen}
        >
          <Link
            to="/"
          >
            Home
          </Link>
          <Link
            to="/codingchallenges"
          >Coding Challenges</Link>
          <Link
            to="/tutorials"
          >
            Tutorials
          </Link>
          <Link
            to="/streams"
          >
            Streams
          </Link>
          <Link
            to="/courses"
          >
            Courses
          </Link>
          <a
            href="https://github.com/CodingTrain/website"
            target="_blank"
          >
            Github
          </a>
        </Nav>
      </>
    );
  }
}
