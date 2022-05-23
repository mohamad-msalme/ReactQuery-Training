import { useQuery } from "react-query";
import { jsonPlaceholder } from "../../apis";
import { TPost } from "../types";
import { PARAMS } from "../util";



export const useLoadPosts = (currentPage: number) => (
  useQuery(
    ['posts', currentPage],
    () => jsonPlaceholder.getPosts<TPost[]>(
      { params: {...PARAMS, '_page': currentPage} }
    )
    .then((res) => res.data),{
      refetchOnWindowFocus: false,
    }
  )
)
  