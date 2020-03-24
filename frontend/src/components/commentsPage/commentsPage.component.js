import React from 'react';
import '../../styles/index.css';
import AddCommentForm from './addCommentForm.component';
import CommentsList from './commentsList.component';

function CommentsPage() {
  return (
    <div>
      <AddCommentForm></AddCommentForm>
      <CommentsList></CommentsList>
    </div>
  );
}

export default CommentsPage;
