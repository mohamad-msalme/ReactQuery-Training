import React from 'react';
import './App.css';
import { Posts } from '../posts/Posts';

export const App: React.FC<{}> = () => {
  return (
    <div className='App'>
      <h1>Blog Posts</h1>
      <Posts />
    </div>
  );
}

