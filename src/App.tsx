import React from 'react';

import Home from './view/Home';
import BlogWrite from './view/web/BlogWrite';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </>
  );
}
export default App;
