import { CamperReviews } from '@/types/camper';
import { Icon } from '@/components/Icon';

const Stars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => {
        // Якщо індекс менше за рейтинг, малюємо жовту зірку, інакше — сіру
        const isFilled = index < rating;
        return (
          <Icon 
            key={index} 
            name={isFilled ? 'star-yellow' : 'star-grey'} 
            size={16} 
          />
        );
      })}
    </div>
  );
};


export const ReviewItem = ({ review }: { review: CamperReviews }) => {
  return (
    <div className="flex flex-col gap-4 bg-badges rounded-2xl p-4">
      <div className="flex items-center gap-4">
        {/* Аватар (перша літера імені) */}
        <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center">
          <span className="text-2xl font-semibold text-grey-green">
            {review.reviewer_name.charAt(0).toUpperCase()}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <h4 className="text-lg font-semibold text-main">
            {review.reviewer_name}
          </h4>
          <Stars rating={review.reviewer_rating} />
        </div>
      </div>

      <p className="text-[#475467] leading-relaxed">
        {review.comment}
      </p>
    </div>
  );
};