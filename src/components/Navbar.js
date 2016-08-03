import React, { PropTypes } from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle(){this.setState({open: !this.state.open})};
  handleClose(){this.setState({open: false})};
  render() {
    let styles={
      menu:{
        textAlign:'center'
      },
      link:{
        textDecoration:'none',
        display:'block',
        color:'#333'
      }
    }
    return (
      <div>
        <IconButton tooltip="menu"
          onClick={this.handleToggle.bind(this)}
          style={{position:'absolute',top:'10px',left:'10px'}}>
          <Menu color="#fff"/>
        </IconButton>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <div style={styles.menu}>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
              <Link to="/" style={styles.link} activeStyle={{color: '#E91E63'}} onlyActiveOnIndex={true}>首页</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
              <Link to="blog" style={styles.link} activeStyle={{color: '#E91E63'}}>博客</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
              <Link to="about" style={styles.link} activeStyle={{color: '#E91E63'}}>关于</Link>
            </MenuItem>
          </div>
        </Drawer>
      </div>
    );
  }
}
Navbar.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default Navbar;
