import React from 'react';
import { Route, Router,IndexRoute, browserHistory } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import App from './App';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;