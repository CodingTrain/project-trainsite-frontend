import styled from '../../helpers/style';
import { ColorPair } from '../../helpers/style/theme';

export const FooterWrapper = styled.footer`
  margin-top: 50px;
  display: flex;
  font-family: cubanoregular, sans-serif;
  ${props => props.theme.media.tabletSmall`
    flex-wrap: wrap;
  `}
`;

export const Link = styled.a<{ colorPair: ColorPair }>`
  ${props => props.theme.colorPair[props.colorPair]}
  padding: 40px;
  flex-basis: 100%;
  text-align: center;
  text-decoration: none;
  margin: 0;

  span {
    display: inline-block;
    font-size: 18px;
    transition: all 150ms ${props => props.theme.timingFunction};
    transform: scale(1);
  }

  &:hover,
  &:focus span {
    transform: scale(1.2);
  }
`;
