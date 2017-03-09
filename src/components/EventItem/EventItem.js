import React from 'react';
import {Link} from 'react-router';
import DateFormat from '../DateFormat/DateFormat';
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';

export default function EventItem({event}) {
  return (
    <Link style={{textDecoration: 'none'}} to={'/EventDetails/' + event.id}>
     <Card style={{width: '320px', margin: '20px', height: '346px'}}>
      <CardHeader
        title={event.venue_name}
        subtitle={<DateFormat pubDate={event.start_time} />}
      />
      <CardMedia
        overlay={<CardTitle title={event.title}/>}
      >
      <img src={event.image.perspectivecrop373by249.url} style={{height: '276px'}}/>
      </CardMedia>
     </Card>
    </Link>
  );
}

EventItem.propTypes = {
  event: React.PropTypes.object,
};
