import React from 'react';
// import {Link} from 'react-router';
import EventItem from '../EventItem/EventItem';

export default function EventsList({events}) {
  const titleList = events.map( (element, index) => {
    return (
      <EventItem event={element} key={index}/>
    );
  });

  return (
    <div>
      <h1>Event List</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>{titleList}</div>
    </div>
  );
}

EventsList.propTypes = {
  events: React.PropTypes.array,
};
