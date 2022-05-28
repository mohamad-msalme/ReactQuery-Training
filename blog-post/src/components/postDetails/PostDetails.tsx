import React from 'react';
import { TPost } from '../types';
import { CommentsList } from './CommentsList';
import { MSG__ERROR, MSG__LOADING } from '../util';
import { useLoadComments } from '../hooks/useLoadComments';
import { useMutation } from 'react-query';
import { jsonPlaceholder } from '../../apis';

type TPostDetailsProps = {
  post: TPost,
}


export const PostDetails: React.FC<TPostDetailsProps> = ({ post }) => {

  const commentsState = useLoadComments(post.id);
  const deleteMutation = useMutation((postId: number) => jsonPlaceholder.deletePost(postId));
  
  const updateMutation = useMutation(() => jsonPlaceholder.updatePost<{title: string}>(post.id, {title: 'updated...'}))

  const render = (): React.ReactNode => {
    if (commentsState.isLoading) return MSG__LOADING;
    else if (commentsState.isError) return MSG__ERROR;
    else if (commentsState.data) return <CommentsList comments={commentsState.data} />
  }

  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button onClick={() => deleteMutation.mutate(post.id, { onSettled: () => deleteMutation.reset()})}>Delete</button> 
      <button onClick={() => updateMutation.mutate()}>Update title</button>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {render()}
    </>
  )
};