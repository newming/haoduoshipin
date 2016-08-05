import React from 'react';

import Search from '../components/Search';
import BlogsList from '../components/BlogsList';

class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      search:''
    }
  }
  cardSearch(x){
    this.setState({search:x})
  }
  render () {
    let styles={
      root:{
        backgroundColor:'#00BCD4',
      },
    }
    return(
      <div>
        <div style={styles.root}>
          <Search handelSearch={this.cardSearch.bind(this)} />
        </div>
        <BlogsList search={this.state.search} />
      </div>
    )
  }
}

export default Blog;
