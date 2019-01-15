import React from 'react';
import ReactDOM from 'react-dom';
import MobileNavigation from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MobileNavigation />, div);
  ReactDOM.unmountComponentAtNode(div);
});
