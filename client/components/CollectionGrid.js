import React from 'react';
import {GridList} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import CollectionCard from './CollectionCard';
import SearchInput, {createFilter} from 'react-search-input'
import SearchBar from './SearchBar'
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    justifyContent: 'center',
  },
  gridList: {
    width: 900,
    height: '100%',
    overflowY: 'auto',
  },
  map: {
    // width: '50%'
  },
 
  button:{
    display:'block',
    margin: '0 auto',
    width: '40%',
  },
};

const rootDivStyle = {
  // position: 'absolute',
  // top: 150,
  // right: '50%',
  // bottom: 0,
    width: '50%',
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  // backgroundColor: 'rgba(238, 239, 244, 1)',
};


class CollectionGrid extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      collections: []
    }
    this.renderSearch = this.renderSearch.bind(this)
    this.renderDefault = this.renderDefault.bind(this)
  }
  componentWillMount() {
    this.props.fetchCollections();
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

  renderSearch() {
    return this.state.collections.map((collection, i) => (
      <CollectionCard
        key={i}
        collectionId={collection.id}
        title={collection.title}
        image={collection.primary_object.image_url}
        user={collection.user}

        >
      </CollectionCard>
    ))
  }

  renderDefault() {
    return this.props.collections.collections.map((collection, i) => (
      <CollectionCard
        key={i}
        collectionId={collection.id}
        title={collection.title}
        image={collection.primary_object.image_url}
        user={collection.user}
        >
      </CollectionCard>
    ))
  }

  handleClick(){
    window.location.assign(`https://vmuse-vr.herokuapp.com`)
      
    }

  render() {
    return (
      <div>
        <div>
          <SearchBar onSearchTermChange={term=>this.collectionSearch(term)}/>
        </div>
        <div style={styles.tileFont}>
        <RaisedButton 
              
              label={`Enter VR`} 
              primary={true} style={styles.button} 
              onClick={this.handleClick}

              />
              </div>
          <br />
          <br />
        <div style={styles.root}>


          <GridList
            cellHeight={400}
            cols={3.1}
            style={styles.gridList}
            >
              <Subheader>Collections</Subheader>
              {this.state.collections.length > 0 ? this.renderSearch() : this.renderDefault()}
            </GridList>

          </div>
      </div>
    );
  }

}

export default CollectionGrid;
