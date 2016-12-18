import React from 'react';
import {GridList} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import CollectionCard from './CollectionCard';
import collections from '../data/collections';




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
};


class CollectionGrid extends React.Component {

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={400}
          cols={3.1}
          style={styles.gridList}
        >
          <Subheader>Collections</Subheader>
          {collections.map((collection, i) => (
            <CollectionCard
              key={i}
              collectionId={i}
              title={collection.title}
              image={collection.primary_object.image_url}
              >
            </CollectionCard>
          ))}
        </GridList>
      </div>
    );
  }

}

export default CollectionGrid;
