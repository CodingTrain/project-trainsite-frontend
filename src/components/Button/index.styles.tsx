import styled from '../../helpers/style';
import { ColorPair } from '../../helpers/style/theme';

export const ALink = styled.a<{ colorPair?: ColorPair, size?: string, to?: any }>`
  ${props => props.theme.colorPair[props.colorPair || 'purple']}
  text-decoration: none;
  font-family: "cubanoregular", sans-serif;
  letter-spacing: 0.4px;
  border-radius: 5px;
  display: inline-block;
  text-align: center;
  padding: ${props => props.size === 'big' ? '20px' : '15px 20px 15px 20px'};
  box-shadow: 0 6px 0 0 rgba(0, 0, 0, 0.06);
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);

  &:hover {
    transform: scale(0.98);
  }
`;
