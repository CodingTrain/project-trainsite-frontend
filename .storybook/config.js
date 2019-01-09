import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { CodingTrainThemeProvider } from '../src/helpers/style/theme';

addDecorator((fn) => (
  <CodingTrainThemeProvider>
    {fn()}
  </CodingTrainThemeProvider>
));

const req = require.context('../src/', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
