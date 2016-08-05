import React from 'react'
import map from 'lodash/fp/map';

import BlogCard from './BlogCard.js';
import blogs from '../blogs/blogs.js';

class BlogsList extends React.Component {
  render () {
    // console.log(this.props.search)
    var blogCards = [];
    if (this.props.search=='') {
      map((b) => {blogCards.push(<BlogCard title={b.title} date={b.date} index={b.index} key={Math.random()} url={b.url}/>);},blogs);
    }else {
      // 去掉了正则验证，因为输入反斜杠出错
      // let query=new RegExp(this.props.search,"i");
      for (var i = 0; i < blogs.length; i++) {
        // if (query.test(blogs[i].title)) {
        if (blogs[i].title.indexOf(this.props.search)!= -1) {
          blogCards.push(<BlogCard title={blogs[i].title} date={blogs[i].date} index={blogs[i].index} key={Math.random()} url={blogs[i].url} />)
        }
      }
    }

    let styles={
      root:{
        maxWidth:'700px',
        padding:'30px 10px',
        margin:'0 auto',
      }
    }
    return(
      <div style={styles.root}>
        {blogCards}
      </div>
    )
  }
}

export default BlogsList;
