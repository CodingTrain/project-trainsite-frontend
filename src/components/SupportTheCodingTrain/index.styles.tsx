import styled from '../../helpers/style';

export const Title = styled.h2`
  font-family: cubanoregular, sans-serif;
  text-align: center;
  font-weight: normal;
`;

export const MediaWrapper = styled.div`
  display: flex;
  ${props => props.theme.media.tablet`
    flex-wrap: wrap;
  `}
`;

export const StyledWrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  width: 20rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  text-align: center;

  & img {
    max-height: 230px;
    max-width: 230px;
  }

  & a {
    width: 70%;
  }
`;
