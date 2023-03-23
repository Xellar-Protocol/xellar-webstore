import { Card, Typography } from '@material-tailwind/react';
import * as React from 'react';

import Bar from '@/components/Bar';
import { Input, Radio, SelectButton, Textarea } from '@/components/Input';
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
                Payment Info
              </Typography>
              <form className='mb-2 text-black'>
                <div className='mb-4 flex flex-col gap-6'>
                  <SelectButton
                    label='Payment Method'
                    id='method'
                    list={['Debit/Credit', 'Paypal']}
                  />
                  <Input
                    type='text'
                    label='Credit Card Number'
                    id='cc-number'
                  />
                  <div className='flex justify-between gap-3'>
                    <Input type='text' label='Name' id='name' />
                    <Input
                      type='text'
                      label='Expiry'
                      id='expiry'
                      maxLength={6}
                      className='!w-1/6'
                    />
                    <Input
                      type='text'
                      label='CVV'
                      id='cvv'
                      maxLength={4}
                      className='!w-1/6'
                    />
                  </div>
                  <Textarea label='Address' id='address' rows={4} />
                  <Radio
                    label='Shipping'
                    id='shipping'
                    value={['Instant', 'Next Day', 'Standard Delivery']}
                    description={[
                      'Rp.11,000 - Rp.13,000',
                      'Rp.11,000 - Rp.13,000',
                      'Rp.11,000 - Rp.13,000',
                    ]}
                  />
                </div>
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
              barClassName='h-2 rounded-full bg-black'
            />
          </div>
        </div>

        <div className='relative h-screen w-1/2 p-5'>
          <div className='absolute inset-0 box-border flex h-full w-full flex-col items-end justify-between bg-white bg-opacity-90 py-16 px-16'>
            <h1>Cart</h1>
            <div className='flex w-full flex-col items-end gap-8'>
              <div className='flex w-5/6 justify-between border-y border-black py-3'>
                <p>Xellar Hardware</p>
                <p>x1</p>
              </div>
              <div className='flex w-1/4 flex-col gap-4'>
                <div className='flex w-full justify-between'>
                  <p>Subtotal</p>
                  <p>$50.00</p>
                </div>
                <div className='flex w-full justify-between'>
                  <p>Shipping</p>
                  <p>$4.00</p>
                </div>
                <div className='flex w-full justify-between'>
                  <p>Total</p>
                  <p>$54.00</p>
                </div>
              </div>
              <button className='w-1/4 rounded-2xl bg-black py-5 font-bold text-white'>
                Pay
              </button>
            </div>
          </div>
          <div className='h-full rounded-3xl bg-[url("/images/hero-payment.png")] bg-cover' />
        </div>
      </main>
    </>
  );
}
