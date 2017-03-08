import React, {PropTypes} from 'react';

const formatDate = (props) => {
  const monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December',
  ];
  const date = new Date(props.pubDate);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return (
        <div className="Left-indent grey">{`${day}  ${monthNames[monthIndex]} ${ year}`}</div>
  );
};

formatDate.propTypes = {
  pubDate: PropTypes.string,
};

export default formatDate;
