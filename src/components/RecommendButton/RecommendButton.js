import React from 'react';

export default function RecommendButton({increment}) {
  return (
    <button type="button" onClick={increment}>recommend</button>
  );
}

RecommendButton.propTypes = {
  increment: React.PropTypes.func,
};
