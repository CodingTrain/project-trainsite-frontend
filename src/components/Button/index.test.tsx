import React from 'react';
import { Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Button from './index';
import { CodingTrainThemeProvider } from '../../helpers/style/theme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CodingTrainThemeProvider>
      <Router>
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
      </Router>
    </CodingTrainThemeProvider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
