import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Button from './index';
import { CodingTrainThemeProvider } from '../../helpers/style/theme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
     <CodingTrainThemeProvider>
       <Button
        link="https://thecodingtrain.com/"
        target="_blank"
       >
        External link
       </Button>
       <Button
        link="/"
        colorPair="red"
        size="big"
       >
        react router link
       </Button>
      </CodingTrainThemeProvider>
    </Router>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
