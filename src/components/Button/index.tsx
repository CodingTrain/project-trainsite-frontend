import React, { Component } from 'react';
import { Link } from './index.styles';

interface ButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  link: string;
  background?: string;
  size?: string;
  target?: string;
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
    null
    );
  }
}
