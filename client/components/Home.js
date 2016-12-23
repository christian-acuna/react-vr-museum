import React from 'react';
import {GridList} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import CollectionCard from './CollectionCard';
import AtvImg from 'react-atv-img';
import GoogleMapStart from './GoogleMap';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    justifyContent: 'center',
  },
  gridList: {
    width: 900,
    height: '100%',
    overflowY: 'auto',
  },
  map: {
    // width: '50%'
  }
};

const rootDivStyle = {
  // position: 'absolute',
  // top: 150,
  // right: '50%',
  // bottom: 0,
    width: '50%',
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  // backgroundColor: 'rgba(238, 239, 244, 1)',
};


class Home extends React.Component {
  render() {
    return (
      <div style={styles.root}>
        <div><img src="https://res.cloudinary.com/derwsphzd/image/upload/v1482453561/vMUSE_logo_highres2-02_wtmgvg.png" alt=""/></div>
        <div style={rootDivStyle}>
          <AtvImg
            layers={[
              'http://lh4.ggpht.com/hr2NvVMJ1_ER4X-LeyHDBOaKm4aorUB4HaXtrb8JoZwtqZb6xsCnvaBT9r4SQiKK5svwtR0JwQUcYjmqhw71Hx9wfc8=s0',
              // 'http://kloc.pm/images/front.png',
            ]}
            staticFallback="http://kloc.pm/images/kloc-icon-flattened.jpg"
            style={{ width: 420, height: 590 }}
          />

        </div>
        <div style={styles.map}>
          <GoogleMapStart styleObject={{ height: '500px', width: '500px' }} />
        </div>

      </div>
      );
    }

  }

  export default Home;
