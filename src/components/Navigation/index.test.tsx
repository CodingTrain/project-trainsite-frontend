import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './index';
import { CodingTrainThemeProvider } from '../../helpers/style/theme';
import { MemoryRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <CodingTrainThemeProvider>
        <Navigation />
      </CodingTrainThemeProvider>
    </Router>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});
