import { CamperReviews } from '@/types/camper';

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span 
          key={i} 
          className={i < rating ? "text-[#FFC531]" : "text-[#F2F4F7]"}
          style={{ fontSize: '16px' }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export const ReviewItem = ({ review }: { review: CamperReviews }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        {/* Аватар: перша літера імені */}
        <div className="w-[60px] h-[60px] bg-[#F2F4F7] text-[#E44848] rounded-full flex items-center justify-center text-2xl font-bold">
          {review.reviewer_name.charAt(0).toUpperCase()}
        </div>
        
        <div className="flex flex-col gap-1">
          <p className="font-bold text-[#101828] text-lg">
            {review.reviewer_name}
          </p>
          <StarRating rating={review.reviewer_rating} />
        </div>
      </div>
      
      {/* Текст відгуку */}
      <p className="text-[#475467] leading-relaxed">
        {review.comment}
      </p>
    </div>
  );
};