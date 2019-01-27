import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { CodingTrainThemeProvider } from '../../helpers/style/theme';
import { VideoCard } from './index';
import { exampleVideo } from '../../helpers/testing';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <CodingTrainThemeProvider>
        <VideoCard video={exampleVideo} />
      </CodingTrainThemeProvider>
    </Router>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
