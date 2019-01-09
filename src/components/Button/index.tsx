import React, { Component } from 'react';
import { Link } from './index.styles';

interface ButtonProps {
  link: string,
  text: string
  background?: string,
  size?: string,
}

export default class Button extends Component<ButtonProps> {
  render() {
    const { link, background, size, text } = this.props

    // check if link is external or not
    if (link.includes('https')) {
      // return external
      return (
        <Link
          href={link}
          background={background}
          size={size}
        >
          {text}
        </Link>
      );
    }
    // otherwise return react router link
    return (
      // add router sourcery here
      <Link
        href={link}
        background={background}
        size={size}
      >
        {text}
      </Link>
    )
  }
}
