import { DetailedCamper } from '@/types/camper';

interface Props {
  camper: DetailedCamper;
}

export const CamperMainInfo = ({ camper }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Назва кемпера */}
      <h1 className="text-[32px] font-semibold leading-[1.2] text-[#101828]">
        {camper.name}
      </h1>

      {/* Рейтинг та Локація */}
      <div className="flex items-center gap-4 text-base">
        <div className="flex items-center gap-1 border-b border-[#101828]">
          <span className="text-[#FFC531]">★</span>
          <span className="text-[#101828]">
            {camper.rating}({camper.totalReviews} Reviews)
          </span>
        </div>
        
        <div className="flex items-center gap-1">
          <span className="text-[#101828]">📍</span>
          <span className="text-[#101828]">{camper.location}</span>
        </div>
      </div>

      {/* Ціна */}
      <p className="text-[32px] font-semibold text-[#101828] mt-2">
        €{camper.price}
      </p>

      {/* Опис */}
      <p className="text-[#475467] leading-[1.5] mt-2">
        {camper.description}
      </p>
    </div>
  );
};