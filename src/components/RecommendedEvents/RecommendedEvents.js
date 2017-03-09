import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
import DateFormat from '../DateFormat/DateFormat';
import {Link} from 'react-router';

export default function RecommendedEvents(props) {
  return (
    <div>
      <h3 style={styles.title}>More events happening nearby</h3>
      <div style={styles.flex}>
        {props.recommendedEvents.map((event, index) => (
          <Link key={index} style={{textDecoration: 'none'}} to={'/EventDetails/' + event.id}>
            <Card style={styles.card}>
              <CardHeader
                title={event.venue_name}
                subtitle={<DateFormat pubDate={event.start_time} />}
              />
              <CardMedia
                overlay={<CardTitle title={event.title}/>}
              >
               <img src={event.image.perspectivecrop373by249.url} style={{height: '236px'}}/>
              </CardMedia>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = {
  title: {
    margin: '0 auto',
    color: '#424242',
    textAlign: 'center',
    padding: '30px 0 20px 0',
  },
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '280px',
    margin: '20px',
    height: '306px',
    marginBottom: '50px',
  },
};

// http://api.eventful.com/json/categories/list?app_key=3RXRMbCtSm89nDRV

RecommendedEvents.propTypes = {
  recommendedEvents: React.PropTypes.array,
  event: React.PropTypes.shape({
    image: React.PropTypes.shape({
      perspectivecrop373by249: React.PropTypes.shape({
        url: React.PropTypes.string,
      }),
    }),
  }),
};
