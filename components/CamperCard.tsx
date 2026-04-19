"use client";

import React from "react";
import { CamperListItem } from "@/types/camper";
import { Button } from "./Button";
import { Icon } from "./Icon";
import type { IconName } from "@/types/icon";

interface CamperCardProps {
  camper: CamperListItem;
}

export const CamperCard: React.FC<CamperCardProps> = ({ camper }) => {
  return (
    <div className="p-6  rounded-[20px]  flex flex-col md:flex-row gap-6 bg-badges w-full">
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
          </div>
        </div>

        {/* Рейтинг та Локація */}
        <div className="flex gap-4 mb-6 items-center text-sm text-[#101828]">
          <div className="flex items-center gap-1">
            <Icon name="star-yellow" />
            <span>
              {camper.rating} ({camper.totalReviews} Reviews)
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="map" />
            <span>{camper.location}</span>
          </div>
        </div>

        {/* Опис з обмеженням рядків */}
        <p className="text-[#475467] mb-6 line-clamp-1 leading-relaxed">
          {camper.description}
        </p>

        {/* Характеристики (Badges) */}
        <div className="flex flex-wrap gap-2 mb-auto">
          <Badge text={camper.transmission} icon="transmition" />
          <Badge text={camper.engine} icon="fuel" />
          <Badge text={camper.form.replace("_", " ")} icon="car" />
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
const Badge = ({ text, icon }: { text: string; icon: IconName }) => (
  <div className="px-[18px] py-3 bg-gray-light rounded-full flex items-center gap-2 text-[#101828] font-medium capitalize text-sm">
    <Icon name={icon} />
    <span>{text}</span>
  </div>
);
