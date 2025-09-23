import { storyblokEditable } from "@storyblok/react";

export default function ImageBlock({ blok }) {
  return (
    <div {...storyblokEditable(blok)}>
      <img src={blok.image?.filename} alt={blok.caption || ""} />
      {blok.caption && <p>{blok.caption}</p>}
    </div>
  );
}
