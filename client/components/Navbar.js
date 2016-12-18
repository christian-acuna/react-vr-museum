import React, { Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


const Logged = (props) => (
  <IconMenu
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Profile" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

const Login = (props) => (
  <FlatButton label="Login" />
);

class Navbar extends Component {

  constructor (props) {
    super(props)
    this.state = { open: false, logged: true,}
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleToggle () {
    this.setState({ open: !this.state.open });
  }
  handleClose () {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          style={{backgroundColor: '#EA4E4E'}}
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
        />
        <Drawer open={this.state.open}>
          <AppBar title='AppBar' onTouchTap={this.handleClose} />
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }

}

export default Navbar;
