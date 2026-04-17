'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export const CamperGallery = ({ images }: { images: any[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="space-y-4">
      {/* Головне фото */}
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-[500px] rounded-3xl overflow-hidden"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img src={img.original} className="w-full h-full object-cover" alt="Camper" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Прев'ю (Thumbs) */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-32"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx} className="cursor-pointer rounded-2xl overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
            <img src={img.thumb} className="w-full h-full object-cover" alt="Thumb" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};