import { storyblokEditable } from '@storyblok/react';

export default function BlogPost({ blok }) {
  return (
    <article {...storyblokEditable(blok)}>
      <h1>{blok.headline}</h1>
      <p>{blok.intro}</p>
      <div>{blok.content}</div>
      <p>By: {blok.author}</p>
      {blok.cover_image?.filename && (
        <img src={blok.cover_image.filename} alt={blok.cover_image.alt || ''} />
      )}
    </article>
  );
}
