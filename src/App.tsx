import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import SupportTheCodingTrain from './components/SupportTheCodingTrain';
import MobileNavigation from './components/MobileNavigation'
import { CodingTrainThemeProvider } from './helpers/style/theme';
import pic from './assets/images/octocat.png';

class App extends Component {
  render() {
    return (
      <CodingTrainThemeProvider>
        <Header />
        <img src={pic} style={{ height: '120px' }}/><br />
        <Router>
          <main>
            <Route exact path="/" component={SupportTheCodingTrain} />
          </main>
        </Router>
        <Footer />
        <MobileNavigation />
      </CodingTrainThemeProvider>
    );
  }
}

export default App;
