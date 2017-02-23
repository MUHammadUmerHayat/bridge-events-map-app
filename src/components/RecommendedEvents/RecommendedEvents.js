import React from 'react';

export default function RecommendedEvents(props) {
  return (
    <div>
    	<hr />
    	<h2>You might also be interested in...</h2>
      <div>
        {props.events.map((event, i) => {
          console.log(event);
          return (
          	<p key={i}>
              {event.title} @ {event.venue_name}
            </p>
          );
        })}
        </div>
    </div>
  );
}

RecommendedEvents.propTypes = {
  events: React.PropTypes.array,
  event: React.PropTypes.object,
};
