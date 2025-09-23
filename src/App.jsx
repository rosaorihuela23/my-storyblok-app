import { useLocation } from 'react-router-dom';
import { StoryblokComponent, useStoryblok, useStoryblokBridge } from '@storyblok/react';
import getVersion from './utils/getVersion';

export default function App() {
  const location = useLocation();
  const slug = location.pathname === '/' ? 'home' : location.pathname.replace(/^\/+/, ''); 

  const story = useStoryblok(slug, { version: getVersion() });

  useStoryblokBridge(story?.id, (updatedStory) => {
    story.content = updatedStory.content;
  });

  if (!story?.content) return <div>Loading...</div>;

  return <StoryblokComponent blok={story.content} />;
}
