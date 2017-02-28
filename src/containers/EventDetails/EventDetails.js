import React, { Component } from 'react';
import {connect} from 'react-redux';
import { loadEventDetails } from '../../actions/eventDetailsActions';
import { loadEvents } from '../../actions/eventActions';
import RecommendedEvents from '../../components/RecommendedEvents/RecommendedEvents';
import EventDetailsComponent from '../../components/EventDetails/EventDetailsComponent';

class EventDetails extends Component {

  componentDidMount() {
    // Put ID into the action
    this.props.loadEventDetails(this.props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.details !== nextProps.details) {
      this.props.loadEvents({
        location: nextProps.details.city,
        page_size: 3,
        categories: nextProps.details.categories.category.map(cat => cat.id),
        venue_id: nextProps.details.venue_id,
      });
    }
  }

  render() {
    let recommended = null;
    if (this.props.events) {
      recommended = <RecommendedEvents events={this.props.events} />;
    }
    if (this.props.details) {
      return (
        <div>
          <EventDetailsComponent title={this.props.details.title}
            city={this.props.details.city} />
          {recommended}
        </div>
      );
    }
    return null;
  }
}

EventDetails.propTypes = {
  params: React.PropTypes.shape({
    id: React.PropTypes.string,
  }),
  loadEventDetails: React.PropTypes.func,
  loadEvents: React.PropTypes.func,
  loadRecommendedEvents: React.PropTypes.func,
  details: React.PropTypes.shape({
    city: React.PropTypes.string,
    title: React.PropTypes.string,
    categories: React.PropTypes.obj,
    venue_id: React.PropTypes.string,
  }),
  events: React.PropTypes.array,
};

const mapStateToProps = state => ({
  details: state.details,
  events: state.events.event,
});

const mapDispatchToProps = {
  loadEvents,
  loadEventDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
