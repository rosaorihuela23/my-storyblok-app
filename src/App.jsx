import { StoryblokComponent, useStoryblok, useStoryblokBridge } from '@storyblok/react';
import getVersion from './utils/getVersion';

export default function App({ slug }) {
  const story = useStoryblok(slug, { version: getVersion() });

  
  useStoryblokBridge(story?.id, (updatedStory) => {
    story.content = updatedStory.content;
  });

  if (!story?.content) return <div>Loading...</div>;

  return <StoryblokComponent blok={story.content} />;
}
