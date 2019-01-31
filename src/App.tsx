import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CodingTrainThemeProvider } from './helpers/style/theme';
import { HeaderImage, PageWrapper } from './App.styles';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import BackToTopButton from './components/BackToTopButton';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <CodingTrainThemeProvider>
          {/* PageWrapper is necessary for the blur effect */}
          <PageWrapper id="page-wrapper">
            <HeaderImage />
            <main>
              <Route exact path="/" component={Home} />
            </main>
            <Footer />
          <BackToTopButton />
          </PageWrapper>
          <Navigation />
        </CodingTrainThemeProvider>
      </Router>
    );
  }
}

export default App;
