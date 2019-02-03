import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CodingTrainThemeProvider } from './helpers/style/theme';
import { HeaderImage } from './App.styles';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import BackToTopButton from './components/BackToTopButton';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <CodingTrainThemeProvider>
          <Navigation>
            <HeaderImage />
            <main>
              <Route exact path="/" component={Home} />
            </main>
            <Footer />
            <BackToTopButton />
          </Navigation>
        </CodingTrainThemeProvider>
      </Router>
    );
  }
}

export default App;
