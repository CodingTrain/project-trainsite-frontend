import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { CodingTrainThemeProvider } from '../../helpers/style/theme';
import { MemoryRouter as Router } from 'react-router-dom';
import BackToTopButton from '.';

storiesOf('BackToTopButton', module)
  .add('BackToTopButton', () => {
    const style: React.CSSProperties = {
      position: 'relative',
      minHeight: '2000px',
      color: 'white',
      backgroundColor: 'rgb(51,51,51)',
    };
    return (
      <Router>
        <CodingTrainThemeProvider>
          <div style={style}>
            <h2>Top is here, scroll down</h2>
            <h2 style={{ position: 'absolute', bottom: '0px' }}>
            Bottom is here, click the button
            </h2>
          </div>
          <BackToTopButton />
        </CodingTrainThemeProvider>
      </Router>
    );
  });
