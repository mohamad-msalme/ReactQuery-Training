import { useQuery } from "react-query";
import { jsonPlaceholder } from "../../apis";
import { TComment } from "../types";

export const useLoadComments = (id: number) => (
  useQuery(
    ['comments', id],
    () => jsonPlaceholder.getCommentByPostId<TComment[]>(id)
    .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  )
);