import React from 'react';
import {connect} from 'react-redux';
import { loadEvents } from '../../actions/eventActions';
import { getCurrentGeoLocation } from '../../actions/geolocationActions';
import { getMarkersList, handleMarkerClick } from '../../actions/markersActions';
import EventsMap from '../../components/EventsMap/EventsMap';
import EventsList from '../../components/EventsList/EventsList';
import CircularProgress from 'material-ui/CircularProgress';

class Home extends React.Component {
  componentDidMount() {
    this.props.getCurrentGeoLocation();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentLocation.lat !== nextProps.currentLocation.lat) {
      const coord = `${nextProps.currentLocation.lat}, ${nextProps.currentLocation.lng}`;
      const position = coord.split(',').join('%2C');
      this.props.loadEvents({
        location: 'Toronto',
        where: position,
        within: 25,
        date: 'Future',
        page_size: '30',
        image_sizes: 'block100,large',
        include: 'categories',
      });
    }

    if (this.props.events !== nextProps.events) {
      this.props.getMarkersList(nextProps.events);
    }
  }

  render() {
    if (this.props.events.length > 0) {
      return (
        <div>
          <div style={{height: '50px', width: '100%', backgroundColor: '#00BCD4'}}/>
          <div style={{width: '80%', margin: '0 auto'}}>
          <h1 style={{margin: '0 auto', color: '#424242', textAlign: 'center', padding: '30px'}}>Things To Do In Your Area</h1>
          {this.props.currentLocation.lat ?
            <EventsMap markers={this.props.markers} currentLocation={this.props.currentLocation} handleMarkerClick={this.props.handleMarkerClick}/> :
          'Loading map' }
          <EventsList events={this.props.events} />
        </div>
      </div>
      );
    }
    return (
      <div style={{background: '#EEEEEE', position: 'absolute', top: '0', bottom: '0', left: '0', right: '0'}}>
        <div style={{textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
          <CircularProgress size={250} thickness={5} />
          <h3 style={{color: '#9E9E9E'}}>LOADING</h3>
        </div>
    </div>
    );
  }
}

Home.propTypes = {
  events: React.PropTypes.array,
  markers: React.PropTypes.array,
  loadEvents: React.PropTypes.func.isRequired,
  getCurrentGeoLocation: React.PropTypes.func.isRequired,
  currentLocation: React.PropTypes.object,
  getMarkersList: React.PropTypes.func.isRequired,
  handleMarkerClick: React.PropTypes.func.isRequired,
};


const mapStateToProps = state => {
  return {
    events: state.events.allEvents,
    recommndedEvents: state.events.recommndedEvents,
    markers: state.markers,
    currentLocation: state.currentLocation,
  };
};

const mapDispatchToProps = {
  loadEvents,
  getCurrentGeoLocation,
  getMarkersList,
  handleMarkerClick,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
