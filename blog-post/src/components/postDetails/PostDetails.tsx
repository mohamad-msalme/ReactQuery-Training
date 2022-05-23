import React from 'react';
import { TPost } from '../types';
import { CommentsList } from './CommentsList';
import { MSG__ERROR, MSG__LOADING } from '../util';
import { useLoadComments } from '../hooks/useLoadComments';

type TPostDetailsProps = {
  post: TPost,
  onUpdateClick: () => void;
  onDeleteClick: () => void;
}


export const PostDetails: React.FC<TPostDetailsProps> = ({ post, onDeleteClick, onUpdateClick }) => {

  const commentsState = useLoadComments(post.id);

  const render = (): React.ReactNode => {
    if (commentsState.isLoading) return MSG__LOADING;
    else if (commentsState.isError) return MSG__ERROR;
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