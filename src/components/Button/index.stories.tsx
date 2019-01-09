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
        text="Watch on YT"
      />
      <Button
        link="https://thecodingtrain.com/"
        text="subscribe on youtube"
        background="red"
        size="fat"
      />
    </>,
  );
