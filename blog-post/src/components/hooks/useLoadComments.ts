import React from "react";
import { jsonPlaceholder } from "../../apis";
import { TComment, TResponse } from "../types";
import { DEFAULT_RESPONSE_STATE, MSG__ERROR } from "../util";



export const useLoadComments = (id: number) => {

  const [ commentState, setCommentState ] = React.useState<TResponse<TComment[]>>(DEFAULT_RESPONSE_STATE);

  React.useEffect(() => {
    jsonPlaceholder.getCommentByPostId<TComment[]>(id)
      .then((res) => setCommentState((prevState) => ({...prevState, loading: false, data: res.data})))
      .catch((err: { msg: string }) => setCommentState((prevState) => (
        {...prevState,loading: false, error: `${MSG__ERROR} ${err.msg},`, data: undefined}))
      );
  }, [id]);

  return commentState;
}