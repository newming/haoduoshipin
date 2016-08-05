import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.js';
import Home from './containers/Home.js';
import About from './containers/About.js';
import Blog from './containers/Blog.js';
import Item from './containers/Item.js';
import PageNotFound from './components/PageNotFound.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="blog" component={Blog} />
    <Route path="about" component={About} />
    <Route path="blog/:item" component={Item} />
    <Route path="*" component={PageNotFound} />
  </Route>
)
