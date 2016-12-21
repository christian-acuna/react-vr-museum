import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import List from 'material-ui/List/List';
import {GridList} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import CollectionCard from './CollectionCard';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 900,
    height: '100%',
    overflowY: 'auto',
    color: 'gray'
  },
};

class UserProfile extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		console.log("hi")
		this.props.getUserCollections()
	}

	renderDefault() {
    return this.props.currentUser.user.collections.map((collection, i) => (
      <CollectionCard
      	style={styles.card}
        key={i}
        collectionId={collection.id}
        title={collection.title}
        image={collection.primary_object.image_url}
        user={collection.user}
        >
      </CollectionCard>
    ))
  }

  render() {
    return(
    	<div>
	      <h2>User Profile</h2>
	    	<ListItem
      disabled={true}
      leftAvatar={
        <Avatar
          icon={<FontIcon className="muidocs-icon-communication-voicemail" />}
          backgroundColor={'#D9D4CF'}
        />
      }
    >
    {localStorage.username}
  
    </ListItem>
	    	<div style={styles.root}>
		    	<GridList
		          cellHeight={400}
		          cols={3.1}
		          style={styles.gridList}
		        >
		          <Subheader>User Collections</Subheader>
		          {this.renderDefault()}
		       </GridList>
		    </div>
      </div>
    );
  }

}

export default UserProfile;

    // <ul>
    // 	{
    // 		this.props.currentUser.user.collections.map((collection,i) => {
    // 			return(
    // 				<div>
    // 		<li>{collection.title}</li>
    // 		<img src={collection.primary_object.image_url} /></div>
    // 		)
    // 	})
    // }
    // </ul>