import React, { PropTypes } from 'react'

class App extends React.Component {
  render () {
    return(
      <div>
        app
        {this.props.children}
      </div>
    )
  }
}

export default App;
