import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { createHistory, useBasename } from 'history'

var root = PUBLIC_PATH;

if(root.substr(-1) === '/') {
  root = root.substr(0, root.length-1);
}

let history = useBasename(createHistory)({
  basename: root
})

ReactDOM.render(
  <Root history={history} />,
  document.getElementById('app')
);
