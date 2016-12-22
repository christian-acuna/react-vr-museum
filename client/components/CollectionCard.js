import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Link, browserHistory } from 'react-router';


const style={
  tileFont:{
    fontFamily: 'Roboto',
  }
}

class CollectionCard extends React.Component {
  constructor(props) {
    super(props)
    this.goToCollectionPage = this.goToCollectionPage.bind(this);
  }

  goToCollectionPage() {
    browserHistory.push(`/users/${this.props.user.id}/collections/${this.props.collectionId}`)
  }

  render() {
    return (

      <GridTile 
        style={style.tileFont}
        onClick={this.goToCollectionPage}
        key={this.props.collectionId}
        title={this.props.title}
        actionPosition="left"
         titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
        <img src={this.props.image} />
      </GridTile>
    );
  }

}
// To play with if we want to make the image a clickable link

export default CollectionCard;
