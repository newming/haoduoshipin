import React from 'react';
import {render} from 'react-dom';
import {Router,hashHistory} from 'react-router';

import routes from './routes.js';
import './style/common.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(<Router routes={routes} history={hashHistory} />
  ,document.getElementById('root'));
