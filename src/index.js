import React from 'react';
import {render} from 'react-dom';
import {Router,hashHistory,browserHistory} from 'react-router';

import routes from './routes.js';
import './style/common.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(<Router routes={routes} history={browserHistory} />
  ,document.getElementById('root'));
