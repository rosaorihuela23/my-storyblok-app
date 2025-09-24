import { storyblokEditable } from "@storyblok/react";


export default function ImageBlock({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="image-block">
      <div className="image-wrapper">
        <img
          src={blok.image?.filename}
          alt={blok.caption || ""}
          className="image"
        />
        {blok.caption && <p className="caption">{blok.caption}</p>}
      </div>
    </div>
  );
}
