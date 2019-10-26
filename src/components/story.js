import React, { useEffect, useState } from 'react';
import { getStory } from '../services/newsApi';
import { StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement } from '../styles/storyStyles';

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});
  
  useEffect(() => {
    getStory(storyId).then(setStory);
  }, []);

  return (story && story.url) ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>

      <StoryMeta>
        <span data-testid="story-by">
          <StoryMetaElement color="#000">By:</StoryMetaElement>
          {' '}
          {story.by}
        </span>

        <span data-testid="story-time">
          <StoryMetaElement color="#000">Posted:</StoryMetaElement>
          {' '}
          {story.time && new Date(story.time).toDateString()}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};
