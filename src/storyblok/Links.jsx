import { storyblokEditable } from "@storyblok/react";

export default function Links({ blok }) {
  const href = blok.links?.cached_url || "#";

  return (
    <div {...storyblokEditable(blok)} className="links-wrapper">
      <a
        href={href}
        target={blok.links?.linktype === "url" ? "_blank" : "_self"}
        rel={blok.links?.linktype === "url" ? "noopener noreferrer" : undefined}
        className="fancy-link"
      >
        {blok.title || "Unwritten"}
      </a>
    </div>
  );
}
