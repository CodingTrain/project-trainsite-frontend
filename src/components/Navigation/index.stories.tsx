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
        <PageWrapper>
          <HeaderImage />
          You have to make the screen under 620px wide for the mobile nav to show up.<br/>
          No blur effect for some mysterious reason work here.
        </PageWrapper>
        <Navigation />
      </CodingTrainThemeProvider>
    </Router>,
  );
