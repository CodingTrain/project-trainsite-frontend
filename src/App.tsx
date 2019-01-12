import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Support from './components/Support';
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
        <Support />
        <Footer />
      </CodingTrainThemeProvider>
    );
  }
}

export default App;
