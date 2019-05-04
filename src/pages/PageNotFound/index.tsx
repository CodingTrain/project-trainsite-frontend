import React, { Component } from 'react';
import { Error } from './index.styles';

export default class PageNotFound extends Component {

  render() {
    return (
      <Error>
        404 Page Not found!
      </Error>
    );
  }
}
