import React from 'react'

class Footer extends React.Component {
  render () {
    let styles={
      root:{
        backgroundColor:'#212121',
        textAlign:'center'
      },
      text:{
        color:'#ccc',
        lineHeight:'100px'
      },
      img:{
        maxWidth:'200px'
      },
      wchat:{
        lineHeight:'40px',
        color:'#ccc'
      }
    }
    return(
      <div style={styles.root}>
        <h1 style={styles.text}>越努力 越幸运</h1>
        <p style={styles.wchat}>欢迎添加微信：newming1993</p>
      </div>
    )
  }
}

// <img src="http://7xopqp.com1.z0.glb.clouddn.com/aboutme.jpg" title="me" style={styles.img}/>
export default Footer;
