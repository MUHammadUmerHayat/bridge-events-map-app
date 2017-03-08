import React from 'react';
import {Link} from 'react-router';
import DateFormat from '../DateFormat/DateFormat';
import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

export default function EventItem({event}) {
  return (
  // <li className="eventItem">
  //   <p>{event.title}</p>
  //   {/* <img src={imgUrl} alt={element.title} onError="this.src='../../assets/img/books.jpg';"/> */}
  //   <img src={event.image.perspectivecrop290by250.url} alt={event.title}/>
  //   <span>{event.venue_name}</span>
  //   <span>{event.stop_time}</span>
  //   <Link className="eventLink" to={'/EventDetails/' + event.id}>View Details
  //   </Link>
  // </li>
  <GridTile
    style={{width: '320px', height: '320px', margin: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.25), 0 1px 4px rgba(0,0,0,0.25)'}}
    key={event.title}
    title={<Link style={{color: 'white', textDecoration: 'none'}} to={'/EventDetails/' + event.id}>{event.title}</Link>}
    subtitle={<div><span><b>{event.venue_name}</b></span><DateFormat pubDate={event.start_time}/></div>}
    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
    actionPosition="left"
    titlePosition="top"
    titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
    cols={event.title ? 2 : 1}
    rows={event.title ? 2 : 1}
    >
        <img src={event.image.perspectivecrop290by250.url} alt={event.title}/>
    </GridTile>
  );
}

EventItem.propTypes = {
  event: React.PropTypes.object,
};
