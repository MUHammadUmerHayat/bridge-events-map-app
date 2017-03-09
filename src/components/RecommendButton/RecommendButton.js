import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import {blue500} from 'material-ui/styles/colors';


export default function RecommendButton({increment}) {
  return (
  	<div>
  		<RaisedButton
	      label="Recommend this Event"
	      labelPosition="before"
	      icon={<ActionThumbUp color={blue500} />}
	      onClick={increment}
	    />
    </div>
  );
}

RecommendButton.propTypes = {
  increment: React.PropTypes.func,
};
