import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';

export default function EventSearch({
  searchForEvent,
}) {
  let eventQuery = '';
  return (
  	<div style={{textAlign: 'center', margin: '30px auto', width: '100%'}}>
       <TextField style={{width: '60%'}} onChange={(e) => {
       	 eventQuery = e.target.value;
       	 searchForEvent({
          location: 'Toronto',
          within: 25,
          date: 'Future',
          page_size: '30',
          image_sizes: 'block100,large',
          include: 'categories',
          keywords: eventQuery,
        });
       }
     } type="text" placeholder="Find an event..."/>
  	</div>
  	);
}

EventSearch.propTypes = {
  searchForEvent: PropTypes.func.isRequired,
};
