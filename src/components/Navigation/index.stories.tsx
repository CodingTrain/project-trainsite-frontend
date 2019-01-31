import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { CodingTrainThemeProvider } from '../../helpers/style/theme';
import { MemoryRouter as Router } from 'react-router-dom';
import Navigation from '.';
import { HeaderImage, PageWrapper } from '../../App.styles';

storiesOf('Navigation', module)
  .add('Navigation', () =>
    <Router>
      <CodingTrainThemeProvider>
        <PageWrapper id="page-wrapper">
          <HeaderImage />
          You have to make the screen under 620px wide for the mobile nav to show up.
        </PageWrapper>
        <Navigation />
      </CodingTrainThemeProvider>
    </Router>,
  );
