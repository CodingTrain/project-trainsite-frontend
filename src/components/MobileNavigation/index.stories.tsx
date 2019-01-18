import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { CodingTrainThemeProvider } from '../../helpers/style/theme';
import { MemoryRouter as Router } from 'react-router-dom';
import MobileNavigation from '.';

storiesOf('MobileNavigation', module)
  .add('MobileNavigation', () =>
    <Router>
      <CodingTrainThemeProvider>
        You have to make the screen under 550px wide for this to show up.<br />
        Only the button shows up here, no links popping up :(
        <MobileNavigation />
      </CodingTrainThemeProvider>
    </Router>,
  );
