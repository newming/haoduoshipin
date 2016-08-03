import React, { PropTypes } from 'react'

class Home extends React.Component {
  render () {
    let styles={
      root:{
        width:'100vw',
        height:'100vh',
        background: 'url("http://7xopqp.com1.z0.glb.clouddn.com/newming24.jpg") no-repeat fixed center center/cover'
      }
    }
    return(
      <div style={styles.root}>

      </div>
    )
  }
}

export default Home;
