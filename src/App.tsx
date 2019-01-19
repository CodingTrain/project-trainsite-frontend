import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CodingTrainThemeProvider } from './helpers/style/theme';
import { PageWrapper } from './App.styles';
import Header from './components/Header';
import Footer from './components/Footer';
import SupportTheCodingTrain from './components/SupportTheCodingTrain';
import MobileNavigation from './components/MobileNavigation';
import BackToTopButton from './components/BackToTopButton';
import pic from './assets/images/octocat.png';

class App extends Component {
  render() {
    return (
      <Router>
        <CodingTrainThemeProvider>
          {/* PageWrapper is necessary for the blur effect */}
          <PageWrapper id="page-wrapper">
            <Header />
            <img src={pic} style={{ height: '120px' }} /><br />
            <main>
              <Route exact path="/" component={SupportTheCodingTrain} />
            </main>
            <Footer />
          </PageWrapper>
          <MobileNavigation />
          <BackToTopButton />
        </CodingTrainThemeProvider>
      </Router>
    );
  }
}

export default App;
