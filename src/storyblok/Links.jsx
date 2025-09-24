import { storyblokEditable } from "@storyblok/react";

export default function Links({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="links">
      <a 
        href={blok.url?.url || "#"} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {blok.name}
      </a>
    </div>
  );
}
