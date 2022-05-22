import React from 'react';
import { TComment, TPost, TResponse } from '../types';
import { CommentsList } from './CommentsList';
import { jsonPlaceholder } from '../../apis';
import { DEFAULT_RESPONSE_STATE, MSG__ERROR } from '../util';

type TPostDetailsProps = {
  post: TPost,
  onUpdateClick: () => void;
  onDeleteClick: () => void;
}


export const PostDetails: React.FC<TPostDetailsProps> = ({ post, onDeleteClick, onUpdateClick }) => {

  const [comments, setComments ] = React.useState<TResponse<TComment[]>>(DEFAULT_RESPONSE_STATE);

  const render = (): React.ReactNode => {
    if (comments.loading) return comments.loadingMsg;
    else if (comments.error) return comments.error;
    else if (comments.data) return <CommentsList comments={comments.data} />
  }

  React.useEffect(() => {
    jsonPlaceholder.getCommentByPostId<TComment[]>(post.id)
      .then((res) => setComments((prevState) => ({...prevState, loading: false, data: res.data})))
      .catch((err: { msg: string }) => setComments((prevState) => (
        {...prevState,loading: false, error: `${MSG__ERROR} ${err.msg},`, data: undefined}))
      );
  }, [post.id])

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