import React, { Component } from 'react';
import { BackToTopStyles } from './index.styles';

const scrollToTop = () => window.scrollTo(0, 0);

export default class BackToTopButton extends Component<{}, { open: boolean }> {
  state = {
    open: false,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 1000) {
        this.setState({
          open: true,
        });
      } else {
        this.setState({
          open: false,
        });
      }
    });
  }

  render() {
    return (
      <BackToTopStyles
        id="back-to-top-button"
        title="Back to top"
        onClick={scrollToTop}
        open={this.state.open}
      >
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </BackToTopStyles>
    );
  }
}
