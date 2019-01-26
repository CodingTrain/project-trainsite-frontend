import styled from '../../helpers/style';
import headerImg from '../../assets/images/header.jpg';
import headerImgMobile from '../../assets/images/header-mobile.jpg';

export const StyledHeader = styled.header`
  height: 18rem;
  background-image: url(${headerImg});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  margin-bottom: 5rem;

  ${props => props.theme.media.tabletSmall`
    & {
      background-image: url(${headerImgMobile});
      background-position: center;
      height: 10rem;
    }
  `}
`;

export const Nav = styled.nav`
  font-family: cubanoregular;
  width: 100%;
  height: 3rem;
  font-size: 18px;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.2), transparent);
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > a {
    text-decoration: none;
    color: #FFF;
    margin: 0em 0.5em;
    padding-top: 10px;
    text-shadow: 0px 0px 5px #BBB;
  }
`;
