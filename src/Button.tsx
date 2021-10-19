import React from 'react';

export interface ButtonProps {
  title: string;
  link: string;
}

export const Button = ({ title, link }: ButtonProps) => {
  return (
    <>
      <a href={link}>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-custom shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {title}
        </button>
      </a>
    </>
  );
};
