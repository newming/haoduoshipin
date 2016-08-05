import React, { PropTypes } from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      btnColor:true,
      title:'Home'
    };
  }
  handleToggle(){this.setState({open: !this.state.open})};
  handleClose(){this.setState({open: false})};
  componentWillMount(){
    this.setNavState();
  }
  componentWillReceiveProps(nextProps) {
    this.setNavState();
  }
  setNavState(){
    this.setState({
      btnColor: this.context.router.isActive('/about') ? false : true,
      title:this.context.router.isActive('/', true) ? 'HOME' :
        this.context.router.isActive('/blog')? 'BLOG' :
        this.context.router.isActive('/about')? 'ABOUT' : 'HOME'
    });
  }
  render() {
    let styles={
      menu:{
        textAlign:'center'
      },
      smallIcon:{
        width:'32px',
        height:'32px'
      },
      small:{
        position:'absolute',
        top:'10px',
        left:'10px',
        width:'52px',
        height:'52px',
        padding:'10px'
      },
      link:{
        textDecoration:'none',
        display:'block',
        color:'#333'
      },
      navTitle:{
        color:'#fff',
        lineHeight:'2.8',
        fontSize:'20px',
        backgroundColor:'#00BCD4',
        marginBottom:'10px'
      }
    }
    return (
      <div>
        <IconButton tooltip="menu"
          onClick={this.handleToggle.bind(this)}
          iconStyle={styles.smallIcon}
          style={styles.small}>
          {this.state.btnColor ? <Menu color='#fff'/> : <Menu color='#00BCD4'/>}
        </IconButton>
        <Drawer
          docked={false}
          width={260}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})} >
          <div style={styles.menu}>
            <p style={styles.navTitle} onClick={this.handleClose.bind(this)}>NEWMING@{this.state.title}</p>
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
