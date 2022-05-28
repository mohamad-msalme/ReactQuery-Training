import React from "react";
import { PostsList } from "./PostsList";
import { ToolbarButtom } from "./ToolbarButtom";
import { jsonPlaceholder } from '../../apis';
import { TPost } from "../types";
import { DEF_PAGE, MSG__ERROR, MSG__LOADING, MAX_PAGE, PARAMS } from "../util";
import { PostDetails } from "../postDetails/PostDetails";
import { useLoadPosts } from "../hooks/useLoadPosts";
import { useQueryClient } from "react-query";


export const Posts: React.FC<{}> = () => {

  const [ selectedPost, setSelectedPost ] = React.useState<TPost>();
  const [ currentPage, setCurrentPage ] = React.useState<number>(DEF_PAGE);

  const queryClient = useQueryClient();
  const postsState = useLoadPosts(currentPage);

  const render = (): React.ReactNode => {
    if (postsState.isLoading) return MSG__LOADING;
    else if (postsState.isError) return MSG__ERROR;
    else if (postsState.data) return <PostsList posts={postsState.data} onPostClick={setSelectedPost} />
  }

  React.useEffect(() => {
    if (currentPage === MAX_PAGE) return;
    const nextPage = currentPage + 1;
    queryClient.prefetchQuery(['posts', nextPage],
    () => jsonPlaceholder.getPosts<TPost[]>(
      { params: {...PARAMS, '_page': nextPage} }
    ));

  }, [currentPage, queryClient]);

  return (
    <div>
      {render()}
      <ToolbarButtom postState={postsState} pageNum={currentPage} onBtnClick={setCurrentPage} />
      { selectedPost && <PostDetails post={selectedPost} /> }
    </div>
  )
};
