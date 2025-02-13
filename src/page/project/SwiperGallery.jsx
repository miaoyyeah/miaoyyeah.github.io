import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Gallery from "../../components/Gallery";

export default function SwiperGallery({ folder }) {
  const [images, setImages] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="max-w-screen-lg mx-auto py-1">
      {/* Load images and pass to Swiper */}
      {images.length > 0 && (
        <>
        <Swiper
          style={{
            '--swiper-navigation-color': '#7f9698',
            '--swiper-pagination-color': '#7f9698',
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          pagination={{ clickable: true }}
          modules={[FreeMode, Navigation, Thumbs, Pagination]}
          className="custom-swiper mt-4 rounded-lg shadow-lg mb-4"
        >
        {images.map((item, index) => (
          <SwiperSlide key={index}  className="flex justify-center items-center h-[500px]">
            {item.type === 'video' ? (
              <video 
                controls 
                className="max-w-full h-auto mx-auto block rounded-lg object-contain">
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={item.src} alt={`Project ${index}`} className="w-full h-auto rounded-lg" />
            )}
          </SwiperSlide>
        ))}
        </Swiper>
        
        <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-4 rounded-lg shadow-lg mb-4"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === 'video' ? (
              <video className="w-full h-auto rounded-lg">
                <source src={item.src} type="video/mp4" />
              </video>
            ) : (
              <img src={item.src} alt={`Thumbnail ${index}`} className="w-full h-auto rounded-lg" />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      </>
      )}
      
      <Gallery folder={folder} onImagesLoaded={setImages} />
    </div>
  );
}
