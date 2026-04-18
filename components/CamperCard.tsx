'use client';

import React from 'react';
import { CamperListItem } from '@/types/camper';
import { Button } from './Button';

interface CamperCardProps {
  camper: CamperListItem;
}

export const CamperCard: React.FC<CamperCardProps> = ({ camper }) => {
  return (
    <div className="p-6 border rounded-[20px] border-[#dadde1] flex flex-col md:flex-row gap-6 bg-white w-full">
      {/* 1. Зображення кемпера */}
      <div className="w-full md:w-[290px] h-[310px] shrink-0 overflow-hidden rounded-[10px]">
        <img 
          src={camper.coverImage} 
          alt={camper.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
        />
      </div>

      {/* 2. Контентна частина */}
      <div className="flex-grow flex flex-col">
        {/* Заголовок та Ціна */}
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-2xl font-bold text-[#101828] truncate max-w-[300px]">
            {camper.name}
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-[#101828]">
              €{camper.price}
            </span>
            {/* Іконка серця (Favorite) */}
            <button className="hover:text-[#E44848] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Рейтинг та Локація */}
        <div className="flex gap-4 mb-6 items-center text-sm text-[#101828]">
          <div className="flex items-center gap-1">
            <span className="text-[#FFC531]">★</span>
            <span className="underline">
              {camper.rating} ({camper.totalReviews} Reviews)
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span>📍</span>
            <span>{camper.location}</span>
          </div>
        </div>

        {/* Опис з обмеженням рядків */}
        <p className="text-[#475467] mb-6 line-clamp-1 leading-relaxed">
          {camper.description}
        </p>

        {/* Характеристики (Badges) */}
        <div className="flex flex-wrap gap-2 mb-auto">
          <Badge text={camper.transmission} icon="⚙️" />
          <Badge text={camper.engine} icon="⛽" />
          {camper.amenities.includes('AC') && <Badge text="AC" icon="❄️" />}
          <Badge text={camper.form.replace('_', ' ')} icon="🚐" />
        </div>

        {/* Кнопка переходу на деталі (нова вкладка за ТЗ) */}
        <div className="mt-6">
          <a 
            href={`/catalog/${camper.id}`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="!px-10 !py-4">Show more</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

// Допоміжний компонент для бейджів
const Badge = ({ text, icon }: { text: string; icon: string }) => (
  <div className="px-[18px] py-3 bg-[#f2f4f7] rounded-full flex items-center gap-2 text-[#101828] font-medium capitalize text-sm">
    <span>{icon}</span>
    <span>{text}</span>
  </div>
);