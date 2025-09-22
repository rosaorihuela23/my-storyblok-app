import { StoryblokComponent, useStoryblok, useStoryblokBridge } from '@storyblok/react';

export default function App() {
  const story = useStoryblok('home', { version: 'draft' }); 

  useStoryblokBridge(story?.id);

  console.log('Story fetched:', story);

  if (!story?.content) return <div>Loading...</div>;

  return <StoryblokComponent blok={story.content} />;
}
