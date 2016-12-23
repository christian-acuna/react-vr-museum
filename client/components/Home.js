import React from 'react';
import {GridList} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import CollectionCard from './CollectionCard';
import AtvImg from 'react-atv-img';
import GoogleMapStart from './GoogleMap';
import ScrollAnim from 'rc-scroll-anim'
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Animate from 'rc-animate';
const ScrollOverPack = ScrollAnim.OverPack;
import cssStyles from '../styles/styles.css';

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
  constructor() {
    super(...arguments);
  }
  render() {
    return (

      <div>
      <div className="pack-page page0">
        <QueueAnim className="home-title">
          <div className="page-title" key="title">
            <p>hI!</p>
          </div>
          <div className="page-description" key="c">
            <p>The simple demo</p>
          </div>
        </QueueAnim>
      </div>
      <ScrollOverPack
        id="page1"
        className="page1" replay
        hideProps={{ 0: { reverse: true } }}
      >
        <TweenOne className="tween-one" key="0" animation={{ opacity: 1 }}>
          默认进入与出场
        </TweenOne>
        <QueueAnim key="1">
          <div key="0" className="demo"></div>
          <div key="1" className="demo" style={{ backgroundColor: '#F38EAD' }}></div>
          <div key="2" className="demo"></div>
          <div key="3" className="demo"></div>
        </QueueAnim>
      </ScrollOverPack>

      <ScrollOverPack
        scrollEvent={this.scrollEvent}
        className="pack-page page2"
        style={{ backgroundColor: '#0098CE' }} always={false}
        id="page2"
        hideProps={{ title: { reverse: true } }}
      >
        <TweenOne key="title" animation={{ opacity: 0, type: 'from' }} className="page2-title">
          只进入一次
        </TweenOne>
        <Animate key="0" transitionName="fade" transitionAppear>
          <div className="demo2"></div>
        </Animate>
        <TweenOne className="demo2" animation={{ y: 0, opacity: 1 }} key="1"
          style={{ transform: 'translateY(100px)', opacity: 0 }}
        />
      </ScrollOverPack>

      <ScrollOverPack
        id="page3"
        className="pack-page page3"
        style={{ backgroundColor: '#174270' }}
        playScale={0.8} id="page3"
        hideProps={{ title: { reverse: true }, 1: { reverse: true } }}
      >
        <TweenOne
          animation={{ opacity: 1 }}
          style={{ opacity: 0 }}
          key="title"
          className="page2-title"
        >
          在页面80％时进入
        </TweenOne>
        <Animate key="0" transitionName="fade" transitionAppear>
          <div className="demo"></div>
        </Animate>
        <TweenOne
          className="demo"
          animation={{ y: 0, opacity: 1 }}
          key="1"
          style={{ transform: 'translateY(100px)', opacity: 0 }}
        />
      </ScrollOverPack>
    </div>
      // <div style={styles.root}>
      //   <div style={{ marginTop: '-70px'}}><img src="https://res.cloudinary.com/derwsphzd/image/upload/v1482453561/vMUSE_logo_highres2-02_wtmgvg.png" alt=""/></div>
      //   <div style={rootDivStyle}>
      //     <AtvImg
      //       layers={[
      //         'http://lh4.ggpht.com/hr2NvVMJ1_ER4X-LeyHDBOaKm4aorUB4HaXtrb8JoZwtqZb6xsCnvaBT9r4SQiKK5svwtR0JwQUcYjmqhw71Hx9wfc8=s0',
      //         // 'http://kloc.pm/images/front.png',
      //       ]}
      //       staticFallback="http://kloc.pm/images/kloc-icon-flattened.jpg"
      //       style={{ width: 420, height: 590 }}
      //     />
      //
      //   </div>
      //   <div style={styles.map}>
      //     <h1>View Art From Around the World</h1>
      //     <GoogleMapStart styleObject={{ height: '500px', width: '500px' }} />
      //   </div>
      //
      // </div>
      );
    }

  }

  export default Home;
