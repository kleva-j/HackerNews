import React, { useState, useEffect } from 'react';
import { getStoryId } from '../services/newsApi';
import { Story } from '../components/story';
import { GlobalStyle, StoriesContainerWrapper } from '../styles/globalStyles';
import { InfiniteScroll } from '../hooks/useInfiniteScroll';

export const StoriesContainer = () => {
  const { count } = InfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryId().then(setStoryIds);
  }, [count]);
  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper>
        <h1>HackerNews App</h1>
        {storyIds.slice(0, count).map(storyId => (<Story key={storyId} storyId={storyId} />))}
      </StoriesContainerWrapper>
    </>
  );
};
