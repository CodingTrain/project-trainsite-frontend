import React from 'react';
import ReactDOM from 'react-dom';
import { VideoCard } from './index';
import { exampleVideo } from '../../helpers/testing';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoCard video={exampleVideo} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
