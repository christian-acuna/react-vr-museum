import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import List from 'material-ui/List/List';


class UserProfile extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		console.log("hi")
		this.props.getUserCollections()
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

    <h3>User Collections</h3>
    <ul>
    	{
    		this.props.currentUser.user.collections.map((collection,i) => {
    			return(
    		<li>{collection.title}</li>
    		)
    	})
    }
    </ul>

      </div>
    );
  }

}

export default UserProfile;