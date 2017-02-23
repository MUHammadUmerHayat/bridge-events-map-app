import React from 'react';

const RecommendedEvents = (props) => {
  return (
    <div>
    	<hr />
    	<h2>You might also be interested in...</h2>
      <ul>
        {props.events.map((event, i) => {
          return (
          	<li key={i}>{event.title}</li>
          );
        })}
      </ul>
    </div>
  );
};

RecommendedEvents.propTypes = {
  events: React.PropTypes.array,
  event: React.PropTypes.object,
};

export default RecommendedEvents;
