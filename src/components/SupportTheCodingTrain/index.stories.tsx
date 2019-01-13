import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import SupportTheCodingTrain from './index';

storiesOf('Support', module)
  .add('Support the coding train', () =>
      <SupportTheCodingTrain />,
  );
