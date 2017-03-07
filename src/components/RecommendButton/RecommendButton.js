import React from 'react';

export default function RecommendButton({increment}) {
  return (
  	<div>
    	<button type="button" onClick={increment}>recommend</button>
    	<p># people have recommended this event.</p>
    </div>
  );
}

RecommendButton.propTypes = {
  increment: React.PropTypes.func,
};
