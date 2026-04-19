import { IconName } from '@/types/icon';

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export const Icon = ({ name, size = 20, className = "", }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      fill="currentColor"
      stroke="currentColor"
    >
      {/* Посилаємося на id всередині спрайта */}
      <use href={`/sprite.svg#icon-${name}`} />
    </svg>
  );
};