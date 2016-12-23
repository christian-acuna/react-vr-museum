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

class AllArtObjectCard extends React.Component {
  constructor(props) {
    super(props)
    this.goToArtObject = this.goToArtObject.bind(this);
    this.sendArtObject = this.sendArtObject.bind(this);
  }

  goToArtObject() {
    browserHistory.push(`/artobjects/${this.props.artObjectId}/`)
  }

  sendArtObject() {
    const userId = localStorage.getItem('user_id')
    console.log(userId, '*********USERID*************')
    this.props.getArtObject(this.props.artObjectId);
    this.props.getCollectionTitle(userId, this.props.artObjectId)
  }

  render() {
    return (

      <GridTile 
        style={style.tileFont}
        onClick={this.sendArtObject}
        key={this.props.artObjectId}
        title={this.props.title}
        description={this.props.description}
        actionPosition="left"
         titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
        <img src={this.props.image} />
      </GridTile>
    );
  }

}
// To play with if we want to make the image a clickable link

export default AllArtObjectCard;
