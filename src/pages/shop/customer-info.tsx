import { Button, Card, Input, Typography } from '@material-tailwind/react';
import * as React from 'react';

import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import Logo from '~/svg/logo-horizontal.svg';
import Cart from '~/svg/shopping-cart.svg';

export default function Shop() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='flex h-screen justify-between'>
        <div className='h-screen w-1/2 px-24'>
          <div className='my-8 flex justify-between'>
            <Logo height='auto' width={140} />
            <div className='flex items-center gap-4'>
              <p className='text-xl font-medium'>$50.00 (1 item)</p>
              <Cart height='auto' width={35} />
            </div>
          </div>
          <Card color='transparent' shadow={false} className='my-20'>
            <Typography
              variant='h4'
              color='black'
              className='mb-5 font-extrabold'
            >
              Customer Info
            </Typography>
            <form className='mt-8 mb-2'>
              <div className='mb-4 flex flex-col gap-8'>
                <div className='flex justify-between gap-3'>
                  <Input size='lg' label='First name' />
                  <Input size='lg' label='Last name' />
                </div>
                <Input size='lg' label='Address 1' />
                <Input size='lg' label='Address 2' />
                <div className='flex justify-between gap-3'>
                  <Input size='lg' label='City' />
                  <Input size='lg' label='State' />
                  <Input size='lg' label='Postcode' />
                </div>
                <Input size='lg' label='Country' />
                <Input size='lg' label='Email Address' />
              </div>
              <Button className='mt-8 bg-black' fullWidth>
                Next
              </Button>
            </form>
          </Card>
        </div>

        <NextImage
          className='m-5 w-1/2'
          imgClassName='h-full w-auto'
          blurClassName='h-full w-auto'
          useSkeleton
          src='/images/hero-payment.png'
          width='10000'
          height='10000'
          alt='Icon'
        />
      </main>
    </>
  );
}
