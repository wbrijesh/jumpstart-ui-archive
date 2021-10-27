import React from 'react';
import { LogOut, Trash } from 'react-feather';

export interface ButtonProps {
  title: string;
  link: string;
  variant?:
    | 'primary'
    | 'ghost'
    | 'link'
    | 'fullWidth'
    | 'success'
    | 'warning'
    | 'danger';
  size?: 'small' | 'medium' | 'large';
  icon?: 'string';
  iconPosition?: 'left' | 'right';
}

export const Button = ({
  title,
  link,
  variant,
  size,
  icon,
  iconPosition,
}: ButtonProps) => {
  return (
    <>
      <a
        className={`
          ${variant?.toLowerCase() === 'fullwidth' && 'w-full text-center'}`}
        href={link}
      >
        <button
          type="button"
          className={`shadow-none rounded focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex justify-center
          ${
            variant?.toLowerCase() === 'primary' &&
            'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 border border-transparent'
          }
          ${
            variant?.toLowerCase() === 'success' &&
            'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 border border-transparent'
          }
          ${
            variant?.toLowerCase() === 'warning' &&
            'bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500 border border-transparent'
          }
          ${
            variant?.toLowerCase() === 'danger' &&
            'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 border border-transparent'
          }
          ${
            variant?.toLowerCase() === 'ghost' &&
            'bg-white text-gray-600 hover:bg-gray-50 focus:ring-blue-500 border border-gray-400'
          }
          ${
            variant?.toLowerCase() === 'link' &&
            'bg-white text-blue-600 hover:bg-gray-100 px-2 py-0.5 text-base font-medium'
          }
          ${
            variant?.toLowerCase() === 'fullwidth' &&
            'w-full bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 border border-transparent'
          }
          ${
            size?.toLowerCase() === 'small' &&
            variant?.toLowerCase() !== 'link' &&
            'px-2 py-1.5 text-sm font-medium'
          }
          ${
            size?.toLowerCase() === 'medium' &&
            variant?.toLowerCase() !== 'link' &&
            'px-3 py-1.5 text-base font-medium'
          }
          ${
            size?.toLowerCase() === 'large' &&
            variant?.toLowerCase() !== 'link' &&
            'px-4 py-2 text-base font-medium'
          }
          `}
        >
          {iconPosition === 'left' && icon === 'logout' ? (
            <LogOut
              className={`
              ${size?.toLowerCase() !== 'large' && 'h-4'}
              ${size?.toLowerCase() === 'large' && 'h-5'} 
              my-auto -ml-0.5 mr-1`}
            />
          ) : null}
          {iconPosition === 'left' && icon === 'delete' ? (
            <Trash
              className={`
              ${size?.toLowerCase() !== 'large' && 'h-4'}
              ${size?.toLowerCase() === 'large' && 'h-5'} 
              my-auto -ml-0.5 mr-1`}
            />
          ) : null}
          {title}
          {iconPosition === 'right' && icon === 'logout' ? (
            <LogOut
              className={`
              ${size?.toLowerCase() !== 'large' && 'h-4'}
              ${size?.toLowerCase() === 'large' && 'h-5'} 
              my-auto -mr-1`}
            />
          ) : null}
          {iconPosition === 'right' && icon === 'delete' ? (
            <Trash
              className={`
              ${size?.toLowerCase() !== 'large' && 'h-4'}
              ${size?.toLowerCase() === 'large' && 'h-5'} 
              my-auto -mr-1`}
            />
          ) : null}
        </button>
      </a>
    </>
  );
};
