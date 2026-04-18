import { ReviewItem } from './ReviewItem';
import { CamperReviews } from '@/types/camper';

interface Props {
  reviews: CamperReviews[];
}

export const ReviewsList = ({ reviews }: Props) => {
  if (reviews.length === 0) {
    return <p className="text-[#475467]">No reviews yet for this camper.</p>;
  }

  return (
    <div className="flex flex-col gap-11">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
};