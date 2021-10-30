import React from 'react';

export interface InputProps {
  header: Array<string>;
  content: Array<Array<string>>;
  name: string;
  placeHolder: string;
}

export const Input = ({ name, placeHolder }: InputProps) => {
  return (
    <>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          {name}
        </label>
        <div className="mt-1">
          <input
            type="email"
            name="email"
            id="email"
            className=" focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder={placeHolder}
          />
        </div>
      </div>
    </>
  );
};
