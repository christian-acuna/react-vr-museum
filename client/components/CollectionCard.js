import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class CollectionCard extends React.Component {

  render() {
    return (
      <GridTile
        key={this.props.collectionId}
        title={this.props.title}
        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        actionPosition="left"
        titlePosition="top"
        titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={this.props.image} />
      </GridTile>
    );
  }

}

export default CollectionCard;
