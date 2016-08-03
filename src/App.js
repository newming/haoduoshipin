import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Navbar from './components/Navbar.js';

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    return(
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};
export default App;
