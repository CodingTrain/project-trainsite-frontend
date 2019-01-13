import styled from '../../helpers/style';

export const ALink = styled.a<{ background?: string, size?: string, to?: any }>`
  text-decoration: none;
  color: white;
  font-family: "cubanoregular";
  letter-spacing: 0.4px;
  border-radius: 5px;
  display: inline-block;
  text-align: center;
  padding: ${props => props.size === 'big' ? '20px' : '15px 20px 15px 20px'};
  box-shadow: 0px 6px 0px 0px rgba(0, 0, 0, 0.06);
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  background: ${props => props.theme.colors[props.background || 'purple']};
  transform: scale(1);

  &:hover {
    transform: scale(0.98);
  }
`;
