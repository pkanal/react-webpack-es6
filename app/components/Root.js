import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import FirstComp from './FirstComp';

export default class Root extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={FirstComp} />
        </Route>
      </Router>
    );
  }
}
