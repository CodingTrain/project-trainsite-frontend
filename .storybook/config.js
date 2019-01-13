import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { CodingTrainThemeProvider } from '../src/helpers/style/theme';
import { MemoryRouter as Router } from 'react-router';

addDecorator((fn) => (
  <Router>
    <CodingTrainThemeProvider>
      {fn()}
    </CodingTrainThemeProvider>
  </Router>
));

const req = require.context('../src/', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
