import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
        <Router>
          <main>
            <Route exact path="/" render={() => (
              <>
                <img src={pic} style={{ height: '120px' }} />
                <Button link="buttons" background="green">
                  Go to buttons page
                </Button>
              </>
            )} />
            <Route exact path="/buttons" component={Buttons} />
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
      External link
    </Button>
    <Button
      link="/"
      background="red"
      size="big"
    >
      Router link to /
    </Button>
  </div>
);
