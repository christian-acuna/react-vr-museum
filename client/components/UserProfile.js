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
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';


const username = localStorage.username

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
  tileFont:{
    fontFamily: 'Roboto',
    padding: '40px',
  },
  button:{
    display:'block',
    margin: '0 auto',
    width: '40%',
  },
  box: {
  	color: 'gray',
  	width: '50%',
     margin: '0 auto',
  	// border: 'solid',
  	// margin: '0 auto',
  	// display: 'block',
  	// width: '50%',
  	// height: '50%',

  	// verticalAlign: 'middle',
  },
  buttonStyle: {
    margin: 12,
  },
};

class UserProfile extends React.Component {

	constructor(props) {
		super(props);

		this.state={
			showCreateCollection:false
		}
		this.showForm = this.showForm.bind(this)
		this.hideForm = this.hideForm.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	componentWillMount() {
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

  showForm(){
  	this.setState({
  		showCreateCollection: true
  	})
  }

  handleChange() {
  	const title = this.refs.title.input.value;
  	const description = this.refs.description.input.value;
  	console.log(title, description)
  	this.hideForm();
  	console.log(this)
  	this.props.addNewCollection(title, 1098);
  }

  hideForm(){
  		this.setState({
  		showCreateCollection: false
  	})
  }
  handleClick(){
  window.location.assign(`https://vmuse-vr.herokuapp.com/users/${localStorage.user_id}/collections`)
  }

  render() {
    return(
    	<div style={styles.tileFont}>
      <RaisedButton
              label={'Enter VR'}
              primary={true} style={styles.button}
              onClick={this.handleClick}

              />
          <br />
          <br />

	  	    <RaisedButton
	  	    		label={`Create a new collection ${username}`}
	  	    		primary={true} style={styles.button}
	  	    		onClick={this.showForm}

	  	    		/>
	  	    <br />
	  	    <br />

	  	    {
	  	    	this.state.showCreateCollection ?
	  	    	<div style={{margin: '0 auto', width: '17%', textAlign: 'center'}}>
	            <TextField ref="title"
	              floatingLabelText="Title"/>
	            <br />

	            <TextField
	              floatingLabelText="Description"
	              ref="description"/>
	              <br />
	              <RaisedButton onClick={this.handleChange} label="Submit"
	                secondary={true}
	                style={styles.buttonStyle}
	              />
          	</div>


	  	    	:
				    	<div style={styles.root}>
					    	<GridList
					          cellHeight={400}
					          cols={3.1}
					          style={styles.gridList}
					        >
					          <Subheader>{`${username}'s Collections`}</Subheader>
					          {this.renderDefault()}
					       </GridList>
					    </div>
	  	    }
      </div>
    );
  }

}

export default UserProfile;
