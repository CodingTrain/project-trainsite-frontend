import React from 'react';
import ReactDOM from 'react-dom';
import Button from './index';
import { CodingTrainThemeProvider } from '../../helpers/style/theme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CodingTrainThemeProvider>
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
    </CodingTrainThemeProvider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
