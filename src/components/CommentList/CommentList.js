import React from 'react';

function CommentsList({comments}) {
  const commentsList = comments.map((comment, index) =>(
        <p key={index}>{comment}</p>
  ));
  const reviewBlock = (commentsList.length > 0 ? commentsList : 'No reviews yet. Be the first one to review!');

  return (
    <div>
      <h4>Reviews</h4>
      {reviewBlock}
      <hr/>
    </div>
  );
}

CommentsList.propTypes = {
  comments: React.PropTypes.array,
};

export default CommentsList;
