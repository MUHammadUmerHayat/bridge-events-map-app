import React from 'react';

const RecommendedEvents = ({ recommended }) => (
  <div>
    {recommended}
  </div>
);


RecommendedEvents.propTypes = {
  recommended: React.PropTypes.object,
};

export default RecommendedEvents;
