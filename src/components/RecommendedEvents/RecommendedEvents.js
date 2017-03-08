import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import EventImage from '../EventImage/EventImage';
import {Link} from 'react-router';

export default function RecommendedEvents(props) {
  return (
    <div>
      <h2>You might also be interested in...</h2>
      {props.recommendedEvents.map((event, index) => (
        <Card key={index} className="card" style={styles.card}>
          <CardMedia>
            <Link key={index} to={'/EventDetails/' + event.id} >
              <EventImage src={event.image.perspectivecrop373by249.url} />
            </Link>
          </CardMedia>
          <CardTitle title={event.title} />
          <CardTitle subtitle={event.start_time} />
        </Card>
      ))}
    </div>
  );
}

const styles = {
  card: {
    width: '33.33%',
    float: 'left',
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
