import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Button from './index';

storiesOf('Button', module)
  .add('general button', () =>
    <>
      <div style={{ height: '30px' }}></div>
      <Button
        link="https://thecodingtrain.com/"
        target="_blank"
      >
        Watch on YT
      </Button>
      <Button
        link="https://thecodingtrain.com/"
        background="red"
        size="big"
      >
        subscribe on youtube
      </Button>
    </>,
  );
