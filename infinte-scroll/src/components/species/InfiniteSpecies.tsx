import InfiniteScroll   from 'react-infinite-scroll-component';
import { Species } from "./Species";
import { TSpecies } from './types';
import { URL, QUERY_KEY } from './constanse';
import { useLoadData } from '../hooks/useLoadData'

export const InfiniteSpecies: React.FC<{}> = () => {
  const infiniteData = useLoadData<TSpecies>(QUERY_KEY, URL);
  const renderPerson = () => (
    infiniteData.data?.pages.map((pageData) => pageData.results.map((result) => (
      <Species 
        key={result.name + result.birth_year} 
        name={result.name} 
        language={result.language} 
        averageLifespan={result.average_lifespan} 
      />
  ))));

  return (
  <InfiniteScroll 
    hasMore={!infiniteData.isFetchingNextPage && infiniteData.hasNextPage as boolean}
    next={infiniteData.fetchNextPage} 
    dataLength={infiniteData.data?.pages[0].results.length || 0}
    loader={<h4>Loading...</h4>}
  >
    { renderPerson()}
  </InfiniteScroll>
  );
}