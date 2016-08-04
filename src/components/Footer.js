import React from 'react'

class Footer extends React.Component {
  render () {
    let styles={
      root:{
        backgroundColor:'#212121',
        textAlign:'center'
      },
      text:{
        color:'#fff',
        lineHeight:'160px'
      }
    }
    return(
      <div style={styles.root}>
        <h1 style={styles.text}>早起得鸟儿有虫吃！！</h1>
      </div>
    )
  }
}

export default Footer;
