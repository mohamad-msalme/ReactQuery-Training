import React from "react";
import { TComment } from '../types';


type TCommentsListProps = {
  comments: TComment[];
}

export const CommentsList: React.FC<TCommentsListProps> = ({comments}) => {
  return (
    <>
      {
        comments.map((comment) => (
          <li key={comment.id}>
            {comment.email}: {comment.body}
          </li>
        ))
      }
    </>
  )
};