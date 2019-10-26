import React, { useState, useEffect } from 'react';
import { getStoryId } from '../services/newsApi';
import { Story } from '../components/story';
import { GlobalStyle, StoriesContainerWrapper } from '../styles/globalStyles';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryId().then(setStoryIds);
  }, []);
  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper>
        <h1>HackerNews API</h1>
        {storyIds.map(storyId => <Story key={storyId} storyId={storyId} />)}
      </StoriesContainerWrapper>
    </>
  );
};
