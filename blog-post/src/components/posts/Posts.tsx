import React from "react";
import { PostsList } from "./PostsList";
import { ToolbarButtom } from "./ToolbarButtom";
import { jsonPlaceholder } from '../../apis';
import { TResponse, TPost } from "../types";
import { PARAMS, DEFAULT_RESPONSE_STATE, MSG__ERROR, DEF_PAGE } from "../util";
import { PostDetails } from "../postDetails/PostDetails";


export const Posts: React.FC<{}> = () => {

  const [ selectedPost, setSelectedPost ] = React.useState<TPost>();
  const [ currentPage, setCurrentPage ] = React.useState<number>(DEF_PAGE);
  const [ postsState, setPostsState ] = React.useState<TResponse<TPost[]>>(DEFAULT_RESPONSE_STATE);

  const loadData = () => {
    jsonPlaceholder.getPosts<TPost[]>({ params: {...PARAMS, '_page': currentPage} })
      .then((res) =>
        setPostsState((prevState) => ({...prevState, loading: false, data: res.data, error: undefined}))
      )
      .catch((err: { msg: string}) => 
        setPostsState((prevState) => ({...prevState,loading: false, error: `${MSG__ERROR} ${err.msg},`, data: undefined}))
      );
  }

  const onDeleteClick = async () => {
    if (!selectedPost) return;
    const data = await jsonPlaceholder.deletePost(selectedPost.id);
    loadData();
  }

  const onUpdateClick = async () => {
    if (!selectedPost) return;
    const data = await jsonPlaceholder.updatePost<{ title: string}>(selectedPost.id, { title: 'ReplcaeMe'});
    loadData();

  }

  React.useEffect(() => {
    loadData();
  }, [currentPage]);

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
