import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render () {
    return(
      <div>
        <div style={{position:'absolute'}}>
          <Link to="/">首页</Link><br/>
          <Link to="blog">博客</Link><br/>
          <Link to="about">关于</Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default App;
