import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import { CodingTrainThemeProvider } from './helpers/style/theme';

class App extends Component {
  render() {
    return (
      <CodingTrainThemeProvider>
        <Header />
        <Button
          link="https://thecodingtrain.com/"
          text="Watch on YT"
        />
        <Button
          link="https://thecodingtrain.com/"
          background="red"
          size="fat"
          text="subscribe on youtube"
        />
      </CodingTrainThemeProvider>
    );
  }
}

export default App;
