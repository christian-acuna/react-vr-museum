import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Navbar from './Navbar';
import SearchInput, {createFilter} from 'react-search-input'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from './SearchBar'
import collections from '../data/collections';
import axios from 'axios';
injectTapEventPlugin();


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: []
    }
  }

  collectionSearch(term) {
    if (term.length > 0) {
      const data = axios.get(`http://localhost:3000/v1/search?q=${term}`).then(function(response) {
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
      <MuiThemeProvider>
        <div>
          <Navbar />
          <SearchBar onSearchTermChange={term=>this.collectionSearch(term)}/>
          <div>
            {React.cloneElement(this.props.children, {searchCollections: this.state.collections, collections: collections})}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
