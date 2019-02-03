import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Button from './index';

storiesOf('Button', module)
  .add('general button', () => (
    <>
      <div style={{ height: '30px' }} />
      <Button
        link="https://thecodingtrain.com/"
        target="_blank"
      >
        External link
      </Button>
      <Button
        link="/"
        background="red"
        size="big"
      >
        react router link
      </Button>
    </>
  ));
