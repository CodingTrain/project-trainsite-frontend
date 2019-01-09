import React, { Component } from 'react';
import {
  FooterWrapper,
  Link,
} from './index.styles';

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <Link
          background="red"
          href="http://natureofcode.com"
          target="_blank"
          className="nature-of-code">
          <span>Nature of Code</span>
        </Link>
        <Link
          color="text"
          background="yellow"
          href="http://learningprocessing.com/"
          target="_blank" className="learning-processing">
          <span>Learning Processing</span>
        </Link>
        <Link
          background="blue"
          href="http://shiffman.net/"
          target="_blank"
          className="shiffman-net">
          <span>shiffman.net</span>
        </Link>
      </FooterWrapper>
    );
  }
}
