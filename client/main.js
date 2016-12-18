// let's go!
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Navbar from './components/Navbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <Navbar />
      </MuiThemeProvider>
    );
  }

}

render(<App />, document.getElementById('root'));
