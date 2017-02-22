import React, { Component } from 'react';
import {connect} from 'react-redux';
import { loadEventDetails } from '../../actions/eventDetailsActions';
// import { loadRecommendedEvents } from '../../actions/eventActions';
import RecommendedEvents from '../../components/RecommendedEvents/RecommendedEvents';

class EventDetails extends Component {

  componentDidMount() {
    this.props.loadEventDetails();
  }

  render() {
    return (
      <div>
        THIS IS WHERE THE DETAILS GO
        <h1> Title: {this.props.details.title} </h1>
        <p> City: {this.props.details.city} </p>
        <RecommendedEvents recommended={this.props.events} />
      </div>
    );
  }

}

EventDetails.propTypes = {
  loadEventDetails: React.PropTypes.func,
  details: React.PropTypes.shape({
    city: React.PropTypes.string,
    title: React.PropTypes.string,
  }),
  // loadRecommendedEvents: React.PropTypes.func,
  events: React.PropTypes.array,
};

const mapStateToProps = state => ({
  details: state.details,
  events: state.events.event,
});

const mapDispatchToProps = {
  loadEventDetails,
  // loadRecommendedEvents,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
