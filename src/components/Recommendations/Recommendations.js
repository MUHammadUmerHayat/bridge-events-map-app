import React from 'react';

export default function Recommendations(props) {
  // console.log(props.amount);
  return (
    <p>{props.amount} people recommend this event.</p>
  );
}

Recommendations.propTypes = {
  amount: React.PropTypes.number,
};
