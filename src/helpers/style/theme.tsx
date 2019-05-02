import React from 'react';
import * as styledComponents from 'styled-components';
import GlobalStyles from './global.styles';
import { media, MediaInterface } from './media';

export interface ThemeInterface {
  colors: {
    [index: string]: string;
    blue: string;
    green: string;
    purple: string;
    red: string;
    yellow: string;
    pink: string;
    orange: string;
  };
  media: MediaInterface;
  timingFunction: string;
}

const {
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

export const codingTrainTheme = {
  media,
  colors: {
    blue: '#1E7EA4',
    green: '#2F7F47',
    purple: '#9659A7',
    red: '#E51310',
    yellow: '#F1C500',
    white: '#FFFFFF',
    pink: '#D53072',
    orange: '#BF5708',
    text: '#222',
  },
  timingFunction: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
};

export const CodingTrainThemeProvider: React.SFC = ({ children }) => (
  <ThemeProvider theme={codingTrainTheme}>
    <React.Fragment>
      {children}
      <GlobalStyles />
    </React.Fragment>
  </ThemeProvider>
);
