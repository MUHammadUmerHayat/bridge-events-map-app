import React, { Component } from 'react';
import {connect} from 'react-redux';
import { loadEventDetails } from '../../actions/eventDetailsActions';
import { loadEvents } from '../../actions/eventActions';
import RecommendedEvents from '../../components/RecommendedEvents/RecommendedEvents';
import EventDetailsComponent from '../../components/EventDetails/EventDetailsComponent';
import CommentForm from '../../components/CommentForm/CommentForm';
import CommentList from '../../components/CommentList/CommentList';
import { addComment } from '../../actions/commentActions';
import MainGoogleMap from '../../components/MainGoogleMap/MainGoogleMap';

class EventDetails extends Component {

  componentDidMount() {
    // Put ID into the action
    this.props.loadEventDetails(this.props.params.id);
  }

  /* I need this function for React router links. When clicking on a links
     the page is rerendered but componentDidMount is not called. Use componentWillReceiveProps
     to call loadEventDetails if a different event has been chosen*/
  componentWillReceiveProps(nextProps) {
    const nextAccountId = nextProps.params.id;
    if (nextAccountId !== this.props.params.id) {
      this.props.loadEventDetails(nextProps.params.id);
    }
    if (this.props.details !== nextProps.details) {
      this.props.loadEvents({
        location: nextProps.details.city,
        page_size: 3,
        category: nextProps.details.categories.category[0].id,
        venue_id: nextProps.details.venue_id,
        include: 'categories',
      }, true);
    }
  }

  render() {
    const { commentForm } = this.props;
    const handleCommentSubmit = e => {
      e.preventDefault();
      this.props.addComment(commentForm.values.commentTextarea);
      commentForm.values.commentTextarea = '';
    };
    let recommended = null;
    if (this.props.events) {
      recommended = <RecommendedEvents recommendedEvents={this.props.recommendedEvents} />;
    }
    if (this.props.details.latitude) {
      const eventPosition = {
        lat: Number(this.props.details.latitude),
        lng: Number(this.props.details.longitude),
      };
      const eventMarker = [{
        position: eventPosition,
        key: 1,
        defaultAnimation: 2,
        showInfo: false,
        title: this.props.details.title,
        id: this.props.params.id,
      }];
      return (
        <div>
          <EventDetailsComponent
            title={this.props.details.title}
            city={this.props.details.city}
            imageUrl = {this.props.details.imageUrl}
          />
          <div style={{width: '50%', height: '20%'}}>
            <MainGoogleMap
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '300px' }} />}
                markers={eventMarker}
                currentLocation={eventPosition}
            />
          </div>
          <CommentForm handleAddComment={ handleCommentSubmit }/>
          <CommentList comments={this.props.comments}/>
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
    longitude: React.PropTypes.string,
    latitude: React.PropTypes.string,
    imageUrl: React.PropTypes.string,
  }),
  events: React.PropTypes.array,
  recommendedEvents: React.PropTypes.array,
  addComment: React.PropTypes.func.isRequired,
  commentForm: React.PropTypes.object,
  resetForm: React.PropTypes.func,
  comments: React.PropTypes.array,
};

const mapStateToProps = state => {
  return ({
    details: state.details,
    events: state.events.allEvents,
    recommendedEvents: state.events.recommendedEvents,
    comments: state.comments,
    commentForm: state.form.comment,
  });
};

const mapDispatchToProps = {
  loadEvents,
  loadEventDetails,
  addComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
