import React from 'react';
import * as styledComponents from 'styled-components';
import GlobalStyles from './global.styles';
import { media, MediaInterface } from './media';

const backgroundColors = Object.freeze({
  blue: '#1E7EA4',
  green: '#2F7F47',
  purple: '#9659A7',
  red: '#E51310',
  yellow: '#F1C500',
  pink: '#D53072',
  orange: '#BF5708',
  white: '#fff',
});

const textColors = Object.freeze({
  white: '#fff',
  black: '#222;',
  gray: '#888;',
});

const colorPairs = Object.freeze({
  blue: ['blue', 'white'],
  green: ['green', 'white'],
  purple: ['purple', 'white'],
  red: ['red', 'white'],
  yellow: ['yellow', 'black'],
  pink: ['pink', 'white'],
  orange: ['orange', 'white'],
  blackOnWhite: ['white', 'black'],
  grayOnWhite: ['white', 'gray'],
});

export type BackgroundColor = keyof typeof backgroundColors;
function isBackgroundColor(arg: any): arg is BackgroundColor {
  return arg in backgroundColors;
}
export type TextColor = keyof typeof textColors;
function isTextColor(arg: any): arg is TextColor {
  return arg in textColors;
}
export type ColorPair = keyof typeof colorPairs;
function isColorPair(arg: any): arg is TextColor {
  return arg in colorPairs;
}

export interface ThemeInterface {
  colorPair: {
    [index in ColorPair]: styledComponents.FlattenSimpleInterpolation;
  };
  textColor: {
    [index in TextColor]: styledComponents.FlattenSimpleInterpolation;
  };
  backgroundColor: {
    [index in BackgroundColor]: styledComponents.FlattenSimpleInterpolation;
  };
  media: MediaInterface;
  timingFunction: string;
}

const textColor: {
  [index in TextColor]?: styledComponents.FlattenSimpleInterpolation;
} = {};
for (const [k, v] of Object.entries(textColors)) {
  textColor[k as TextColor] = styledComponents.css`color: ${v};`;
}

const backgroundColor: {
  [index in BackgroundColor]?: styledComponents.FlattenSimpleInterpolation;
} = {};
for (const [k, v] of Object.entries(backgroundColors)) {
  backgroundColor[k as BackgroundColor] = styledComponents.css`background-color: ${v};`;
}

const colorPair: {
  [index in ColorPair]?: styledComponents.FlattenSimpleInterpolation;
} = {};

for (const [name, [background, foreground]] of Object.entries(colorPairs)) {
  if (!isColorPair(name)) {
    throw new Error(`Misconfigured: unknown color pair ${name}`);
  }
  if (!isBackgroundColor(background)) {
    throw new Error(`Misconfigured: unknown background ${background} for color pair ${name}`);
  }
  if (!isTextColor(foreground)) {
    throw new Error(`Misconfigured: unknown text color ${foreground} for color pair ${name}`);
  }
  colorPair[name as ColorPair] = styledComponents.css`
    ${backgroundColor[background]}
    ${textColor[foreground]}
  `;
}

export const codingTrainTheme = {
  media,
  backgroundColor,
  colorPair,
  textColor,
  timingFunction: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
} as ThemeInterface;

const {
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

export const CodingTrainThemeProvider: React.SFC = ({ children }) => (
  <ThemeProvider theme={codingTrainTheme}>
    <React.Fragment>
      {children}
      <GlobalStyles />
    </React.Fragment>
  </ThemeProvider>
);
