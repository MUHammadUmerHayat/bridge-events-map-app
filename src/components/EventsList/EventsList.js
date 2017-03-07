import React from 'react';
import {Link} from 'react-router';
import './EventsList.css';

export default function EventsList({events}) {
  let imgUrl = '';
  const titleList = events.map( (element, index) => {
    imgUrl = element.image.perspectivecrop290by250.url;
    return (
        <li className="eventItem" key={index}>
          <p>{element.title}</p>
          {/* <img src={imgUrl} alt={element.title} onError="this.src='../../assets/img/books.jpg';"/> */}
          <img src={imgUrl} alt={element.title}/>
          <span>{element.venue_name}</span>
          <span>{element.stop_time}</span>
          <Link className="eventLink" to={'/EventDetails/' + element.id}>View Details
          </Link>
        </li>
    );
  });

  return (
    <div>
      <h1 className="allEvents">Event List</h1>
      <ul className="eventsGrid">{titleList}</ul>
    </div>
  );
}

EventsList.propTypes = {
  events: React.PropTypes.array,
};
