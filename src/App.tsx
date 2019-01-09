import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import { CodingTrainThemeProvider } from './helpers/style/theme';
import pic from './assets/images/octocat.png';

class App extends Component {
  render() {
    return (
      <CodingTrainThemeProvider>
        <Header />
        <img src={pic} style={{ height: '120px' }}/><br />
        <Button
          link="https://thecodingtrain.com/"
          text="Watch on YT"
          target="_blank"
        />
        <Button
          link="https://thecodingtrain.com/"
          background="red"
          size="fat"
          text="subscribe on youtube"
        />
        <Footer />
      </CodingTrainThemeProvider>
    );
  }
}

export default App;
