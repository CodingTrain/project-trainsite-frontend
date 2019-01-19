import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CodingTrainThemeProvider } from './helpers/style/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import SupportTheCodingTrain from './components/SupportTheCodingTrain';
import BackToTopButton from './components/BackToTopButton';
import pic from './assets/images/octocat.png';

class App extends Component {
  render() {
    return (
      <Router>
        <CodingTrainThemeProvider>
            <Header />
            <img src={pic} style={{ height: '120px' }} /><br />
            <main>
              <Route exact path="/" component={SupportTheCodingTrain} />
            </main>
            <Footer />
          <BackToTopButton />
        </CodingTrainThemeProvider>
      </Router>
    );
  }
}

export default App;
