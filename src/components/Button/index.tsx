import React, { Component } from 'react';
import { ALink } from './index.styles';
import { Route, Link } from 'react-router-dom';

import { StyledComponentProps } from 'styled-components';
import { ThemeInterface } from '../../helpers/style/theme';

interface ButtonProps extends StyledComponentProps<'a', ThemeInterface, {}, ''> {
  link: string;
  background?: string;
  size?: string;
}

export default class Button extends Component<ButtonProps> {
  render() {
    const { link, background, size, ...otherProps } = this.props;

    if (link.includes('https')) {
      // return external ALink
      return (
        <ALink
          href={link}
          background={background}
          size={size}
          {...otherProps}
        >
          {this.props.children}
        </ALink>
      );
    }

    // return router ALink
    return (
      <Link to={link}>
        <ALink
          background={background}
          size={size}
          {...otherProps}
        >
          {this.props.children}
        </ALink>
      </Link>
    );
  }
}
