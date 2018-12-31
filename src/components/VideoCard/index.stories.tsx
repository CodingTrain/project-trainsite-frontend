import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { exampleVideo } from '../../helpers/testing';

import { VideoCard } from '.';

storiesOf('Video Card', module)
  .add('With a video', () =>
    <VideoCard
      video={exampleVideo}
    />,
  );
