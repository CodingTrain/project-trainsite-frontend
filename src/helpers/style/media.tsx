import { css, BaseThemedCssFunction } from 'styled-components';

const sizes = {
  mobile: 550,
  tabletSmall: 620,
  tablet: 700,
  tabletBig: 920,
  laptop: 1024,
  desktop: 1200,
};

interface MediaObject {
  [index: string]: BaseThemedCssFunction<{}>;
}

export interface MediaInterface {
  [index: string]: BaseThemedCssFunction<{}>;
  mobile: BaseThemedCssFunction<{}>;
  tabletSmall: BaseThemedCssFunction<{}>;
  tablet: BaseThemedCssFunction<{}>;
  tabletBig: BaseThemedCssFunction<{}>;
  laptop: BaseThemedCssFunction<{}>;
  desktop: BaseThemedCssFunction<{}>;
}

const mediaBuilder: MediaObject = {};

for (const [label, size] of Object.entries(sizes))  {
  mediaBuilder[label] = (arg0: any, ...args: any) => css`
    @media (max-width: ${size}px) {
      ${css(arg0, ...args)}
    }
  `;
}

export const media = mediaBuilder as MediaInterface;
