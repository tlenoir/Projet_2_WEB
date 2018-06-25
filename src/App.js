import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import Products from './components/layouts/Products';
import Lifestyles from './components/layouts/Lifestyles';
import Layout from './components/layouts/Layout';
import { Provider } from 'react-redux';
import store from './stores/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/lifestyles" component={Lifestyles} />
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

