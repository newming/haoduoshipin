import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    return(
      <div>
        <Navbar />
        <div style={{minHeight:'470px'}}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};
export default App;
