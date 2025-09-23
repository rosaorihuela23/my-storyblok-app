import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

export default function BlogPage({ blok }) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}