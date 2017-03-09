import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newSearch } from '../../actions/searchActions';
import { loadEvents } from '../../actions/eventActions';

import SearchForm from '../../components/SearchForm';
import EventsList from '../../components/EventsList/EventsList';

class Search extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <SearchForm onSubmit={this.handleSubmit} />
        {(this.props.events) ? <EventsList events={this.props.events} /> : ''}
      </div>
    );
  }

  handleSubmit(values) {
    this.props.newSearch(values.query);
    this.props.loadEvents({
      location: values.location,
      page_size: '10',
      keywords: values.query,
      include: 'categories',
    });
  }
}

Search.propTypes = {
  events: React.PropTypes.array,
  newSearch: React.PropTypes.func,
  loadEvents: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
};

const mapStateToProps = state => {
  return {
    query: state.query,
    events: state.events.allEvents,
  };
};

const mapDispatchToProps = {
  newSearch,
  loadEvents,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
