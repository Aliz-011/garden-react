import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition, Popover } from '@headlessui/react';
import { HiBell } from 'react-icons/hi';
import { MdCheck, MdLogout } from 'react-icons/md';
import { GiPlantSeed } from 'react-icons/gi';

const links = [
  { id: 1, title: 'garden' },
  { id: 2, title: 'energy' },
  { id: 3, title: 'alerts' },
  { id: 4, title: 'settings' },
];

const Navbar = () => {
  const [active, setActive] = useState('');

  const logout = async () => {
    //
  };

  const handleClick = () => {};

  useEffect(() => {}, [handleClick]);

  return (
    <header className="container mx-auto max-w-5xl">
      <nav className="flex justify-between items-center py-4 sm:px-0 px-6">
        <Link to="/" className="font-semibold flex items-center">
          <GiPlantSeed className="w-8 h-8" />
          <span className="hidden sm:inline-block text-2xl">garden</span>
        </Link>

        <div className="flex items-center">
          <Popover className="relative ">
            <Popover.Button className="outline-none mr-5 md:mr-8 cursor-pointer text-gray-700">
              <HiBell className="w-6 h-6" />
            </Popover.Button>
            <div className="absolute bg-red-500 w-[10px] h-[10px] top-0 left-4 rounded-full" />
            <Transition
              as={Fragment}
              enter="transition easa-out duration-100"
              enterFrom="transform scale-95"
              enterTo="transform scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform scale-100"
              leaveTo="transform scale-95"
            >
              <Popover.Panel className="absolute -right-8 sm:right-4 z-50 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen">
                <div className="relative p-3">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-gray-700 font-medium">Notification</p>
                    <span
                      onClick={handleClick}
                      className="text-sm text-orange-500 cursor-pointer"
                      href="#"
                    >
                      Mark all as read
                    </span>
                  </div>

                  <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                    <div className="flex">
                      <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                        <MdCheck className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-700">
                          Notification title
                        </p>
                        <p className="font-sm text-gray-500 truncate">
                          Dini sent you a letter
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Menu as="div" className="relative inline-block text-left ">
            <div>
              <Menu.Button className="inline-flex w-full justify-center items-center">
                <picture>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/messanger-e2203.appspot.com/o/images%2Fdini%20abshari?alt=media&token=6a5b1b4c-82f6-4a87-b0ba-d837378eb180"
                    className="rounded-full h-8 w-8 md:mr-2 border-2 border-white shadow-sm"
                    alt="profile"
                  />
                </picture>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition easa-out duration-100"
              enterFrom="transform scale-95"
              enterTo="transform scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform scale-100"
              leaveTo="transform scale-95"
            >
              <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
                <div className="p-1">
                  {links.map((link) => (
                    <Menu.Item key={link.id}>
                      <Link
                        to={link.title}
                        className="flex hover:bg-gray-200 capitalize text-gray-700 hover:text-white rounded p-2 text-sm group transition-colors items-center"
                      >
                        {link.title}
                      </Link>
                    </Menu.Item>
                  ))}
                  <div className="w-full h-0.5 bg-gray-100" />
                  <Menu.Item>
                    <div
                      onClick={logout}
                      className="flex cursor-pointer gap-2 hover:bg-gray-200 capitalize text-gray-700 hover:text-white rounded p-2 text-sm group transition-colors items-center"
                    >
                      <MdLogout className="font-bold" />
                      <span>Logout</span>
                    </div>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
