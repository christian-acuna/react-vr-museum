import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Navbar from './Navbar';
import SearchInput, {createFilter} from 'react-search-input'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from './SearchBar'
import collections from '../data/collections';
injectTapEventPlugin();


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: collections
    }
  }

  collectionSearch(term) {
    this.setState({
      collections: "answer"
    })
    console.log(term)
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar />
          <SearchBar onSearchTermChange={term=>this.collectionSearch(term)}/>
          <div>
            {React.cloneElement(this.props.children, this.props)}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
