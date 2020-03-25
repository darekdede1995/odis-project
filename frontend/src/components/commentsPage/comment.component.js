import React from 'react';
import '../../styles/index.css';

function Comment(props) {
  return (
    <div>
      <div>{props.username}</div>
      <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
    </div>
  );
}

export default Comment;
