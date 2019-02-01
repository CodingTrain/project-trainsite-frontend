import styled from '../../helpers/style';

export const Wrapper = styled.div`
  display: flex;
  letter-spacing: inherit;
  max-width: 1000px;
  margin: 0 auto;
  ${props => props.theme.media.tablet`
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;

    & a {
      width: 80%;
      margin: 0 0 1em 0;
    }

    & .buttons {
      flex-wrap: wrap;
    }
  `}
`;

export const ChooChoo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em 1em;
  max-width: 500px;

  & h1 {
    font-family: cubanoregular, sans-serif;
    font-size: 3rem;
    font-weight: normal;
    margin: 0;
  }

  & p {
    font-size: 1.1em;
  }

  & a {
    margin: 0 1em 1em 0;
    max-width: 80%;
  }
`;
