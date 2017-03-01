import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadEvents } from '../../actions/eventActions';
import EventsList from '../../components/EventsList/EventsList';

class Search extends Component {
  constructor() {
    super();

    this.updateSearchForm = this.updateSearchForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      query: '',
      resultsList: '',
      submitDisabled: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.events !== undefined) {
      this.setState({
        resultsList: <EventsList events={nextProps.events} />,
      });
    }
  }

  render() {
    const value = this.state.query;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={value} onChange={this.updateSearchForm} required />
          {(this.state.submitDisabled) ? <input type="submit" value="Search" disabled /> : <input type="submit" value="Search" />}
        </form>
        {this.state.resultsList}
      </div>
    );
  }

  updateSearchForm(event) {
    this.setState({
      query: event.target.value,
    });
    if (event.target.value.length > 1) {
      this.setState({
        submitDisabled: false,
      });
    } else {
      this.setState({
        submitDisabled: true,
      });
    }
  }

  handleSubmit(event) {
    this.setState({
      searched: true,
    });
    this.props.loadEvents({
      location: 'Toronto',
      page_size: '10',
      keywords: this.state.query,
    });
    event.preventDefault();
  }
}

Search.propTypes = {
  events: React.PropTypes.array,
  loadEvents: React.PropTypes.func,
  updateSearchForm: React.PropTypes.func,
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
