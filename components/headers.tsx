import React from 'react';
import Link from 'next/link'
import { Menu } from '@headlessui/react';
import { MenuIcon, HeartIcon, HomeIcon } from '@heroicons/react/solid';
import { ConnectWallet } from "@thirdweb-dev/react";

const menuItems = [
  { name: 'Map', href: '/map' },
  { name: 'Baggage', href: '/baggage' },
  { name: 'Story', href: '/story' },
  { name: 'NFT', href: '/nft' },
  { name: 'About Us', href: '/aboutus' },
];

const Header: React.FC = () => {
  return (
    <header className="bg-black p-3 border-b border-gray-500">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link key='top' href='/'>
            <div className="hidden md:flex">
              <HeartIcon className="text-white w-9 h-9 my-auto mx-3"/>
              <span className="text-white text-2xl md:text-4xl font-sansita">
                MEGARANICA
              </span>
            </div>
            <div className="flex md:hidden">
              <HomeIcon className="text-white w-9 h-9 my-auto mx-3"/>
            </div>
          </Link>
          <nav className="hidden md:flex items-center">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <span className='text-white text-lg px-3'>
                  {item.name}
                </span>
              </Link>
            ))}
            <div className='px-2'>
              <ConnectWallet />
            </div>
          </nav>
          <Menu as="nav" className="relative md:hidden">
            {({ open }) => (
              <>
                <Menu.Button className="text-white flex items-center">
                  <MenuIcon className="w-6 h-6" />
                </Menu.Button>
                {open && (
                  <Menu.Items
                    className="origin-top-left absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    static
                  >
                    <div className="py-1">
                      {menuItems.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link href={item.href} passHref>
                              <span className={`${
                                active
                                  ? 'bg-gray-500 text-white'
                                  : 'text-gray-900'
                                } block px-4 py-2 text-sm`}
                              >
                                {item.name}
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                )}
              </>
            )}
          </Menu>
          <div className='md:hidden'>
            <ConnectWallet />
          </div>        
        </div>
      </div>
    </header>
  );
};

export default Header;
