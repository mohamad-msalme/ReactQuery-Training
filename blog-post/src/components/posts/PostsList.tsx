import React from 'react';
import { TPost} from '../types'

type TPostListProps = {
  posts: TPost[];
  onPostClick: React.Dispatch<React.SetStateAction<TPost | undefined>>;
}
export const PostsList: React.FC<TPostListProps> = ({posts, onPostClick}) =>  {

  return (
    <ul>
      {posts.map((post) => (
        <li
          key={post.id}
          className='post-title'
          onClick={() => onPostClick(post)}
        >
          {post.title}
        </li>
      ))}
    </ul>
  );
}