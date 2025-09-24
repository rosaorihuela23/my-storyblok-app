import { storyblokEditable } from '@storyblok/react';

export default function Feature({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="feature">
      {blok.link?.url ? (
        <a href={blok.link.url} target="_blank" rel="noopener noreferrer">
          {blok.name}
        </a>
      ) : (
        <span>{blok.name}</span>
      )}
    </div>
  );
}
