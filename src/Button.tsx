import React from 'react';

export interface ButtonProps {
  title: string;
  link: string;
  variant?: 'primary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({ title, link, variant, size }: ButtonProps) => {
  variant === 'primary' ? <>a</> : null;
  return (
    <>
      <a href={link}>
        <button
          type="button"
          className={`shadow-none rounded focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center 
          ${
            variant?.toLowerCase() === 'primary' &&
            'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 border border-transparent'
          }
          ${
            variant?.toLowerCase() === 'ghost' &&
            'bg-white text-gray-600 hover:bg-gray-50 focus:ring-blue-500 border border-gray-400'
          }
          ${
            size?.toLowerCase() === 'small' && 'px-2 py-1.5 text-sm font-medium'
          }
          ${
            size?.toLowerCase() === 'medium' &&
            'px-3 py-1.5 text-base font-medium'
          }
          ${
            size?.toLowerCase() === 'large' && 'px-4 py-2 text-base font-medium'
          }
          `}
        >
          {title}
        </button>
      </a>
    </>
  );
};
