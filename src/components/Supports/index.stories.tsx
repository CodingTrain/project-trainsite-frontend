import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Supports from './index';

storiesOf('Support', module)
  .add('Support coding train', () =>
      <Supports />,
  );
