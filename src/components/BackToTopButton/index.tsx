import React, { Component } from 'react';
import { BackToTopStyles } from './index.styles';

export default class BackToTopButton extends Component {
  backToTopButton: any;
  constructor(props: any) {
    super(props);
    this.backToTopButton = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 1000) {
        this.backToTopButton.current.classList.add('open');
      } else {
        this.backToTopButton.current.classList.remove('open');
      }
    });

    document.addEventListener('click', () => {
      window.scrollTo(0, 0);
    });
  }

  render() {
    return (
        <BackToTopStyles
          id="back-to-toop-button"
          title="Back to top"
          ref={this.backToTopButton}
        >
            <span>&nbsp;</span>
            <span>&nbsp;</span>
        </BackToTopStyles>
    );
  }
}
