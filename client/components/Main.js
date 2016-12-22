import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Navbar from './Navbar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import axios from 'axios';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto'
});



class Main extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Navbar {...this.props} />
          <div>
            {React.cloneElement(this.props.children, {...this.props} )}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
