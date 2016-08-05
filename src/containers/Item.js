import React from 'react'
import marked from 'marked';
import hljs from 'highlight.js';
import axios from 'axios';

class Item extends React.Component {
  constructor(){
    super();
    this.state={
      rawContent:''
    }
  }
  componentDidMount(){
    let address = 'https://raw.githubusercontent.com/newming/newming.github.io/master/README.md';
    axios.get(address).then((res) => {
      this.setState({
        rawContent: res.data
      })
    });
  }
  render () {
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    let content = marked(this.state.rawContent!='' ? this.state.rawContent : 'loading');
    return(
      <div className="post-content">
        <span dangerouslySetInnerHTML={{__html: content}} />
      </div>
    )
  }
}

export default Item;
