'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit'; 
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
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
        disabled:bg-gray-300 
        disabled:cursor-not-allowed 
        disabled:active:scale-100
        ${className}
      `}
    >
      {children}
    </button>
  );
};