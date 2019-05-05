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
          colorPair="red"
          href="http://natureofcode.com"
          target="_blank"
        >
          <span>
            Nature of Code
          </span>
        </Link>
        <Link
          colorPair="yellow"
          href="http://learningprocessing.com/"
          target="_blank"
        >
          <span>
            Learning Processing
          </span>
        </Link>
        <Link
          colorPair="blue"
          href="http://shiffman.net/"
          target="_blank"
        >
          <span>
            shiffman.net
          </span>
        </Link>
      </FooterWrapper>
    );
  }
}
