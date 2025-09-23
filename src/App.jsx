import { StoryblokComponent, useStoryblok, useStoryblokBridge } from '@storyblok/react'
import getVersion from './utils/getVersion'

export default function App() {
  const story = useStoryblok('home', { version: getVersion() })

  // Enable Storyblok Bridge only in preview
  if (import.meta.env.VITE_STORYBLOK_IS_PREVIEW === 'true') {
    useStoryblokBridge(story?.id)
  }

  if (!story?.content) return <div>Loading...</div>

  return <StoryblokComponent blok={story.content} />
}
