import React from 'react'
import marked from 'marked';
import hljs from 'highlight.js';
import axios from 'axios';
import CircularProgress from 'material-ui/CircularProgress';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import {hashHistory} from 'react-router';

class Item extends React.Component {
  constructor(){
    super();
    this.state={
      rawContent:'',
      wait:true
    }
  }
  componentDidMount(){
    let address = `https://raw.githubusercontent.com/newming/haoduoshipin/master/src/blogs/${this.props.params.item}.md`
    axios.get(address).then((res) => {
      this.setState({
        rawContent: res.data,
        wait:false
      })
    });
  }
  handleBack(){
    // console.log(hashHistory);
    hashHistory.goBack();
  }
  render () {
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    let content = marked(this.state.rawContent!='' ? this.state.rawContent : '请稍等......' );
    let styles={
      h1:{
        backgroundColor: 'rgb(0, 188, 212)',
        lineHeight:'75px',
        textAlign:'center',
        color:'#fff'
      },
      p:{
        lineHeight:'60px',
        textAlign:'center',
        color:'#777'
      },
      circle:{
        textAlign:'center',
        margin:'30px auto'
      },
      smallIcon: {
        width: 32,
        height: 32,
      },
      small: {
        width: 52,
        height: 52,
        padding: 10,
        position:'absolute',
        top:'10px',
        right:'10px',
      },
    }
    return(
      <div>
        <h1 style={styles.h1}>欢迎阅读</h1>
        <IconButton iconStyle={styles.smallIcon} style={styles.small} onClick={this.handleBack.bind(this)}>
          <ArrowBack color='#fff' />
        </IconButton>

        {this.state.wait ? <div style={styles.circle}><CircularProgress size={1.5} /></div> : ''}
        <div className="post-content">
          <span dangerouslySetInnerHTML={{__html: content}} />
        </div>
        <p style={styles.p}>文章内容为本人总结、搜集整理，不保证完全准确，请酌情参考。</p>
      </div>
    )
  }
}

Item.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default Item;
