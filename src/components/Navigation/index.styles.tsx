import styled, { css } from '../../helpers/style';

export const BurgerContainer = styled.div<{ open: boolean }>`
  display: none;
  position: fixed;
  top: 5px;
  width: 90px;
  background: #2494c1;
  padding: 15px 15px 5px 15px;
  border-radius: 0 5px 5px 0;

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

  ${props => props.open && css`
      & span:nth-child(1) {
        transform: rotate(-135deg);
        top: 20px;
      }

      & span:nth-child(2) {
        transform: rotate(180deg);
        opacity: 0;
      }

      & span:nth-child(3) {
        transform: rotate(135deg);
        top: -20px;
      }
  `}

  ${props => props.theme.media.tabletSmall`
    display: block;
  `}
`;

export const Backdrop = styled.div<{ open: boolean }>`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  width: 0;
  height: 100vh;
  opacity: 0;
  transition: opacity 500ms ease-in-out;
  ${props => props.open && css`
      width: 100vw;
      opacity: 0.5;
  `}
`;

function iterateDelays() {
  let styles = '';
  for (let i = 1; i <= 6; i = i + 1) {
    styles += `
      & a:nth-child(${i}) {
        transition-delay: ${(i - 1.5) * 100}ms;
      }
    `;
  }
  return css`
    ${ styles }
  `;
}

export const Nav = styled.nav<{ open: boolean }>`
  font-family: cubanoregular, sans-serif;
  width: 100%;
  height: 3rem;
  font-size: 18px;
  background: linear-gradient(rgba(0, 0, 0, 0.2), transparent);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & > a {
    text-decoration: none;
    color: #fff;
    margin: 0 0.5em;
    padding-top: 10px;
    text-shadow: 0 0 5px #bbb;
    transition: none;
  }

  ${ iterateDelays() }
  ${props => props.theme.media.tabletSmall<{ open: boolean }>`
    flex-direction: column;
    align-items: start;
    width: 0;
    height: 300px;
    position: fixed;
    top: 100px;
    left: 0;
    background: none;

    & > a {
      position: relative;
      width: 180px;
      text-align: center;
      left: -300px;
      margin: 3px;
      padding: 10px 20px 10px 20px;
      background-color: #2494c1;
      border-radius: 5px;
      transition: left ease-in-out 0.5s;
    }

    ${props => props.open && css`

      & > a {
        left: 0;
      }
    `}
  `}
`;
