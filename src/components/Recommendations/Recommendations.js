import React from 'react';

export default function Recommendations(props) {
  return (
    <p>{props.amount} {props.amount === 1 ? 'person recommends' : 'people recommend'} this event.</p>
  );
}

Recommendations.propTypes = {
  amount: React.PropTypes.number,
};
