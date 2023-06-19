import { Button, Card, Typography } from '@material-tailwind/react';
import { Dialog } from '@mui/material';
import {
  PayPalHostedField,
  PayPalHostedFieldsProvider,
  PayPalScriptProvider,
  usePayPalHostedFields,
} from '@paypal/react-paypal-js';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { toast } from 'react-toastify';

import Bar from '@/components/Bar';
import { Input, Radio, SelectButton, Textarea } from '@/components/Input';
import Seo from '@/components/Seo';

import Cities from '@/constant/cityId.json';

import Logo from '~/svg/logo-horizontal.svg';
import Cart from '~/svg/shopping-cart.svg';

interface Props {
  customer: any;
  shipping: any;
  children: React.ReactNode;
}

function PaymentInfo({ customer, shipping, children }: Props) {
  const router = useRouter();
  const hostedField = usePayPalHostedFields();

  const [price] = React.useState<Array<number>>([19.99, 36.99, 50.0]);
  const [open, setOpen] = React.useState(false);
  const [amount, setAmount] = React.useState(0);
  const [isDisable, setIsDisable] = React.useState(false);
  const [data, setData] = React.useState<any>({});
  const [courier, setCourier] = React.useState(0);

  const getCourier = (index: number) => {
    setCourier(index);
    window.localStorage.setItem('courier', index.toString());
  };

  const handleClick = () => {
    if (!hostedField?.cardFields) {
      const childErrorMessage =
        'Unable to find any child components in the <PayPalHostedFieldsProvider />';
      throw new Error(childErrorMessage);
    }

    const isFormInvalid =
      Object.values(hostedField.cardFields.getState().fields).some(
        (field) => !field.isValid
      ) ||
      !data.name ||
      !data.address;

    if (isFormInvalid) {
      console.log('Form invalid');
      toast.error('Form invalid', {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000,
      });
      return;
    }

    data.courier = courier;
    setData({ ...data });

    setOpen(true);
    setIsDisable(true);
    hostedField.cardFields
      .submit(data)
      .then((data) => {
        // Your logic to capture the transaction
        fetch(`/api/payment-paypal/${data.orderId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(customer),
        })
          .then((response) => response.json())
          .then((data) => {
            toast.success('Payment Successful!', {
              position: toast.POSITION.BOTTOM_LEFT,
              autoClose: 3000,
            });
            window.localStorage.removeItem('amount');
            window.localStorage.removeItem('customer_info');
            router.push('/shop');
          })
          .catch((err) => {
            console.log(err);
            toast.error(err, {
              position: toast.POSITION.BOTTOM_LEFT,
              autoClose: 3000,
            });
          })
          .finally(() => {
            setOpen(false);
            setIsDisable(false);
          });
      })
      .catch((err) => {
        console.log(err);
        setOpen(false);
        setIsDisable(false);
      });
  };

  const updateData = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    data[e.target.id] = e.target.value;
    setData({ ...data });
  };

  React.useEffect(() => {
    setAmount(
      Number(window.localStorage.getItem('amount')) > 0
        ? Number(window.localStorage.getItem('amount'))
        : 1
    );
  }, []);

  return (
    <div className='flex h-screen justify-between'>
      <div className='flex w-full flex-col justify-between px-5 py-5 md:px-10 lg:h-screen lg:w-1/2 xl:px-24'>
        <div>
          <div className='my-2 flex justify-between md:my-5'>
            <Link href='/' className='flex items-center gap-1 md:gap-2'>
              <Logo height='auto' className='w-[80px] md:w-auto' width={140} />
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
                {amount > 3
                  ? Number(
                      (
                        ((amount - (amount % 3)) / 3) * Number(price[2]) +
                        (amount % 3 > 0 ? Number(price[(amount % 3) - 1]) : 0)
                      ).toFixed(2)
                    ).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  : Number(price[amount - 1]).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{' '}
                ({amount} item)
              </p>
              <Link href='/shop'>
                <Cart height='auto' width={35} className='w-[25px] md:w-auto' />
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
              barClassName='h-2 rounded-full bg-black'
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
                {amount > 3
                  ? Number(
                      (
                        ((amount - (amount % 3)) / 3) * Number(price[2]) +
                        (amount % 3 > 0 ? Number(price[(amount % 3) - 1]) : 0)
                      ).toFixed(2)
                    ).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  : Number(price[amount - 1]).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
              </p>
            </div>
            <div className='ml-auto w-32 md:w-40'>
              <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>
                  $
                  {amount > 3
                    ? Number(
                        (
                          ((amount - (amount % 3)) / 3) * Number(price[2]) +
                          (amount % 3 > 0 ? Number(price[(amount % 3) - 1]) : 0)
                        ).toFixed(2)
                      ).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    : Number(price[amount - 1]).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                </p>
              </div>
              <div className='flex justify-between'>
                <p>Shipping</p>
                <p>
                  $
                  {shipping?.data[courier].cost.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <div className='flex justify-between'>
                <p>Total</p>
                <p>
                  $
                  {amount > 3
                    ? Number(
                        (
                          ((amount - (amount % 3)) / 3) * Number(price[2]) +
                          (amount % 3 > 0
                            ? Number(price[(amount % 3) - 1])
                            : 0) +
                          shipping?.data[courier].cost
                        ).toFixed(2)
                      ).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    : (
                        Number(price[amount - 1]) + shipping?.data[courier].cost
                      ).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
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
              Payment Info
            </Typography>
            <form className='mb-2 text-black'>
              <div className='mb-4 flex flex-col gap-3 xl:gap-4'>
                <SelectButton
                  label='Payment Method'
                  id='method'
                  // list={['Debit/Credit', 'Paypal']}
                  list={['Paypal']}
                />
                <Input
                  type='text'
                  label='Name'
                  id='name'
                  onChange={updateData}
                  inputClassname='focus:!ring-0 focus:!ring-transparent focus:!transition-none focus:!outline-0'
                />
                {/* {children} */}
                <div className='grid grid-cols-10 gap-3'>
                  <div className='col-span-10 flex w-full flex-col md:col-span-6'>
                    <label htmlFor='card-number' className='mb-3 font-medium'>
                      Credit Card Number <span className='text-red-700'>*</span>
                    </label>
                    <PayPalHostedField
                      id='card-number'
                      className='box-border h-11 rounded-xl border border-[#BBB9B9] p-1 duration-300 ease-in-out'
                      hostedFieldType='number'
                      options={{
                        selector: '#card-number',
                      }}
                    />
                  </div>
                  <div className='col-span-5 flex w-full flex-col md:col-span-2'>
                    <label htmlFor='card-number' className='mb-3 font-medium'>
                      CVV <span className='text-red-700'>*</span>
                    </label>
                    <PayPalHostedField
                      id='cvv'
                      className='box-border h-11 rounded-xl border border-[#BBB9B9] px-4 py-1 duration-300 ease-in-out'
                      hostedFieldType='cvv'
                      options={{
                        selector: '#cvv',
                        maskInput: true,
                      }}
                    />
                  </div>
                  <div className='col-span-5 flex w-full flex-col md:col-span-2'>
                    <label htmlFor='card-number' className='mb-3 font-medium'>
                      Expiry <span className='text-red-700'>*</span>
                    </label>
                    <PayPalHostedField
                      id='expiration-date'
                      className='box-border h-11 rounded-xl border border-[#BBB9B9] px-4 py-1 duration-300 ease-in-out'
                      hostedFieldType='expirationDate'
                      options={{
                        selector: '#expiration-date',
                      }}
                    />
                  </div>
                </div>
                <Textarea
                  label='Address'
                  id='address'
                  rows={4}
                  onChange={updateData}
                  inputClassname='focus:!ring-0 focus:!ring-transparent focus:!transition-none focus:!outline-0'
                />
                <Radio
                  label='Shipping'
                  id='shipping'
                  checked={courier}
                  onClick={getCourier}
                  value={shipping?.name}
                  description={shipping?.price}
                />
                <div className='flex justify-end gap-5'>
                  <Image
                    src='/images/paypal.png'
                    alt='paypal'
                    height={50}
                    width={100}
                    className='h-14 w-auto'
                  />
                  <Image
                    src='/images/visa.png'
                    alt='visa'
                    height={50}
                    width={100}
                    className='h-14 w-auto'
                  />
                  <Image
                    src='/images/mastercard.png'
                    alt='mastercard'
                    height={50}
                    width={100}
                    className='h-14 w-auto'
                  />
                </div>
              </div>
              <div className='w-full text-end lg:hidden'>
                <Button
                  id='pay'
                  className='my-4 mr-0 w-40 rounded-2xl bg-black text-base capitalize md:w-64 md:text-lg lg:w-full'
                  onClick={handleClick}
                  disabled={isDisable}
                >
                  Pay
                </Button>
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
            barClassName='h-2 rounded-full bg-black'
          />
        </div>
      </div>
      <div className='relative hidden h-screen p-5 lg:block lg:w-1/2'>
        <div className='absolute inset-0 box-border flex h-full w-full flex-col items-end justify-between bg-white bg-opacity-90 py-16 px-16'>
          <h1>Cart</h1>
          <div className='flex w-full flex-col items-end gap-8'>
            <div className='flex w-full justify-between border-y border-black py-3 xl:w-5/6'>
              <p>Xellar Hardware</p>
              <p>x{amount}</p>
            </div>
            <div className='flex w-40 flex-col gap-4'>
              <div className='flex w-full justify-between'>
                <p>Subtotal</p>
                <p>
                  $
                  {amount > 3
                    ? Number(
                        (
                          ((amount - (amount % 3)) / 3) * Number(price[2]) +
                          (amount % 3 > 0 ? Number(price[(amount % 3) - 1]) : 0)
                        ).toFixed(2)
                      ).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    : Number(price[amount - 1]).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                </p>
              </div>
              <div className='flex w-full justify-between'>
                <p>Shipping</p>
                <p>
                  $
                  {shipping?.data[courier].cost.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <div className='flex w-full justify-between'>
                <p>Total</p>
                <p>
                  $
                  {amount > 3
                    ? Number(
                        (
                          ((amount - (amount % 3)) / 3) * Number(price[2]) +
                          (amount % 3 > 0
                            ? Number(price[(amount % 3) - 1])
                            : 0) +
                          shipping?.data[courier].cost
                        ).toFixed(2)
                      ).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    : (
                        Number(price[amount - 1]) + shipping?.data[courier].cost
                      ).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                </p>
              </div>
            </div>
            <button
              className='w-40 rounded-2xl bg-black py-5 font-bold text-white'
              onClick={() => document.getElementById('pay')?.click()}
              disabled={isDisable}
            >
              Pay
            </button>
          </div>
        </div>
        <div className='h-full rounded-3xl bg-[url("/images/hero-payment.png")] bg-cover' />
      </div>
      <Dialog
        open={open}
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            padding: '3em',
          },
        }}
      >
        <div className='flex items-center justify-center'>
          <div
            className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
            role='status'
          ></div>
        </div>
      </Dialog>
    </div>
  );
}

export default function Payment() {
  const router = useRouter();

  const [clientToken, setClientToken] = React.useState('');
  const [shippingRates, setShippingRates] = React.useState<any>({
    name: [],
    price: [],
    data: [],
  });
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

  const getClientToken = async () => {
    try {
      await axios
        .get('/api/payment-paypal')
        .then((res) => setClientToken(res?.data?.clientToken));
    } catch (error) {
      setClientToken('');
    }
  };

  const getShippingRates = async (body: any) => {
    try {
      await axios.post('/api/shipping', body).then((res) => {
        if (res.status === 200) {
          const name: any[] = [];
          const price: any[] = [];
          res.data.map((item: any) => {
            name.push(item.name);
            price.push(
              `US$ ${item.cost.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`
            );
          });
          setShippingRates({ name, price, data: res.data });
        } else setShippingRates({ name: [], price: [], data: [] });
      });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const userData = window.localStorage.getItem('customer_info');

    if (!clientToken) getClientToken();

    if (userData) {
      const obj = JSON.parse(userData);
      Object.entries(obj).map((item) => {
        data[item[0]] = item[1];
        setData({ ...data });
      });
    } else {
      router.push('/shop/customer-info');
    }

    if (data?.country.toLowerCase() === 'indonesia') {
      const city = Cities.cities.find((item) => {
        return item.city_name.toLowerCase() === data?.city.toLowerCase();
      });
      getShippingRates({
        local: true,
        data: {
          origin: 153,
          destination: city?.city_id,
          courier: 'jne',
          weight: 500,
        },
      });
    } else {
      const country = Cities.country.find((item) => {
        return item.country_name.toLowerCase() === data?.country.toLowerCase();
      });
      getShippingRates({
        local: false,
        data: {
          origin: 153,
          destination: country?.country_id,
          courier: 'jne:pos',
          weight: 1,
        },
      });
    }

    data.amount =
      Number(window.localStorage.getItem('amount')) > 0
        ? Number(window.localStorage.getItem('amount'))
        : 1;

    setData({ ...data });
  }, []);

  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        {clientToken && shippingRates.name.length ? (
          <PayPalScriptProvider
            options={{
              'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? '',
              'data-client-token': clientToken,
              components: 'hosted-fields',
            }}
          >
            <PayPalHostedFieldsProvider
              styles={{
                '.valid': { color: '#28a745' },
                '.invalid': { color: '#dc3545' },
              }}
              createOrder={function () {
                const courierIndex = window.localStorage.getItem('courier');

                return fetch('/api/payment-paypal', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ ...data, courier: courierIndex }),
                })
                  .then((response) => response.json())
                  .then((order) => {
                    // Your code here after create the order
                    return order.id;
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              <PaymentInfo customer={data} shipping={shippingRates}>
                <div className='grid grid-cols-10 gap-3'>
                  <div className='col-span-10 flex w-full flex-col md:col-span-6'>
                    <label htmlFor='card-number' className='mb-3 font-medium'>
                      Credit Card Number <span className='text-red-700'>*</span>
                    </label>
                    <PayPalHostedField
                      id='card-number'
                      className='box-border h-11 rounded-xl border border-[#BBB9B9] p-1 duration-300 ease-in-out'
                      hostedFieldType='number'
                      options={{
                        selector: '#card-number',
                      }}
                    />
                  </div>
                  <div className='col-span-5 flex w-full flex-col md:col-span-2'>
                    <label htmlFor='card-number' className='mb-3 font-medium'>
                      CVV <span className='text-red-700'>*</span>
                    </label>
                    <PayPalHostedField
                      id='cvv'
                      className='box-border h-11 rounded-xl border border-[#BBB9B9] px-4 py-1 duration-300 ease-in-out'
                      hostedFieldType='cvv'
                      options={{
                        selector: '#cvv',
                        maskInput: true,
                      }}
                    />
                  </div>
                  <div className='col-span-5 flex w-full flex-col md:col-span-2'>
                    <label htmlFor='card-number' className='mb-3 font-medium'>
                      Expiry <span className='text-red-700'>*</span>
                    </label>
                    <PayPalHostedField
                      id='expiration-date'
                      className='box-border h-11 rounded-xl border border-[#BBB9B9] px-4 py-1 duration-300 ease-in-out'
                      hostedFieldType='expirationDate'
                      options={{
                        selector: '#expiration-date',
                      }}
                    />
                  </div>
                </div>
              </PaymentInfo>
            </PayPalHostedFieldsProvider>
          </PayPalScriptProvider>
        ) : (
          <Dialog
            open={true}
            PaperProps={{
              style: {
                backgroundColor: 'transparent',
                boxShadow: 'none',
                padding: '3em',
              },
            }}
          >
            <div className='flex items-center justify-center'>
              <div
                className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
                role='status'
              ></div>
            </div>
          </Dialog>
        )}
      </main>
    </>
  );
}
