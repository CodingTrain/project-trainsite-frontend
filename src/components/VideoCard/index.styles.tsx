import styled, { css } from '../../helpers/style';

export const VideoContainer = styled.div`
  width: 35rem;
  box-shadow: 0 10px 20px #eee,0 6px 6px #d5d5d5;
  padding-bottom: 1em;
  border-radius: 5px;
  overflow: hidden;
  margin: 3rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 250ms;

  & a {
    text-decoration: none;
    color: #222;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

export const ThumbnailContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

export const VideoBadge = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  background: #49BB6C;
  color: #FFF;
  font-family: "cubanoregular";
  letter-spacing: .4;
  font-size: 2rem;
  padding: .5em .5em .5em .6em;
  border-radius: 5px 0em 0em;
`;

export const Thumbnail = styled.div<{ url: string }>`
  width: 35rem;
  height: 19.6875rem;
  background-size: cover;
  background-position: center;
  ${props => css`background-image: url(${props.url});`}
`;

export const VideoTitle = styled.h3`
  font-size: 2rem;
  padding: 1.25em .5em .4em 1em;
  margin: 0;
  text-align: left;
`;

export const VideoDate = styled.span`
  color: #888;
  font-size: 1.5rem;
  padding: 0em 1.25em;
`;

export const VideoDescription = styled.div`
  padding: 0 1.25em 1.5em 1.25em;
  flex: 1;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0em 2rem 1rem;

  & a {
    font-size: 1.5rem;
    background: #9659A7;
    color: #FFF;
    flex-grow: 2;
    margin-left: .25em;
    margin-right: .25em;
    padding: 15px;
  }
`;
