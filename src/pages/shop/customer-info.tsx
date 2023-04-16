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
  const router = useRouter();

  const [price] = React.useState<number>(19.99);
  const [amount, setAmount] = React.useState(0);
  const [isValid, setIsValid] = React.useState(false);
  const [data, setData] = React.useState<any>({
    first_name: '',
    last_name: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    country: '',
    email_address: '',
    amount: 1,
  });

  const updateData = (e: React.ChangeEvent<HTMLInputElement>) => {
    data[e.target.id] = e.target.value;
    setData({ ...data });

    window.localStorage.setItem('customer_info', JSON.stringify(data));
    setIsValid(
      data.first_name &&
        data.address_1 &&
        data.city &&
        data.state &&
        data.postcode &&
        data.country &&
        data.email_address
    );
  };

  React.useEffect(() => {
    const userData = window.localStorage.getItem('customer_info');
    if (userData) {
      const obj = JSON.parse(userData);
      Object.entries(obj).map((item) => {
        data[item[0]] = item[1];
        setData({ ...data });
      });
    }

    setAmount(
      Number(window.localStorage.getItem('amount')) > 0
        ? Number(window.localStorage.getItem('amount'))
        : 1
    );
    data.amount =
      Number(window.localStorage.getItem('amount')) > 0
        ? Number(window.localStorage.getItem('amount'))
        : 1;
    setData({ ...data });
    setIsValid(
      data.first_name &&
        data.address_1 &&
        data.city &&
        data.state &&
        data.postcode &&
        data.country &&
        data.email_address
    );
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
                  $
                  {amount == 2
                    ? 36.99
                    : amount == 3
                    ? '50.00'
                    : (price * amount).toFixed(2)}{' '}
                  ({amount} item)
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
                <p>
                  $
                  {amount == 2
                    ? 36.99
                    : amount == 3
                    ? '50.00'
                    : (price * amount).toFixed(2)}
                </p>
              </div>
              <div className='ml-auto w-32 md:w-40'>
                <div className='flex justify-between'>
                  <p>Subtotal</p>
                  <p>
                    $
                    {amount == 2
                      ? 36.99
                      : amount == 3
                      ? '50.00'
                      : (price * amount).toFixed(2)}
                  </p>
                </div>
                <div className='flex justify-between'>
                  <p>Shipping</p>
                  <p>...</p>
                </div>
                <div className='flex justify-between'>
                  <p>Total</p>
                  <p>
                    $
                    {amount == 2
                      ? 36.99
                      : amount == 3
                      ? '50.00'
                      : (price * amount).toFixed(2)}
                  </p>
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
                      id='first_name'
                      className='col-span-2 md:col-span-1'
                      required
                      value={data.first_name}
                      onChange={updateData}
                    />
                    <Input
                      type='text'
                      label='Last name'
                      id='last_name'
                      className='col-span-2 md:col-span-1'
                      value={data.last_name}
                      onChange={updateData}
                    />
                  </div>
                  <Input
                    type='text'
                    label='Address 1'
                    id='address_1'
                    required
                    value={data.address_1}
                    onChange={updateData}
                  />
                  <Input
                    type='text'
                    label='Address 2'
                    id='address_2'
                    value={data.address_2}
                    onChange={updateData}
                  />
                  <div className='grid grid-cols-10 gap-3'>
                    <Input
                      type='text'
                      label='City'
                      id='city'
                      className='col-span-10 md:col-span-6'
                      required
                      value={data.city}
                      onChange={updateData}
                    />
                    <Input
                      type='text'
                      label='State'
                      id='state'
                      maxLength={6}
                      className='col-span-5 md:col-span-2'
                      required
                      value={data.state}
                      onChange={updateData}
                    />
                    <Input
                      type='text'
                      label='Postcode'
                      id='postcode'
                      maxLength={5}
                      className='col-span-5 md:col-span-2'
                      required
                      value={data.postcode}
                      onChange={updateData}
                    />
                  </div>
                  <Input
                    type='text'
                    label='Country'
                    id='country'
                    required
                    value={data.country}
                    onChange={updateData}
                  />
                  <Input
                    type='text'
                    label='Email Address'
                    id='email_address'
                    required
                    value={data.email_address}
                    onChange={updateData}
                  />
                </div>
                <div className='w-full text-end'>
                  {isValid ? (
                    <Link href='/shop/payment-info'>
                      <Button className='mt-4 mb-4 mr-0 w-40 rounded-2xl bg-black text-base capitalize md:w-64 md:text-lg lg:mb-0 lg:w-full'>
                        Next
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      disabled
                      className='mt-4 mb-4 mr-0 w-40 cursor-not-allowed rounded-2xl bg-black text-base capitalize md:w-64 md:text-lg lg:mb-0 lg:w-full'
                    >
                      Next
                    </Button>
                  )}
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
