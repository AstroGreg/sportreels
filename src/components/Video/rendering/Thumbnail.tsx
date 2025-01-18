// src/components/Video/rendering/Thumbnail.tsx
import React from "react";
interface ThumbnailProps {
  /** A map of width -> thumbnail URL, e.g. { 240: "/path.jpg", 480: "/path2.jpg" } */
  thumbnails: { [key: number]: string };
  /** For accessibility and SEO (img alt text) */
  altText?: string;
}

/**
 * Utility to build a valid "srcSet" from the thumbnails dictionary
 * e.g. { 240: "/path240.jpg", 480: "/path480.jpg" } -> "/path240.jpg 240w, /path480.jpg 480w"
 */
function buildSrcSet(thumbnails: { [key: number]: string }): string {
  return Object.entries(thumbnails)
    .map(([width, url]) => `${url} ${width}w`)
    .join(", ");
}

const Thumbnail: React.FC<ThumbnailProps> = ({ thumbnails, altText }) => {
  // If no thumbnails were provided, return nothing.
  if (!thumbnails || Object.keys(thumbnails).length === 0) {
    return null;
  }

  // Use the 240px version as your primary fallback, otherwise just the first available.
  const fallbackSrc = thumbnails[240] || Object.values(thumbnails)[0];

  return (
    <img
      src={fallbackSrc}
      srcSet={buildSrcSet(thumbnails)}
      alt={altText || "Video placeholder"}
      className={`
        absolute top-0 left-0 w-full h-full object-cover 
        transition-opacity duration-500 
      `}
      // Example sizes attribute (customize for your layout/breakpoints)
      sizes="(max-width: 600px) 240px,
             (max-width: 900px) 480px,
             (max-width: 1200px) 720px,
             1080px"
    />
  );
};

export default Thumbnail;
