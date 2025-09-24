import React from "react";
import { storyblokEditable } from "@storyblok/react";

export default function Links({ blok }) {
  return (
    <div
      className="flex flex-col items-center justify-center mx-auto p-4"
      {...storyblokEditable(blok)}
    >
      <a
        href={blok.url?.url || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-[#d4d4d4] bg-white p-4 shadow-sm transition-colors hover:bg-[#f5f5f5] min-w-[350px] max-w-[350px]"
      >
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-[#062121] p-3 text-white text-lg font-bold">
            {blok.name ? blok.name.charAt(0) : "?"}
          </div>
          <div>
            <h3
              className="text-lg font-medium max-w-[250px] truncate"
              title={blok.name}
            >
              {blok.name || "Untitled Link"}
            </h3>
          </div>
        </div>
      </a>
    </div>
  );
}
