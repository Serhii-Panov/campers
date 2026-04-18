'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper/types';
import { DetailedCamper } from '@/types/camper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface Props {
  images: DetailedCamper['gallery'];
}

export const CamperGallery = ({ images }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {/* Головне фото */}
      <div className="relative group">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="w-full h-[512px] rounded-[20px] overflow-hidden main-camper-swiper"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <img 
                src={img.original} 
                className="w-full h-full object-cover" 
                alt="Camper" 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Прев'ю-мініатюри */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={20}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full h-[120px] thumbs-camper-swiper"
      >
        {images.map((img) => (
          <SwiperSlide key={img.id} className="cursor-pointer rounded-[10px] overflow-hidden">
            <div className="relative w-full h-full group">
              <img 
                src={img.thumb} 
                className="w-full h-full object-cover transition-opacity duration-300" 
                alt="Thumbnail" 
              />
              {/* Оверлей для неактивних слайдів за макетом */}
              <div className="absolute inset-0 bg-white/40 transition-opacity duration-300 group-[.swiper-slide-thumb-active]:opacity-0" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кастомні стилі для стрілок та активних станів */}
      <style jsx global>{`
        .main-camper-swiper .swiper-button-next,
        .main-camper-swiper .swiper-button-prev {
          color: #101828 !important;
          background: rgba(255, 255, 255, 0.8);
          width: 44px !important;
          height: 44px !important;
          border-radius: 50%;
          transition: background 0.3s;
        }
        .main-camper-swiper .swiper-button-next:after,
        .main-camper-swiper .swiper-button-prev:after {
          font-size: 18px !important;
          font-weight: bold;
        }
        .main-camper-swiper .swiper-button-next:hover,
        .main-camper-swiper .swiper-button-prev:hover {
          background: #ffffff;
        }
        /* Ховаємо стандартні сині тіні та підсвітки */
        .thumbs-camper-swiper .swiper-slide-thumb-active {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};