import { Button, Card, Typography } from '@material-tailwind/react';
import Link from 'next/link';
import * as React from 'react';

import Bar from '@/components/Bar';
import { Input } from '@/components/Input';
import Seo from '@/components/Seo';

import Logo from '~/svg/logo-horizontal.svg';
import Cart from '~/svg/shopping-cart.svg';

export default function CustomerInfo() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='flex h-screen justify-between'>
        <div className='flex h-screen w-1/2 flex-col justify-between px-24 py-5'>
          <div>
            <div className='my-5 flex justify-between'>
              <Logo height='auto' width={140} />
              <div className='flex items-center gap-4'>
                <p className='text-xl font-medium'>$50.00 (1 item)</p>
                <Cart height='auto' width={35} />
              </div>
            </div>
            <Card color='transparent' shadow={false} className='mt-12'>
              <Typography
                variant='h4'
                color='black'
                className='mb-8 font-extrabold'
              >
                Customer Info
              </Typography>
              <form className='mb-2 text-black'>
                <div className='mb-4 flex flex-col gap-6'>
                  <div className='flex justify-between gap-3'>
                    <Input type='text' label='First name' id='first-name' />
                    <Input type='text' label='Last name' id='last-name' />
                  </div>
                  <Input type='text' label='Address 1' id='address-1' />
                  <Input type='text' label='Address 2' id='address-2' />
                  <div className='flex justify-between gap-3'>
                    <Input type='text' label='City' id='city' />
                    <Input
                      type='text'
                      label='State'
                      id='state'
                      maxLength={6}
                      className='!w-1/6'
                    />
                    <Input
                      type='text'
                      label='Postcode'
                      id='postcode'
                      maxLength={5}
                      className='!w-1/6'
                    />
                  </div>
                  <Input type='text' label='Country' id='country' />
                  <Input type='text' label='Email Address' id='email-address' />
                </div>
                <Link href='/shop/payment-info'>
                  <Button className='mt-10 bg-black' fullWidth>
                    Next
                  </Button>
                </Link>
              </form>
            </Card>
          </div>
          <div className='flex justify-between gap-5'>
            <Bar
              label='Cart'
              containerClassName='w-full'
              labelClassName='text-sm mb-3'
              barClassName='h-2 rounded-full bg-black'
            />
            <Bar
              label='Customer info'
              containerClassName='w-full'
              labelClassName='text-sm mb-3'
              barClassName='h-2 rounded-full bg-black'
            />
            <Bar
              label='Payment info'
              containerClassName='w-full'
              labelClassName='text-sm mb-3'
              barClassName='h-2 rounded-full bg-[#C0C0C0]'
            />
          </div>
        </div>

        <div className='h-screen w-1/2 p-5'>
          <div className='h-full rounded-3xl bg-[url("/images/hero-payment.png")] bg-cover' />
        </div>
      </main>
    </>
  );
}
