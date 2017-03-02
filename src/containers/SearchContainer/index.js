import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadEvents } from '../../actions/eventActions';

import SearchForm from '../../components/SearchForm';
// import EventsList from '../../components/EventsList/EventsList';

class Search extends Component {
  // componentDidMount() {
  //   this.props.loadEvents({
  //     location: 'Toronto',
  //     page_size: '10',
  //     keywords: 'film',
  //   });
  // }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.events);
    console.log(nextProps.events);
  }

  componentDidUpdate() {
    this.props.loadEvents({
      location: 'Toronto',
      page_size: '10',
      keywords: 'music',
    });
  }

  render() {
    return (
      <div>
        <SearchForm onSubmit={this.handleSubmit} />
        {(this.props.events) ? 'there are events' : 'no events'}
      </div>
    );
  }

  handleSubmit(values) {
    console.log(values.searchQuery);
  }
}

Search.propTypes = {
  events: React.PropTypes.array,
  loadEvents: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
};

const mapStateToProps = state => {
  return {
    events: state.events.event,
  };
};

const mapDispatchToProps = {
  loadEvents,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
