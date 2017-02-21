import React, { Component } from 'react';
import {connect} from 'react-redux';
import { loadEventDetails } from '../../actions/event-details';
import RecommendedEvents from '../../components/RecommendedEvents/RecommendedEvents.js';

class EventDetails extends Component {

  componentDidMount() {
    this.props.loadEventDetails();
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        THIS IS WHERE THE DETAILS GO
        <h1> Title: {this.props.details.title} </h1>
        <p> City: {this.props.details.city} </p>
        <RecommendedEvents recommended={this.props.recommended} />
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
  recommended: React.PropTypes.array,
};

const mapStateToProps = state => ({
  details: state.details,
  recommended: state.recommended,
});

const mapDispatchToProps = {
  loadEventDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
