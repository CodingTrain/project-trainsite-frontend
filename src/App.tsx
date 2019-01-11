import React, { Component } from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom';
import './App.css';
import history from './helpers/browser-history'
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
        <Router history={history}>
          <main>
            <Route exact path="/" render={() => (
              <img src={pic} style={{ height: '120px' }} />
            )} />
            <Route exact path="/buttons" component={Buttons} />
            <Route path="*" render={() => (
              <p>
                404 Not found.
              </p>
            )} />
          </main>
        </Router>
        <Footer />
      </CodingTrainThemeProvider>
    );
  }
}

export default App;

const Buttons = () => (
  <div>
    <Button
      link="https://thecodingtrain.com/"
      target="_blank"
    >
      Watch on YT
    </Button>
    <Button
      link="/"
      background="red"
      size="big"
    >
      subscribe on youtube
    </Button>
  </div>
);
