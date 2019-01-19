import styled from '../../helpers/style';

export const BackToTopStyles = styled.div`
  display: block;
  z-index: 99;
  position: fixed;
  bottom: -50px;
  right: 5px;
  background: ${props => props.theme.colors['blue']};
  padding: 20px 5px 10px 5px;
  border-radius: 5px;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: all ease-in-out 0.5s;

  &.open {
    bottom: 5px;
  }

  & span:nth-child(1) {
    transform: rotate(-45deg);
    float: left;
    left: 5px;
    top: 0px;
  }
  & span:nth-child(2) {
    transform: rotate(45deg);
    float: right;
    right: 5px;
    top: 0px;
  }

  & span {
    background: #eee;
    display: block;
    width: 30px;
    height: 7px;
    border-radius: 5px;
    margin-bottom: 10px;
    position: relative;
    top: 0;
  }
`;
