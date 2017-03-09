import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
import EventImage from '../EventImage/EventImage';
import DateFormat from '../DateFormat/DateFormat';
import {Link} from 'react-router';

export default function RecommendedEvents(props) {
  return (
    <div>
      <h2>You might also be interested in...</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
        {props.recommendedEvents.map((event, index) => (
          <Link style={{textDecoration: 'none'}} to={'/EventDetails/' + event.id}>
            <Card key={index} style={{width: '249px', margin: '20px', height: '300px'}}>
              <CardHeader
                title={event.venue_name}
                subtitle={<DateFormat pubDate={event.start_time} />}
              />
              <CardMedia
                overlay={<CardTitle title={event.title}/>}
              >
              <EventImage src={event.image.perspectivecrop373by249.url} style={{height: '276px'}}/>
              </CardMedia>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

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
