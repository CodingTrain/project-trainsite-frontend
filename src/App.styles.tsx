import styled from './helpers/style';

export const PageWrapper = styled.div`
  transition: all 500ms ease-in-out;

  &.open {
    filter: blur(5px);
  }
`;
