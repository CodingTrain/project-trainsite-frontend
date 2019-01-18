import styled, { css } from '../../helpers/style';

export const BurgerContainer = styled.div`
  display: none;
  position: fixed;
  top: 5px;
  width: 90px;
  background: #2494C1;
  padding: 15px 15px 5px 15px;
  border-radius: 0px 5px 5px 0px;

  &.open span:nth-child(1) {
    transform: rotate(-135deg);
    top: 20px;
  }
  &.open span:nth-child(2) {
    transform: rotate(180deg);
    opacity: 0;
  }
  &.open span:nth-child(3) {
    transform: rotate(135deg);
    top: -20px;
  }

  & > div {
    cursor: pointer;
    display: block;
  }

  & > div span {
    background: #eee;
    display: block;
    width: 90px;
    height: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    position: relative;
    top: 0;
    transition: all ease-in-out 0.5s;
  }

  ${props => props.theme.media.tabletSmall`
    display: block;
  `}
`;

export const Backdrop = styled.div`
  background-color: rgba(0,0,0,0.8);
  position: fixed;
  top: 0px;
  width: 0vw;
  height: 100vh;
  opacity: 0;
  transition: opacity 500ms ease-in-out;

  &.open {
    width: 100vw;
    opacity: 0.5;
}
`;

function iterateStyle() {
  let styles = `
    display: flex;
    flex-direction: column;
    width: 0px;
    position: fixed;
    top: 100px;
    /* less than 7s has a weird jump going out */
    transition: all ease-in-out 7s;

    &.open {
      transition: all ease-in-out 0.2s;
      width: 210px;
    }

    & .mobile-link {
      position: relative;
      left: -300px;
      margin: 3px;
      padding: 10px 20px 10px 20px;
      transition: all ease-in-out 0.5s;
    }

    & .mobile-link.open {
      left: 0px;
    }
  `;

  for (let i = 1; i <= 6; i = i + 1) {
    styles += `
      & a:nth-child(${i}) {
        transition-delay: ${(i - 1.5) * 100}ms;
      }
    `;
  }

  return css`${styles}`;
}

export const MobileNav = styled.nav`
  ${iterateStyle()};
`;
