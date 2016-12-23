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
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1400px',
    marginLeft: '100px',
    marginRight: '100px',
    // margin: '0 auto',
    justifyContent: 'center',
  },
  gridList: {
    width: 900,
    height: '100%',
    overflowY: 'auto',
  },
  buttonContainer: {
    textAlign: 'center'
  },
  buttons: {
    margin: 12,
    width: '80%',
    marginTop: '20px'
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
              <img style={{ width: '70%', height: 'auto' }} src="https://res.cloudinary.com/derwsphzd/image/upload/v1482453561/vMUSE_logo_highres2-02_wtmgvg.png" alt=""/>
          </div>
        </QueueAnim>
      </div>
      <ScrollOverPack
        id="page1"
        className="page1" replay
        hideProps={{ 0: { reverse: true } }}
      >
        <TweenOne className="tween-one" key="0" animation={{ opacity: 1 }}>
          View Art From Around the World
        </TweenOne>
        <QueueAnim key="1">
          <div style={styles.root}>
            <div style={rootDivStyle}>
              <AtvImg
                layers={[
                  'https://lh5.ggpht.com/p1wTtNm7TSDtleExnv5Gxg8sJ66ed6u6MXZW-Q6onee_CCNgD2z4e7ce09fRIR9_eEReBXGKCGwukwY4WOIqGlsI5ZY=s0'
                ]}
                staticFallback="http://kloc.pm/images/kloc-icon-flattened.jpg"
                style={{ width: 520, height: 490 }}
              />

            </div>
            <div style={styles.map}>
              <h1>View Art From Around the World</h1>
              <GoogleMapStart styleObject={{ height: '490px', width: '520px' }} />
            </div>

          </div>
        </QueueAnim>
      </ScrollOverPack>

      <ScrollOverPack
        scrollEvent={this.scrollEvent}
        className="pack-page page2"
        style={{ backgroundColor: '#ede0ce' }} always={false}
        id="page2"
        hideProps={{ title: { reverse: true } }}
      >
        <TweenOne key="title" animation={{ opacity: 0, type: 'from' }} className="page2-title">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/IpjyW_xdDrY" frameborder="0" allowfullscreen></iframe>
        </TweenOne>
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
          Explore Now
        </TweenOne>
        <Animate key="0" transitionName="fade" transitionAppear>
          <div style={styles.buttonContainer} className="demo"><Link to='/artobjects'><RaisedButton label="View Art" style={styles.buttons} /></Link></div>
        </Animate>
        <TweenOne
          className="demo"
          animation={{ y: 0, opacity: 1 }}
          key="1"
          style={{ transform: 'translateY(100px)', opacity: 0 }}
        > <div style={styles.buttonContainer} className="demo"><Link to='/collections'>
          <RaisedButton primary={true} label="View Collections" style={styles.buttons} />
        </Link></div>
      </TweenOne>
      </ScrollOverPack>
    </div>

      );
    }

  }

  export default Home;
