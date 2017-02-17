import React, { Component } from 'react';
import {connect} from 'react-redux';
import { loadEventDetails } from '../actions/event-details';

class EventDetails extends Component {

  componentDidMount() {
    debugger;
    this.props.loadEventDetails();
  }

  render() {
    return (
      <div>
        {this.props.details.city}
        Hgello
      </div>
    );
  }

}

EventDetails.propTypes = {
  loadEventDetails: React.PropTypes.func,
  details: React.PropTypes.shape({
    city: React.PropTypes.string,
  }),
};

function mapStateToProps({details}) {
  return {details};
}

function mapDispatchToProps() {
  return {
    loadEventDetails,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
