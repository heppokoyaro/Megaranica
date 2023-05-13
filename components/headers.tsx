import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { Menu } from '@headlessui/react';
import { MenuIcon, HeartIcon, HomeIcon } from '@heroicons/react/solid';
import { ConnectWallet } from "@thirdweb-dev/react";

const menuItems = [
  { name: 'Map', href: '/map' },
  { name: 'Story', href: '/story' },
  { name: 'MyPage', href: '/mypage' },
  // { name: 'About Us', href: '/team' },
];

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="bg-megaranica p-3 border-b border-gray-500">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link key='top' href='/'>
            <div className="hidden md:flex">
              <HeartIcon className="text-white w-9 h-9 my-auto mx-3"/>
              <span className="text-white text-2xl md:text-4xl font-sansita">
                Megaranica
              </span>
            </div>
            <div className="flex md:hidden">
              <HomeIcon className="text-white w-9 h-9 my-auto mx-3"/>
            </div>
          </Link>
          <nav className="hidden md:flex items-center">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <span className={`text-lg px-3 ${
                  router.pathname === item.href ? 'text-pink-500' : 'text-white'
                }`}>
                  {item.name}
                </span>
              </Link>
            ))}
            <Menu as="div" className="relative">
              <Menu.Button className="text-lg px-3 text-white">
                More
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-megaranica ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <Menu.Item>
                  {({ active }) => (
                    <Link href='/team' passHref>
                      <span className={`${
                        active ? 'bg-gray-500 text-white' : 'text-white'
                      } block px-4 py-2 text-sm`}>
                        About Us
                      </span>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href='/wp' passHref>
                      <span className={`${
                        active ? 'bg-gray-500 text-white' : 'text-white'
                      } block px-4 py-2 text-sm`}>
                        WP
                      </span>
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
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
                    className="origin-top-left absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-megaranica ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
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
                                  : 'text-white'
                                } block px-4 py-2 text-sm`}
                              >
                                {item.name}
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                      <Menu.Item>
                        {({ active }) => (
                          <Link href='/team' passHref>
                            <span className={`${
                              active ? 'bg-gray-500 text-white' : 'text-white'
                            } block px-4 py-2 text-sm`}>
                              About Us
                            </span>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link href='/wp' passHref>
                            <span className={`${
                              active ? 'bg-gray-500 text-white' : 'text-white'
                            } block px-4 py-2 text-sm`}>
                              WP
                            </span>
                          </Link>
                        )}
                      </Menu.Item>
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
