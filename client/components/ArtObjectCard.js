import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Link, browserHistory } from 'react-router';

class ArtObjectCard extends React.Component {
  constructor(props) {
    super(props)
    this.goToArtObject = this.goToArtObject.bind(this);
    this.sendArtObject = this.sendArtObject.bind(this);
  }

  goToArtObject() {
    browserHistory.push(`/art_objects/${this.props.artObjectId}/`)
  }

  sendArtObject() {
    this.props.getArtObject(this.props.artObjectId);
    this.props.getCollectionTitle(this.props.params.userId, this.props.artObjectId)
  }

  render() {
    return (

      <GridTile onClick={this.sendArtObject}
        key={this.props.artObjectId}
        title={this.props.title}
        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        actionPosition="left"
         titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
        <img src={this.props.image} />
      </GridTile>
    );
  }

}
// To play with if we want to make the image a clickable link

export default ArtObjectCard;
