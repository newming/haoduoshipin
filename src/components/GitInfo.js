import React from 'react';
import Paper from 'material-ui/Paper';

class GitInfo extends React.Component {
  render () {
    let styles={
      root:{
        textAlign:'center'
      },
      img:{
        borderRadius:'50%',
        width:'100%',
        maxWidth:'150px',
        boxShadow: 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px'
      }
    }
    // console.log(this.props.info);
    return(
      <div style={styles.root}>
        <img src={this.props.info.avatar_url} style={styles.img} />
        <Paper className='gitinfo'>
          <div className='gitinfo-card'>
            <p>repos</p><span>{this.props.info.public_repos}</span>
          </div>
          <div className='gitinfo-card'>
            <p>followers</p><span>{this.props.info.followers}</span>
          </div>
          <div className='gitinfo-card'>
            <p>following</p><span>{this.props.info.following}</span>
          </div>
        </Paper>
      </div>
    )
  }
}

export default GitInfo;
