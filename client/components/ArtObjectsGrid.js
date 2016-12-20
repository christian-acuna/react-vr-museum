import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import CollectionCard from './CollectionCard';
import ArtObjectCard from './ArtObjectCard';
import Dialog from 'material-ui/Dialog';

import AddToCollection from './AddToCollection'



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
    // this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
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

          <AddToCollection {...this.props}/>
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
