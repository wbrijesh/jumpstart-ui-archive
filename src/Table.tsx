import React from 'react';

export interface TableProps {
  header: Array<string>;
  content: Array<Array<string>>;
}

export const Table = ({ header, content }: TableProps) => {
  return (
    <>
      <div className="flex flex-col max-w-4xl">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 sm:rounded-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-200">
                  <tr>
                    {header.map((header, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header.toUpperCase()}
                      </th>
                    ))}
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {content.map((row, index) => (
                    <tr key={index}>
                      {row.map((cell, index) => (
                        <td
                          key={index}
                          className="px-6 py-4 whitespace-no-wrap"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
