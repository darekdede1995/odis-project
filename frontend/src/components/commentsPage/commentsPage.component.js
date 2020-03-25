import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import '../../styles/index.css';
import AddCommentForm from './addCommentForm.component';
import CommentsList from './commentsList.component';

function CommentsPage() {
  const [commentsListState, setCommentsListState] = useState([]);
  refreshCommentsList();

  function refreshCommentsList() {
    axios.get(process.env.REACT_APP_API_URL + '/api/comments/get').then(res => {
      setCommentsListState(res.data);
    });
  }

  return (
    <div>
      <AddCommentForm
        refreshCommentsList={refreshCommentsList}></AddCommentForm>
      <CommentsList commentsList={commentsListState}></CommentsList>
    </div>
  );
}

export default CommentsPage;
