import React from 'react';
import axios from 'axios';
import ArtObjectsGrid from './ArtObjectsGrid';

class UserCollectionGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      art_objects: []
    };
  }

  componentWillMount() {
  const data = axios.get(`https://vr-museum-api.herokuapp.com/v1/users/${this.props.params.userId}/collections/${this.props.params.collectionId}`).then(function(response) {
    console.log(response.data[0].art_objects);
    this.setState({
      art_objects: response.data[0].art_objects
    });
  }.bind(this));

  }
  render() {
    return (
      <ArtObjectsGrid localArtObjects={this.state.art_objects} {...this.props} />
    );
  }

}

export default UserCollectionGrid;
