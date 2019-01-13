import React from 'react';
import ReactDOM from 'react-dom';
import SupportTheCodingTrain from './index';
import { CodingTrainThemeProvider } from '../../helpers/style/theme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CodingTrainThemeProvider>
      <SupportTheCodingTrain />
    </CodingTrainThemeProvider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
