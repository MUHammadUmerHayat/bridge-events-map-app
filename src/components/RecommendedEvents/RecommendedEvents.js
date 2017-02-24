import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    overflowY: 'hidden',
    // height: '235px',
  },
  titleStyle: {
    color: '#fff',
  },
  // imageStyle: {
  //   width: '290px',
  //   height: '250px',
  // },
  pStyle: {
    marginRight: '20px',
  },
};

const getImage = (event) => {
  let url;
  if (event.image) {
    url = event.image.perspectivecrop290by250.url;
    console.log(event);
  } else {
    url = 'http://placehold.it/290x250';
  }
  return url;
};

const RecommendedEvents = (props) => (
  <div>
    <h2>You might be interested in...</h2>
    <div style={styles.root}>
      <GridList style={styles.gridList} cols={2.2}>
        {props.events.map((event, index) => (
          <GridTile
            key={index}
            title={event.title}
            cols={5}
            // style={styles.imageStyle}
            titleStyle={styles.titleStyle}
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          >
            <img src={getImage(event)} />
          </GridTile>
        ))}
      </GridList>
    </div>
  </div>
);

// http://api.eventful.com/json/categories/list?app_key=3RXRMbCtSm89nDRV

RecommendedEvents.propTypes = {
  events: React.PropTypes.array,
  event: React.PropTypes.object,
};

export default RecommendedEvents;
