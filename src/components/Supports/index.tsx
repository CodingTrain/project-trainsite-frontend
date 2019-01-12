import React, { Component } from 'react';
// import { StyledComponentProps } from 'styled-components';
// import { ThemeInterface } from '../../helpers/style/theme';
import { StyledWrapper, Title, MediaWrapper } from './index.styles';
import patreonImg from '../../assets/images/patreon.svg';
import merchImg from '../../assets/images/merch-store.png';
import amazonImg from '../../assets/images/amazon-store.png';
import Button from '../Button';

export default class Supports extends Component {
  render() {
    return (
      <>
        <Title>SUPPORT THE CODING TRAIN</Title>
        <MediaWrapper>
          <StyledWrapper>
              <img src={patreonImg} />
              <h3>Consider supporting?</h3>
              <p>
              Join the Coding Train community with a YouTube membership or Patreon subscription!
              </p>
              <Button
                link="https://patreon.com/codingtrain"
                background="blue"
                size="big"
                target="_blank"
              >
                become a patron
              </Button>
          </StyledWrapper>
          <StyledWrapper>
              <img src={merchImg} />
              <h3>Coding Train Store</h3>
              <p>
                Visit Design by Humans for a variety of Coding Train merchandise.
              </p>
              <Button
                link="https://www.designbyhumans.com/shop/codingtrain/"
                background="pink"
                size="big"
                target="_blank"
              >
                Shop for Merchandise
              </Button>
          </StyledWrapper>
          <StyledWrapper>
              <img src={amazonImg} />
              <h3>Love to read?</h3>
              <p>
                Find books and other products featured on The Coding Train!
              </p>
              <Button
                link="https://www.amazon.com/shop/thecodingtrain"
                background="orange"
                size="big"
                target="_blank"
              >
                  Shop for Books and more
              </Button>
          </StyledWrapper>
        </MediaWrapper>
      </>
    );
  }
}
