import React from 'react';
<<<<<<< HEAD

import { Disclosure } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

// function classNames(...classes: any[]) {
//   return classes.filter(Boolean).join(' ');
// }
=======
import { Disclosure, Menu } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
>>>>>>> develop

export interface NavbarProps {
  appName?: string;
  appLogo: string;
  homePageUrl: string;
  buttonFilledTitle: string;
  buttonFilledUrl: string;
  buttonBlankTitles: Array<string>;
  buttonBlankUrls: Array<string>;
}

export const Navbar = ({
  appName,
  homePageUrl,
  buttonFilledTitle,
  buttonFilledUrl,
  buttonBlankTitles,
  buttonBlankUrls,
<<<<<<< HEAD
}: NavbarProps) => (
  <>
    <Disclosure as="nav" className="bg-gray-50 shadow">
=======
}: NavbarProps) => {
  return (
    <Disclosure as="nav" className="bg-gray-50">
>>>>>>> develop
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-22">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <a href={homePageUrl} className="flex-shrink-0">
                    <h2 className="text-xl text-gray-900 font-semibold">
                      {appName}
                    </h2>
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
<<<<<<< HEAD
                  {buttonBlankTitles.map((title, index) => (
                    <a href={buttonBlankUrls[index]} type="button">
                      <span className="mr-4 relative inline-flex items-center px-2 py-1 border border-transparent text-base font-medium rounded-custom text-gray-600 bg-gray-50 shadow-none hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                        {title}
                      </span>
                    </a>
                  ))}
                  <a href={buttonFilledUrl}>
                    <button
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-custom text-white bg-blue-600 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
=======
                  <a href={buttonFilledUrl}>
                    <button
                      type="button"
                      className="relative md:invisible inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-custom text-white bg-blue-600 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
>>>>>>> develop
                    >
                      <span>{buttonFilledTitle}</span>
                    </button>
                  </a>
<<<<<<< HEAD
=======
                </div>
                <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                  <Menu as="div" className="ml-3 relative">
                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                      {buttonBlankTitles.map((title, index) => (
                        <a href={buttonBlankUrls[index]} type="button">
                          <span className="mr-4 relative inline-flex items-center px-2 py-1 border border-transparent text-base font-medium rounded-custom text-gray-600 bg-gray-50 shadow-none hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                            {title}
                          </span>
                        </a>
                      ))}
                      <a href={buttonFilledUrl}>
                        <button
                          type="button"
                          className="relative hidden:onlyMobile inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-custom text-white bg-blue-600 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          <span>{buttonFilledTitle}</span>
                        </button>
                      </a>
                    </div>
                  </Menu>
>>>>>>> develop
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {buttonBlankTitles.map((title, index) => (
                <a
                  key={index}
                  href={buttonBlankUrls[index]}
                  className="text-gray-600 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {title}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
