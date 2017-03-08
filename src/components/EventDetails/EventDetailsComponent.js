import React from 'react';
import EventImage from '../EventImage/EventImage';

export default function EventDetailsComponent({ title, city, imageUrl }) {
  return (
    <div>
     <h1> Title: {title} </h1>
     {imageUrl ? <EventImage src={imageUrl} height={'200px'} /> : ''}
     <p> City: {city} </p>
    </div>
  );
}

EventDetailsComponent.propTypes = {
  title: React.PropTypes.string,
  city: React.PropTypes.string,
  imageUrl: React.PropTypes.string,
};
