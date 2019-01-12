import React, { Component } from 'react';
import { StyledWrapper,  StyledH2 } from './index.styles';
import patreon from '../../assets/images/patreon.svg'
import { StyledComponentProps } from 'styled-components';
import { ThemeInterface } from '../../helpers/style/theme';

export default class Support extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledH2>SUPPORT CODING TRAIN</StyledH2>
        <img src={patreon} />
      </StyledWrapper>
    );
  };
}
