import React from 'react';
import {Link} from 'react-router';

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
              <Link to={'/EventDetails/' + event.id} >
                {event.title} @ {event.venue_name}
              </Link>
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
