import React from 'react';
import { TComment, TPost, TResponse } from '../types';
import { CommentsList } from './CommentsList';
import { jsonPlaceholder } from '../../apis';
import { DEFAULT_RESPONSE_STATE, MSG__ERROR } from '../util';
import { useLoadComments } from '../hooks/useLoadComments';

type TPostDetailsProps = {
  post: TPost,
  onUpdateClick: () => void;
  onDeleteClick: () => void;
}


export const PostDetails: React.FC<TPostDetailsProps> = ({ post, onDeleteClick, onUpdateClick }) => {

  const commentsState = useLoadComments(post.id);
  
  const render = (): React.ReactNode => {
    if (commentsState.loading) return commentsState.loadingMsg;
    else if (commentsState.error) return commentsState.error;
    else if (commentsState.data) return <CommentsList comments={commentsState.data} />
  }

  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button onClick={onDeleteClick}>Delete</button> <button onClick={onUpdateClick}>Update title</button>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {render()}
    </>
  )
};