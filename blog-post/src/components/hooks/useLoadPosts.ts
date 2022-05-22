import React from "react";
import { jsonPlaceholder } from "../../apis";
import { TPost, TResponse } from "../types";
import { DEFAULT_RESPONSE_STATE, MSG__ERROR, PARAMS } from "../util";



export const useLoadPosts = (currentPage: number) => {

  const [ postsState, setPostsState ] = React.useState<TResponse<TPost[]>>(DEFAULT_RESPONSE_STATE);

  React.useEffect(() => {
    jsonPlaceholder.getPosts<TPost[]>({ params: {...PARAMS, '_page': currentPage} })
      .then((res) =>
        setPostsState((prevState) => ({...prevState, loading: false, data: res.data, error: undefined}))
      )
      .catch((err: { msg: string}) => 
        setPostsState((prevState) => ({...prevState,loading: false, error: `${MSG__ERROR} ${err.msg},`, data: undefined}))
      );
  }, [currentPage]);

  return postsState;
}