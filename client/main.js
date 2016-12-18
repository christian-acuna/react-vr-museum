// let's go!
import React from 'react';
import { render } from 'react-dom';
import SearchInput, {createFilter} from 'react-search-input'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Navbar from './components/Navbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();
import collections from './data/collections';
import CollectionGrid from './components/CollectionGrid'
import SearchBar from './components/SearchBar'
// import SearchResults from './components/SearchResults'


class App extends React.Component {
  //store collection we are finding
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

  // searchUpdated (term) {
  //   this.setState({collectionSearch: term})
  // }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar />
          <SearchBar onSearchTermChange={term=>this.collectionSearch(term)}/>
          <CollectionGrid collections={collections} />
        </div>
      </MuiThemeProvider>
    );
  }

}

render(<App />, document.getElementById('root'));
