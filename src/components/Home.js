import React, { PropTypes } from 'react'

class Home extends React.Component {
  render () {
    let styles={
      root:{
        width:'100vw',
        height:'100vh',
        background: 'url("http://7xopqp.com1.z0.glb.clouddn.com/newming24.jpg") no-repeat fixed center center/cover'
      },
      title:{
        color:'#fff',
        textAlign:'center',
        paddingTop:'30%'
      }
    }
    return(
      <div style={styles.root}>
        <h1 style={styles.title}>欢迎光临</h1>
      </div>
    )
  }
}

export default Home;
