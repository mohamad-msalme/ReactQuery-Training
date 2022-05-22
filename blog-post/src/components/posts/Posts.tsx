import React from "react";
import { PostsList } from "./PostsList";
import { ToolbarButtom } from "./ToolbarButtom";
import { jsonPlaceholder } from '../../apis';
import { TPost } from "../types";
import { DEF_PAGE } from "../util";
import { PostDetails } from "../postDetails/PostDetails";
import { useLoadPosts } from "../hooks/useLoadPosts";


export const Posts: React.FC<{}> = () => {

  const [ selectedPost, setSelectedPost ] = React.useState<TPost>();
  const [ currentPage, setCurrentPage ] = React.useState<number>(DEF_PAGE);

  const postsState = useLoadPosts(currentPage);

  const onDeleteClick = async () => {
    if (!selectedPost) return;
    const data = await jsonPlaceholder.deletePost(selectedPost.id);
  }

  const onUpdateClick = async () => {
    if (!selectedPost) return;
    const data = await jsonPlaceholder.updatePost<{ title: string}>(selectedPost.id, { title: 'ReplcaeMe'});

  }

  const render = (): React.ReactNode => {
    if (postsState.loading) return postsState.loadingMsg;
    else if (postsState.error) return postsState.error;
    else return <PostsList posts={postsState.data as TPost[]} onPostClick={setSelectedPost} />
  }
  
  return (
    <div>
      {render()}
      <ToolbarButtom pageNum={currentPage} onBtnClick={setCurrentPage} />
      { selectedPost && <PostDetails post={selectedPost} onUpdateClick={onUpdateClick} onDeleteClick = {onDeleteClick} /> }
    </div>
  )
};
