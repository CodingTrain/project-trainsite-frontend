import React, { Component } from 'react';
import { PageWrapper } from './index.style';
import Menu from './menu';

interface IState {
  isOpen: boolean;
  isMobile: boolean;
}

export default class Navigation extends Component<{}, IState> {
  state: IState = {
    isOpen: false,
    isMobile: window.innerWidth < 620,
  };

  componentDidMount() {
    window.addEventListener('resize', (e: any) => {
      this.setState({
        isMobile: e.target.innerWidth < 620,
      });
    });
  }

  render() {
    const {
      children,
    } = this.props;
    const {
      isOpen,
      isMobile,
    } = this.state;
    return (
      <>
        <PageWrapper isOpen={isOpen}>
          { children }
        </PageWrapper>
        <Menu
          isOpen={isOpen}
          isMobile={isMobile}
          setOpen={isOpen => this.setState({ isOpen })}
        />
      </>
    );
  }
}
