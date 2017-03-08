import React from 'react';

const EventImage = (props) => (
  <img height={props.height ? props.height : 'auto'} src={props.src} />
);

EventImage.propTypes = {
  src: React.PropTypes.string,
  height: React.PropTypes.string,
};

export default EventImage;
