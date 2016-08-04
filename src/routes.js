import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.js';
import Home from './containers/Home.js';
import About from './containers/About.js';
import Blog from './containers/Blog.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="blog" component={Blog} />
    <Route path="about" component={About} />
  </Route>
)
