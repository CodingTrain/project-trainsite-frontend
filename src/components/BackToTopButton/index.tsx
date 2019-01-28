import React, { Component } from 'react';
import { BackToTopStyles } from './index.styles';

export default class BackToTopButton extends Component<any> {

  state = {
    open: '',
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 1000) {
        this.setState({
          open: 'open',
        });
      } else {
        this.setState({
          open: '',
        });
      }
    });
  }

  render() {
    return (
      <BackToTopStyles
        id="back-to-top-button"
        title="Back to top"
        onClick={() => window.scrollTo(0, 0)}
        className={this.state.open}
      >
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </BackToTopStyles>
    );
  }
}
