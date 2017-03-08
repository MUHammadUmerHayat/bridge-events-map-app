import React from 'react';
import EventImage from '../EventImage/EventImage';

export default function EventDetailsComponent({ title, city, imageUrl }) {
  return (
    <div>
     <h1> Title: {title} {imageUrl ? <EventImage src={imageUrl} height={'60px'} /> : ''} </h1>
     <p> City: {city} </p>
    </div>
  );
}

EventDetailsComponent.propTypes = {
  title: React.PropTypes.string,
  city: React.PropTypes.string,
  imageUrl: React.PropTypes.string,
};
