import React, { Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router';
import Dialog from 'material-ui/Dialog';

const styles = {
  navLink: {
    color: 'white',
    textDecoration: 'none',
  },
  dialog: {
    width: '30%',
    maxWidth: 'none',
  },
  buttonStyle: {
    margin: 12,
  },
  header: {
    textAlign: 'center',
  }
}

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



class Navbar extends Component {

  constructor (props) {
    super(props)
    this.state = { open: false, logged: false,}
    this.handleToggle = this.handleToggle.bind(this)
    this.loginModal = this.loginModal.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleToggle () {
    this.setState({ open: !this.state.open });
  }
  handleClose () {
    this.props.hideLoginModal();
  }

  loginModal() {
    console.log('hhohueou')
    this.props.showLoginModal();
  }

  render() {
    const Login = (props) => (
      <FlatButton onClick={this.loginModal} label="Login" />
    );

    const LoginModal = (props) => (
      <Dialog
        title="Login"
        modal={false}
        open={this.props.sessions.loginVisible}
        onRequestClose={this.handleClose}
        contentStyle={styles.dialog}
        style={styles.header}
      >
        <div>
          <TextField
            floatingLabelText="Email"/>
          <br />
          <TextField
            floatingLabelText="Password"
            type="password"/>
            <br />
            <RaisedButton label="Submit"
              secondary={true}
              style={styles.buttonStyle}
            />
        </div>
      </Dialog>
    )

    return (
      <div>
        <LoginModal />
        <AppBar
          title={<Link to="/" style={ styles.navLink }>Home</Link>}
          showMenuIconButton={false}
          style={{backgroundColor: '#7C7877'}}
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
        />
      </div>
    );
  }

}

export default Navbar;
