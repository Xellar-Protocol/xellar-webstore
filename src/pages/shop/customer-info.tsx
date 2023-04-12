import { Button, Card, Typography } from '@material-tailwind/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import Bar from '@/components/Bar';
import { Input } from '@/components/Input';
import Seo from '@/components/Seo';

import Logo from '~/svg/logo-horizontal.svg';
import Cart from '~/svg/shopping-cart.svg';

export default function CustomerInfo() {
  const [amount, setAmount] = React.useState(0);
  const router = useRouter();

  React.useEffect(() => {
    setAmount(Number(window.localStorage.getItem('amount')));
  }, []);

  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='flex h-screen justify-between'>
        <div className='flex w-full flex-col justify-between px-5 py-5 md:px-10 lg:h-screen lg:w-1/2 xl:px-24'>
          <div>
            <div className='my-2 flex justify-between md:my-5'>
              <Link href='/' className='flex items-center gap-1 md:gap-2'>
                <Logo
                  height='auto'
                  className='w-[80px] md:w-auto'
                  width={140}
                />
                {router?.pathname?.split('/')[1] === 'shop' ? (
                  <h1 className='text-xl font-semibold md:mb-1 md:text-4xl lg:hidden'>
                    Shop
                  </h1>
                ) : (
                  ''
                )}
              </Link>
              <div className='flex items-center justify-end gap-1 md:gap-4'>
                <p className='text-sm font-medium md:text-xl'>
                  $50.00 ({amount} item)
                </p>
                <Link href='/shop'>
                  <Cart
                    height='auto'
                    width={35}
                    className='w-[25px] md:w-auto'
                  />
                </Link>
              </div>
            </div>
            <div className='mt-7 mb-5 flex justify-between gap-2 md:gap-5 lg:hidden'>
              <Bar
                label='Cart'
                containerClassName='w-full'
                labelClassName='text-xs md:text-sm mb-3'
                barClassName='h-2 rounded-full bg-black'
              />
              <Bar
                label='Customer info'
                containerClassName='w-full'
                labelClassName='text-xs md:text-sm mb-3'
                barClassName='h-2 rounded-full bg-black'
              />
              <Bar
                label='Payment info'
                containerClassName='w-full'
                labelClassName='text-xs md:text-sm mb-3'
                barClassName='h-2 rounded-full bg-[#C0C0C0]'
              />
            </div>
            <div className='rounded-xl bg-[#EFF1F3] px-4 py-3 md:px-7 md:py-5 lg:hidden'>
              <h1>Cart</h1>
              <div className='my-5 flex justify-between border-y border-black py-3'>
                <div className='flex gap-3'>
                  <p>{amount}x</p>
                  <p>Xellar Hardware</p>
                </div>
                <p>$50.00</p>
              </div>
              <div className='ml-auto w-32 md:w-40'>
                <div className='flex justify-between'>
                  <p>Subtotal</p>
                  <p>$50.00</p>
                </div>
                <div className='flex justify-between'>
                  <p>Shipping</p>
                  <p>...</p>
                </div>
                <div className='flex justify-between'>
                  <p>Total</p>
                  <p>$50.00</p>
                </div>
              </div>
            </div>
            <Card
              color='transparent'
              shadow={false}
              className='mt-4 md:mt-10 lg:mt-12'
            >
              <Typography
                variant='h4'
                color='black'
                className='mb-4 font-extrabold md:mb-8'
              >
                Customer Info
              </Typography>
              <form className='mb-2 text-black'>
                <div className='mb-4 flex flex-col gap-3 xl:gap-4'>
                  <div className='grid grid-cols-2 gap-3'>
                    <Input
                      type='text'
                      label='First name'
                      id='first-name'
                      className='col-span-2 md:col-span-1'
                    />
                    <Input
                      type='text'
                      label='Last name'
                      id='last-name'
                      className='col-span-2 md:col-span-1'
                    />
                  </div>
                  <Input type='text' label='Address 1' id='address-1' />
                  <Input type='text' label='Address 2' id='address-2' />
                  <div className='grid grid-cols-10 gap-3'>
                    <Input
                      type='text'
                      label='City'
                      id='city'
                      className='col-span-10 md:col-span-6'
                    />
                    <Input
                      type='text'
                      label='State'
                      id='state'
                      maxLength={6}
                      className='col-span-5 md:col-span-2'
                    />
                    <Input
                      type='text'
                      label='Postcode'
                      id='postcode'
                      maxLength={5}
                      className='col-span-5 md:col-span-2'
                    />
                  </div>
                  <Input type='text' label='Country' id='country' />
                  <Input type='text' label='Email Address' id='email-address' />
                </div>
                <div className='w-full text-end'>
                  <Link href='/shop/payment-info'>
                    <Button className='mt-4 mb-4 mr-0 w-40 rounded-2xl bg-black text-base capitalize md:w-64 md:text-lg lg:mb-0 lg:w-full'>
                      Next
                    </Button>
                  </Link>
                </div>
              </form>
            </Card>
          </div>
          <div className='hidden justify-between gap-5 lg:flex'>
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

        <div className='hidden h-screen p-5 lg:block lg:w-1/2'>
          <div className='h-full rounded-3xl bg-[url("/images/hero-payment.png")] bg-cover' />
        </div>
      </main>
    </>
  );
}
