import React, { PropTypes } from 'react'

class PageNotFound extends React.Component {
  render () {
    let styles={
      h1:{
        textAlign:'center',
        lineHeight:'200px'
      }
    }
    return(
      <h1 style={styles.h1}>亲，您访问的页面不存在呦，请核对地址再次尝试。</h1>
    )
  }
}

export default PageNotFound;
