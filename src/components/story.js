import React, { useEffect, useState } from 'react';
import { getStory } from '../services/newsApi';
import { StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement } from '../styles/storyStyles';
import { mapTime } from '../mappers/mapTime';
import { toaster } from '../services/toasterService';

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});
  
  useEffect(() => {
    getStory(storyId).then(setStory).catch(toaster);
  }, []);

  return (story && story.url) ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <mark>
          <a href={story.url} target="_blank" rel="noopener noreferrer">{story.title}</a>
        </mark>
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
          {mapTime(story.time)}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};
