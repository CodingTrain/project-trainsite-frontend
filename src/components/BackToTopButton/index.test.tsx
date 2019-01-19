import React from 'react';
import ReactDOM from 'react-dom';
import { BackToTopStyles } from './index.styles';
import { CodingTrainThemeProvider } from '../../helpers/style/theme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CodingTrainThemeProvider>
      <BackToTopStyles />
    </CodingTrainThemeProvider>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});
