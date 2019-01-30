import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
// import Button from './components/Button';
import SupportTheCodingTrain from './components/SupportTheCodingTrain';
import Navigation from './components/Navigation';
import { CodingTrainThemeProvider } from './helpers/style/theme';
import { HeaderImage, PageWrapper } from './App.styles';
import pic from './assets/images/octocat.png';

class App extends Component {
  render() {
    return (
      <Router>
        <CodingTrainThemeProvider>
          {/* PageWrapper is necessary for the blur effect */}
          <PageWrapper id="page-wrapper">
            <HeaderImage />
            <img src={pic} style={{ height: '120px' }} /><br />
            <main>
              <Route exact path="/" component={SupportTheCodingTrain} />
            </main>
            <Footer />
          </PageWrapper>
          <Navigation />
        </CodingTrainThemeProvider>
      </Router>
    );
  }
}

export default App;
