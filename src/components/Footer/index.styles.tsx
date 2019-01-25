import styled from '../../helpers/style';

export const FooterWrapper = styled.footer`
  margin-top: 50px;
  display: flex;
  font-family: cubanoregular, sans-serif;

  ${props => props.theme.media.tabletSmall`
    flex-wrap: wrap;
  `}
`;

export const Link = styled.a<{ color?: string, background: string }>`
  padding: 40px;
  flex-basis: 100%;
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.colors[props.color || 'white']};
  margin: 0;

  span {
    display: inline-block;
    font-size: 18px;
    transition: all 150ms ${props => props.theme.timingFunction};
    transform: scale(1);
  }

  &:hover span {
    transform: scale(1.2);
  }

  background: ${props => props.theme.colors[props.background]}
`;
