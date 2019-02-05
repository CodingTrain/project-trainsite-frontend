import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CodingTrainThemeProvider } from './helpers/style/theme';
import { HeaderImage } from './App.styles';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import BackToTopButton from './components/BackToTopButton';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import CourseIndex from './pages/CourseIndex';

class App extends Component {
  render() {
    return (
      <Router>
        <CodingTrainThemeProvider>
          <Navigation>
            <HeaderImage />
            <main>
              <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="/codingchallenges" component={CourseIndex} />
                <Route path="/tutorials" component={CourseIndex} />
                <Route path="/streams" component={CourseIndex} />
                <Route path="/courses" component={CourseIndex} />
                <Route component={PageNotFound} />
              </Switch>
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
