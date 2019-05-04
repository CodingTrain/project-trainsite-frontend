import React, { Component, ReactElement } from 'react';
import { ALink } from './index.styles';
import { Link } from 'react-router-dom';

import { StyledComponentProps } from 'styled-components';
import { ThemeInterface, ColorPair } from '../../helpers/style/theme';

interface ButtonProps extends StyledComponentProps<'a', ThemeInterface, {}, ''> {
  link: string;
  colorPair?: ColorPair;
  size?: string;
}

const LinkStripProps = ({ colorPair, size, ...props }: { [index: string]: any, to: string }) => (
  <Link {...props} />
);

export default class Button extends Component<ButtonProps> {
  render() {
    const { link, colorPair, size, ...otherProps } = this.props;

    if (link.includes('https')) {
      // return external ALink
      return (
        <ALink
          href={link}
          colorPair={colorPair}
          size={size}
          {...otherProps}
        >
          {this.props.children}
        </ALink>
      );
    }

    // return router Link
    return (
      <ALink
        as={LinkStripProps}
        to={link}
        colorPair={colorPair}
        size={size}
        {...otherProps}
      >
       {this.props.children}
      </ALink>
    );
  }
}
