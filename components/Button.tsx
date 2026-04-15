'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  // type допоможе формі не перезавантажувати сторінку помилково
  type?: 'button' | 'submit'; 
  className?: string;
}

export const Button = ({
  children,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      // Використовуємо твій колір grey-green і додаємо hover ефект
      className={`
        bg-grey-green 
        hover:bg-green-hover 
        text-white 
        px-10 
        py-4 
        rounded-full 
        font-medium 
        transition-all 
        duration-300
        active:scale-95 
        ${className}
      `}
    >
      {children}
    </button>
  );
};