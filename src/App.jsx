import { StoryblokComponent, useStoryblok, useStoryblokBridge } from '@storyblok/react'
import getVersion from './utils/getVersion'
import { useLocation } from 'react-router-dom'
export default function App() {

  const location = useLocation()
  const slug = location.pathname === '/' ? 'home' : location.pathname.slice(1);

  const story = useStoryblok(slug, { version: getVersion() })


  if (import.meta.env.VITE_STORYBLOK_IS_PREVIEW === 'true') {
    useStoryblokBridge(story?.id)
  }

  if (!story?.content) return <div>Loading...</div>

  return <StoryblokComponent blok={story.content} />
}
