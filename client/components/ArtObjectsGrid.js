import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import CollectionCard from './CollectionCard';
import ArtObjectCard from './ArtObjectCard';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



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
  },
  dialog: {
    width: '60%',
    maxWidth: 'none',
  },
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



class ArtObjectsGrid extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: this.props.artObjects.showModal,
      openCollections: false,
    };
    // this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.addToCollection = this.addToCollection.bind(this)
    // this.renderDefault = this.renderDefault.bind(this)
  }

  // handleOpen () {
  //   this.setState({open: true});
  // };
  //
  handleClose () {
    console.log('1213123');
    this.props.closeArtObjectModal();
  };

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      openCollections: true,
      anchorEl: event.currentTarget,
    });
  };

  renderDefault() {
    return this.props.localArtObjects.map((artObject, i) => (
      <ArtObjectCard
        key={i}
        artObjectId={artObject.id}
        title={artObject.title}
        image={artObject.image_url}
        user={artObject.user}
        {...this.props}
        >
      </ArtObjectCard>
    ))
  }

  addToCollection(collection_id){
    this.props.addArtObjectToCollection(this.props.params.userId, this.props.artObjects.currentArtObject.id, collection_id, this.props.sessions.auth.access_token)
  }

  handleRequestClose() {
    this.setState({
      openCollections: false,
    });
  };


  render() {
    return (
      <div style={styles.root}>
        <Dialog
          title={this.props.artObjects.currentArtObject.title}
          modal={false}
          open={this.props.artObjects.showModal}
          onRequestClose={this.handleClose}
          contentStyle={styles.dialog}
        >
          <GridList
            cellHeight={400}
            cols={2}
            style={styles.gridList}
          >
            <GridTile>
              <img src={this.props.artObjects.currentArtObject.image_url} />
            </GridTile>
          </GridList>

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
              <Menu>
                {
                  this.props.currentUser.user.collectionTitles.map(function(title,i){

                  return (<MenuItem primaryText={title[0]} onClick={this.addToCollection.bind(this, title[1])}/>)
                }.bind(this))
              }
              <Divider />
              <div style={styles.addCollectionContainer}>
                <h4 style={{marginBottom: 0}}>Create Collection</h4>
                <TextField style={{ width: '73%'}}/>
                <RaisedButton label="Add" primary={true} style={styles.addToCollectionButton} />
              </div>

              </Menu>
            </Popover>
          </div>

        </Dialog>
        <GridList
          cellHeight={400}
          cols={3.1}
          style={styles.gridList}
        >
          <Subheader>Art Objects</Subheader>
          { this.renderDefault()}
        </GridList>

      </div>
    );
  }

}

export default ArtObjectsGrid;
