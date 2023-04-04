import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Link from 'next/link';
import * as React from 'react';

import NextImage from '@/components/NextImage';

import Discord from '~/svg/discord.svg';
import Instagram from '~/svg/instagram.svg';
import Logo from '~/svg/logo-horizontal.svg';
import LogoWhite from '~/svg/logo-horizontal-white.svg';
import Cart from '~/svg/shopping-cart.svg';
import Twitter from '~/svg/twitter.svg';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  const [menu, setMenu] = React.useState(false);
  return (
    <div className='mx-auto xl:w-[1440px]'>
      <nav className='mx-6 my-6 flex items-center justify-between md:mx-10 md:my-5 lg:mx-16 lg:my-10 xl:mx-24 xl:my-12'>
        <Link href='/'>
          <Logo height='auto' className='w-[80px] md:w-auto' width={140} />
        </Link>
        <div
          onClick={() => {
            setMenu(true);
          }}
          className='block text-black lg:hidden'
        >
          <MenuIcon className='md:text-4xl' />
        </div>
        <div className='item-center hidden gap-14 lg:flex'>
          <Link href='#'>
            <p className='text-xl font-normal'>Blog</p>
          </Link>
          <Link href='#'>
            <p className='text-xl font-normal'>Download App</p>
          </Link>
          <Link href='/shop'>
            <Cart height='auto' width={35} />
          </Link>
        </div>
        <Drawer
          className='block lg:hidden'
          anchor='right'
          open={menu}
          onClose={() => {
            setMenu(false);
          }}
        >
          <Box
            className='w-[200px] px-4 md:w-[250px]'
            sx={{ width: 250 }}
            role='presentation'
          >
            <div className='mt-8 text-end'>
              <CloseIcon
                className='text-4xl md:text-5xl'
                onClick={() => {
                  setMenu(false);
                }}
              />
            </div>
            <List>
              <ListItem disablePadding>
                <Link href='/shop' className='w-full'>
                  <ListItemButton>
                    <h3 className='font-medium'>Shop</h3>
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link href='/#' className='w-full'>
                  <ListItemButton>
                    <h3 className='font-medium'>Blog</h3>
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link href='/#' className='w-full'>
                  <ListItemButton>
                    <h3 className='font-medium'>Download</h3>
                  </ListItemButton>
                </Link>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </nav>
      {children}
      <footer>
        <div className='grid grid-cols-4 bg-primary-800 px-10 py-6 text-white md:py-10 lg:px-24 lg:pt-16 lg:pb-36 xl:px-48'>
          <div className='col-span-4 flex flex-col gap-3 md:mb-8 lg:col-auto'>
            <LogoWhite height={70} width={140} className='mb-3 w-24 md:w-36' />
            <div className='hidden flex-col gap-3 lg:flex'>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                <NextImage
                  useSkeleton
                  className='w-36'
                  src='/images/app-store.png'
                  width='180'
                  height='180'
                  alt='Icon'
                />
              </a>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                <NextImage
                  useSkeleton
                  className='w-36'
                  src='/images/play-store.png'
                  width='180'
                  height='180'
                  alt='Icon'
                />
              </a>
            </div>
          </div>
          <div className='col-span-2 mb-8 flex flex-col gap-2 text-sm font-light md:mb-14 md:gap-3 md:text-base lg:col-auto lg:mb-0 xl:text-lg'>
            <h2 className='text-lg font-semibold md:mb-3 md:text-2xl md:font-normal xl:text-3xl'>
              Learn More
            </h2>
            <Link href='#'>
              <p>About</p>
            </Link>
            <Link href='#'>
              <p>Documentation</p>
            </Link>
            <Link href='#'>
              <p>Download</p>
            </Link>
            <Link href='#'>
              <p>FAQ</p>
            </Link>
          </div>
          <div className='col-span-2 flex flex-col gap-2 text-sm font-light md:gap-3 md:text-base lg:col-auto xl:text-lg'>
            <h2 className='text-lg font-semibold md:mb-3 md:text-2xl md:font-normal xl:text-3xl'>
              Legal
            </h2>
            <Link href='#'>
              <p>Privacy Policy</p>
            </Link>
            <Link href='#'>
              <p>Terms of use</p>
            </Link>
          </div>
          <div className='col-span-2 flex gap-1 md:gap-3 lg:col-auto lg:hidden'>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <NextImage
                useSkeleton
                className='w-16 md:w-24'
                src='/images/app-store.png'
                width='180'
                height='180'
                alt='Icon'
              />
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <NextImage
                useSkeleton
                className='w-16 md:w-24'
                src='/images/play-store.png'
                width='180'
                height='180'
                alt='Icon'
              />
            </a>
          </div>
          <div className='col-span-2 flex justify-end gap-3 md:gap-5 lg:col-auto lg:gap-8'>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <Instagram
                height={45}
                width={45}
                className='h-fit w-5 md:w-7 lg:h-auto lg:w-auto'
              />
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <Twitter
                height={45}
                width={45}
                className='h-fit w-5 md:w-7 lg:h-auto lg:w-auto'
              />
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <Discord
                height={45}
                width={45}
                className='h-fit w-5 md:w-7 lg:h-auto lg:w-auto'
              />
            </a>
          </div>
        </div>
        <div className='my-9 hidden w-full text-center text-xl font-medium lg:block'>
          © 2023 Xellar Technology. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
