import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css';
import { Posts } from '../posts/Posts';
import { QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient()
export const App: React.FC<{}> = () => {
  console.log(queryClient);
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
      <h1>Blog Posts</h1>
      <Posts />
    </div>
    <ReactQueryDevtools />
    </QueryClientProvider>
    
  );
}

