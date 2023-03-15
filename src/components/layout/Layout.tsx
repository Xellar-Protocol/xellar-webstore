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
  return (
    <>
      <nav className='mx-24 my-12 flex items-center justify-between'>
        <Logo height='auto' width={140} />
        <div className='item-center flex gap-14'>
          <p className='text-xl font-normal'>Blog</p>
          <p className='text-xl font-normal'>Download App</p>
          <Cart height='auto' width={35} />
        </div>
      </nav>
      {children}
      <footer>
        <div className='grid grid-cols-4 bg-primary-800 px-48 pt-16 pb-36 text-white'>
          <div className='flex flex-col gap-3'>
            <LogoWhite height={70} width={140} className='mb-3' />
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
          <div className='flex flex-col gap-3 text-lg font-light'>
            <h2 className='mb-3 font-normal'>Learn More</h2>
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
          <div className='flex flex-col gap-3 text-lg font-light'>
            <h2 className='mb-3 font-normal'>Legal</h2>
            <Link href='#'>
              <p>Privacy Policy</p>
            </Link>
            <Link href='#'>
              <p>Terms of use</p>
            </Link>
          </div>
          <div className='flex justify-end gap-8'>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <Instagram height={45} width={45} />
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <Twitter height={45} width={45} />
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <Discord height={45} width={45} />
            </a>
          </div>
        </div>
        <div className='my-9 w-full text-center text-xl font-medium'>
          © 2023 Xellar Technology. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
