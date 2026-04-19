import { DetailedCamper } from '@/types/camper';
import {Icon} from '@/components/Icon';

interface Props {
  camper: DetailedCamper;
}

export const CamperMainInfo = ({ camper }: Props) => {
  return (
    <div className="flex flex-col bg-badges rounded-2xl p-4 gap-4">
      {/* Назва кемпера */}
      <h1 className="text-[32px] font-semibold leading-[1.2]">
        {camper.name}
      </h1>

      {/* Рейтинг та Локація */}
      <div className="flex items-center gap-4 text-base">
        <div className="flex items-center gap-1">
          <Icon name='star-yellow'/>
          <span className="">
            {camper.rating}({camper.totalReviews} Reviews)
          </span>
        </div>
        
        <div className="flex items-center gap-1">
          <Icon name='map'/>
          <span className="">{camper.location}</span>
        </div>
      </div>

      {/* Ціна */}
      <p className="text-[32px] font-semibold  mt-2">
        €{camper.price}
      </p>

      {/* Опис */}
      <p className="text-text leading-[1.5] mt-2">
        {camper.description}
      </p>
    </div>
  );
};