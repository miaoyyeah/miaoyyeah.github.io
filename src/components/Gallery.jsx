import { useState, useEffect } from "react";

// Import both images and videos
const allMedia = import.meta.glob('/src/assets/images/**/*.{png,jpg,jpeg,mp4,webm}');

export default function Gallery({ folder, onImagesLoaded }) {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    async function loadMedia() {
      try {
        // Filter media files based on the selected folder
        const filteredMedia = Object.keys(allMedia).filter((path) =>
          path.includes(`/src/assets/images/${folder}/`)
        );

        const loadedMedia = await Promise.all(
          filteredMedia.map(async (path) => {
            const module = await allMedia[path]();
            return { src: module.default, type: path.endsWith('.mp4') || path.endsWith('.webm') ? 'video' : 'image' };
          })
        );

        setMedia(loadedMedia);
        onImagesLoaded(loadedMedia); // Pass media to parent component
      } catch (error) {
        console.error("Error loading media:", error);
      }
    }

    loadMedia();
  }, [folder]);

  return null;
}
