import axios from 'axios';
import { selectFields } from '../selectors/selectFields';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStoryId = async () => {
  const result  = await axios.get(newStoriesUrl);
  return result.data;
};

export const getStory = async (id) => {
  const story = await axios.get(`${storyUrl + id}.json`);
  return story && selectFields(story.data);
};
