import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { CodingTrainThemeProvider } from './helpers/style/theme';

class App extends Component {
  render() {
    return (
      <CodingTrainThemeProvider>
        <Header />
      </CodingTrainThemeProvider>
    );
  }
}

export default App;
