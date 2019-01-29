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
