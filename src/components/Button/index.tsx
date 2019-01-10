import React, { Component } from 'react';
import { Link } from './index.styles';

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

    // check if link is external or not
    if (link.includes('https')) {
      // return external
      return (
        <Link
          href={link}
          background={background}
          size={size}
          {...otherProps}
        >
          {this.props.children}
        </Link>
      );
    }
    // otherwise return react router link
    return (
      // add router sorcery here
      <Link
        href={link}
        background={background}
        size={size}
        {...otherProps}
      >
        {this.props.children}
      </Link>
    );
  }
}
