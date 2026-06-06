"use client";

import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";

interface GalleryLightboxProps {
images: string[];
}

export default function GalleryLightbox({
images,
}: GalleryLightboxProps) {
const [index, setIndex] = useState(-1);

return (
<> <div className="space-y-6 md:space-y-8">

```
    {images.map((src, i) => (
      <img
        key={i}
        src={src}
        alt=""
        onClick={() => setIndex(i)}
        className="
          w-full
          cursor-zoom-in
          transition
          duration-300
          hover:opacity-95
        "
      />
    ))}

  </div>

  <Lightbox
    open={index >= 0}
    close={() => setIndex(-1)}
    index={index}
    plugins={[Zoom]}
    carousel={{
      finite: true,
    }}
    zoom={{
      maxZoomPixelRatio: 4,
      zoomInMultiplier: 2,
    }}
    slides={images.map((src) => ({
      src,
    }))}
  />
</>

);
}
