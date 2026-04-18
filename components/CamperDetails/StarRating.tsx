export const StarRating = ({ rating }: { rating: number }) => {
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