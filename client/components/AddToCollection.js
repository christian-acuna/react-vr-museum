import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';



import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';


const styles = {
  plusButton: {
    marginRight: 20,
  },
  buttonContainer:{
    float: 'right'
  },
  addCollectionContainer: {
    padding: '0 16px'
  },
  addToCollectionButton: {
    margin: 12,
  }
};


class AddToCollection extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: this.props.artObjects.showModal,
      openCollections: false,
    };
    // this.handleOpen = this.handleOpen.bind(this)
    this.addToCollection = this.addToCollection.bind(this)
    // this.renderDefault = this.renderDefault.bind(this)
  }

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      openCollections: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose() {
    this.setState({
      openCollections: false,
    });
  };

  addToCollection(collection_id){
    const user_id = localStorage.getItem('user_id')
    this.props.addArtObjectToCollection(user_id, this.props.artObjects.currentArtObject.id, collection_id, this.props.sessions.auth.access_token)
  }

  handleAdd(key) {
    const collectionTitle = this.refs.collectionTitle.input.value;
    const user_id = localStorage.getItem('user_id')

    this.refs.collectionTitle.input.value = ''
    this.props.addNewCollection(collectionTitle, this.props.artObjects.currentArtObject.id)
    var that = this;
    window.setTimeout(function() {
      that.props.getCollectionTitle(user_id, that.props.artObjects.currentArtObject.id)
    }, 1000);
    // this.props.sendLogin(email, password);
    // this.props.hideLoginModal();
  }


  render() {
    return (
      <div style={styles.buttonContainer}>
        <FloatingActionButton
          mini={true}
          secondary={true}
          style={styles.plusButton}
          onClick={this.handleTouchTap.bind(this)}
        >
            <ContentAdd />
        </FloatingActionButton>
        <Popover
          canAutoPosition={true}
          open={this.state.openCollections}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
          onRequestClose={this.handleRequestClose.bind(this)}
        >
          <Menu
            initiallyKeyboardFocused={false}>
            {
              this.props.currentUser.user.collectionTitles.length > 0 ?
              this.props.currentUser.user.collectionTitles.map(function(title,i){

              return (<MenuItem primaryText={title[0]} onClick={this.addToCollection.bind(this, title[1])}/>)
            }.bind(this))
            :
            <div style={styles.addCollectionContainer}>
              <h4 style={{color: 'grey'}}>Object in all Collections</h4>
            </div>
          }
          <Divider />
          <div style={styles.addCollectionContainer}>
            <h4 style={{marginBottom: 0}}></h4>
            <TextField ref="collectionTitle" style={{ width: '60%'}}/>
            <RaisedButton label="Add" primary={true} style={styles.addToCollectionButton} onClick={this.handleAdd.bind(this)} />
          </div>

          </Menu>
        </Popover>
      </div>
    );
  }

}

export default AddToCollection;
