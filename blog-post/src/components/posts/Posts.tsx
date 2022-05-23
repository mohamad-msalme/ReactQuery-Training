import React from "react";
import { PostsList } from "./PostsList";
import { ToolbarButtom } from "./ToolbarButtom";
import { jsonPlaceholder } from '../../apis';
import { TPost } from "../types";
import { DEF_PAGE, MSG__ERROR, MSG__LOADING } from "../util";
import { PostDetails } from "../postDetails/PostDetails";
import { useLoadPosts } from "../hooks/useLoadPosts";


export const Posts: React.FC<{}> = () => {

  const [ selectedPost, setSelectedPost ] = React.useState<TPost>();
  const [ currentPage, setCurrentPage ] = React.useState<number>(DEF_PAGE);
  const postsState = useLoadPosts(currentPage);
  
  const onDeleteClick = async () => {
    if (!selectedPost) return;
    const data = await jsonPlaceholder.deletePost(selectedPost.id);
    console.log(data);
  }

  const onUpdateClick = async () => {
    if (!selectedPost) return;
    const data = await jsonPlaceholder.updatePost<{ title: string}>(selectedPost.id, { title: 'ReplcaeMe'});
    console.log(data);
  }

  const render = (): React.ReactNode => {
    if (postsState.isLoading) return MSG__LOADING;
    else if (postsState.isError) return MSG__ERROR;
    else if (postsState.data) return <PostsList posts={postsState.data} onPostClick={setSelectedPost} />
  }

  return (
    <div>
      {render()}
      <ToolbarButtom postState={postsState} pageNum={currentPage} onBtnClick={setCurrentPage} />
      { selectedPost && <PostDetails post={selectedPost} onUpdateClick={onUpdateClick} onDeleteClick = {onDeleteClick} /> }
    </div>
  )
};
