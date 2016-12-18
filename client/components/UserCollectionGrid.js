import React from 'react';
import axios from 'axios';

class UserCollectionGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collection: []
    };
  }

  componentWillMount() {
  const data = axios.get(`http://localhost:3000/v1/users/${this.props.params.userId}/collections/${this.props.params.collectionId}`).then(function(response) {
    console.log(response);
    // photoGrid.setState({
    //   photos: response.data
    // });
  });

  }
  render() {
    return (
      <h1>{this.props.params.userId}</h1>
    );
  }

}

export default UserCollectionGrid;
