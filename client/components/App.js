import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Navbar from './Navbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();


class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar />
          <div>
            {React.cloneElement(this.props.children, this.props)}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
