import { storyblokEditable } from "@storyblok/react";

export default function ImageBlock({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <div style={{ width: "50%" }}>
        <img
          src={blok.image?.filename}
          alt={blok.caption || ""}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        {blok.caption && <p style={{ marginTop: "8px" }}>{blok.caption}</p>}
      </div>
    </div>
  );
}
