import React from 'react';
import EventItem from '../EventItem/EventItem';

export default function EventsList({events}) {
  const titleList = events.map( (element, index) => {
    return (
      <EventItem event={element} key={index}/>
    );
  });

  return (
    <div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>{titleList}</div>
    </div>
  );
}

EventsList.propTypes = {
  events: React.PropTypes.array,
};
