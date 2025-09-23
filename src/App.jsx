import { StoryblokComponent, useStoryblok, useStoryblokBridge } from '@storyblok/react';
import { useParams } from 'react-router-dom';
import getVersion from './utils/getVersion';

export default function App() {
  const currentYear = new Date().getFullYear();
  const { '*': slug } = useParams();
  const storySlug = slug || 'home';
 
  const story = useStoryblok(storySlug, { version: getVersion() });


  useStoryblokBridge(story?.id, (updatedStory) => {
    if (updatedStory?.content) {
      story.content = updatedStory.content;
    }
  });
  

  if (!story?.content) return <div>Loading...</div>;



  return (
    <>
      <StoryblokComponent blok={story.content} />
      <footer>All rights reserved © {currentYear}</footer>
    </>
  );
}
