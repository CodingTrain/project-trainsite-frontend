import { VideoType } from '../types';

// This is a port of 129 - Koch Snowflake
export const exampleVideo: VideoType = {
  id: 'X8bXDKqMsXE',
  date: new Date(Date.UTC(2018, 12, 26)),
  title: 'Koch Fractal Snowflake',
  video_number: 129,
  web_editor: 'SJHcVCAgN',

  links: [
    {
      title: 'Support the Processing Foundation',
      url: 'https://processingfoundation.org/support/',
    },
    {
      title: 'Koch Snowflake',
      url: 'https://en.wikipedia.org/wiki/Koch_snowflake',
    },
  ],

  videos: [
    {
      title: 'Vectors',
      video_id: 'mWJkvxQXIa8',
    },
  ],
};
