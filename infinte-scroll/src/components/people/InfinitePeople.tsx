import React from "react";
import InfiniteScroll  from 'react-infinite-scroll-component';
import { useLoadData } from "../hooks/useLoadData";
import { Person } from "./Person";
import { TPeople} from './types';
import { URL, QUERY_KEY } from './constanse'

export const InfinitePeople: React.FC<{}> = () => {

  const {
    data,
    hasNextPage,
    fetchNextPage,
  } = useLoadData<TPeople>(QUERY_KEY, URL);

  const renderPerson = () => (
    data?.pages.map((pageData) => pageData.results.map((result) => (
      <Person 
        key={result.name + result.birth_year} 
        name={result.name} 
        hairColor={result.hair_color} 
        eyeColor={result.eye_color} 
      />
  ))));

  return (
  <InfiniteScroll 
    hasMore={hasNextPage || false}
    next={fetchNextPage} 
    dataLength={data?.pages[0].results.length || 0}
    loader={<h4>Loading...</h4>}
  >
    { renderPerson()}
  </InfiniteScroll>
  );
}
