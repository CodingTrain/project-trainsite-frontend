import styled, { css } from '../../helpers/style';

export const PageWrapper = styled.div<{ isOpen: boolean }>`
  transition: all 500ms ease-in-out;
  ${props => props.isOpen && css`
    filter: blur(5px);
  `}
`;
