import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
import * as TQuery  from 'react-query/types/core/types'

type TDataInfinteScroll = {
  next: string | null, 
  previous: string | null
}

export const useLoadData = <TData extends TDataInfinteScroll>(queryKey: TQuery.QueryKey, initialUrl: string) => {
  const fetchUrl = async (pageParam: string) => axios.get<TData>(pageParam).then((res) => res.data);
  return useInfiniteQuery(queryKey, ({pageParam = initialUrl}) => fetchUrl(pageParam), {
    getNextPageParam: (lastPage) => lastPage.next || undefined,
    getPreviousPageParam: (firstPage) => firstPage.previous || undefined,
    refetchOnWindowFocus: false,
  })
}