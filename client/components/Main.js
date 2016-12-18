import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Navbar from './Navbar';
import SearchInput, {createFilter} from 'react-search-input'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SearchBar from './SearchBar'
import collections from '../data/collections';
import axios from 'axios';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto'
});



class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: []
    }
  }

  collectionSearch(term) {
    if (term.length > 0) {
      const data = axios.get(`https://vr-museum-api.herokuapp.com/v1/search?q=${term}`).then(function(response) {
        console.log(response);
        console.log(this);
        this.setState({
          collections: response.data
        })
      }.bind(this));
    } else {
      this.setState({
        collections: []
      })
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Navbar />
          <SearchBar onSearchTermChange={term=>this.collectionSearch(term)}/>
          <div>
            {React.cloneElement(this.props.children, {...this.props, searchCollections: this.state.collections} )}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
