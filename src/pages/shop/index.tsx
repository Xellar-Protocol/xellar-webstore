import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from '@material-tailwind/react';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import Link from 'next/link';
import * as React from 'react';

import Card from '@/components/Card';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function Shop() {
  const [amount, setAmount] = React.useState<number>(1);
  const [open, setOpen] = React.useState<number>(1);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='flex justify-between border-y border-black px-24'>
          <div className='my-auto h-full'>
            <p className='mb-6 text-2xl'>Coming Soon</p>
            <h1 className='mb-6 w-2/3 text-6xl font-extrabold leading-normal'>
              Hardware Wallet
            </h1>
            <p className='mb-6 w-7/12 whitespace-normal text-2xl leading-snug'>
              The worlds most lightweight & secure hard
            </p>
            <p className='mb-16 w-7/12 text-2xl font-bold leading-loose'>
              $19.99
            </p>
            <div className='flex gap-6'>
              <div className='flex items-center justify-center gap-3 rounded-2xl border border-gray-500 p-2'>
                <button
                  onClick={() => {
                    if (amount > 1) setAmount(amount - 1);
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M18 12H6'
                    />
                  </svg>
                </button>
                <p className='text-xl'>{amount}</p>
                <button
                  onClick={() => {
                    setAmount(amount + 1);
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 6v12m6-6H6'
                    />
                  </svg>
                </button>
              </div>
              <ButtonLink
                variant='dark'
                href='/shop/customer-info'
                className='rounded-2xl px-6 py-4 font-bold'
              >
                Add to bag
              </ButtonLink>
            </div>
          </div>
          <NextImage
            className='border-r border-black pt-20 pb-28 pr-28'
            useSkeleton
            src='/images/hero-image-shop.png'
            width='750'
            height='520'
            alt='Icon'
          />
          <div className='my-auto h-full w-1/4 pl-6 text-xl'>
            <p className='mb-8 text-2xl font-semibold'>Product Description</p>
            <p className='mb-32'>
              The worlds most <br /> lightweight & secure hard
            </p>
            <table className='w-full table-auto border-collapse'>
              <tbody>
                <tr className='border-y border-black'>
                  <Link href='#'>
                    <td className='flex justify-between p-5'>
                      <p>Single Card</p>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-6 w-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
                        />
                      </svg>
                    </td>
                  </Link>
                </tr>
                <tr className='border-y border-black'>
                  <Link href='#'>
                    <td className='flex justify-between p-5'>
                      <p>Double Bundle</p>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-6 w-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
                        />
                      </svg>
                    </td>
                  </Link>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className='my-40 text-center'>
          <h1 className='mb-10 text-5xl font-semibold'>Benefits</h1>
          <p className='mx-auto w-5/12 text-xl'>
            Xellar is your next generation decentralised Bank. Download the
            decentralised crypto wallet for free and protect your crypto.
          </p>
          <div className='my-48 grid grid-cols-3 px-52 text-center'>
            <div>
              <NextImage
                className='mx-auto h-52'
                useSkeleton
                src='/images/benefit-1.png'
                width='330'
                height='150'
                alt='Icon'
              />
              <h2 className='mb-8 text-4xl font-semibold'>Simple</h2>
              <p className='mx-auto w-1/2 text-xl font-normal'>
                Easy to use and intuitively made. Remove complexity from your
                wallet
              </p>
            </div>
            <div className='mx-10'>
              <NextImage
                className='mx-auto h-52'
                useSkeleton
                src='/images/benefit-2.png'
                width='175'
                height='150'
                alt='Icon'
              />
              <h2 className='mb-8 text-4xl font-semibold'>Secure</h2>
              <p className='mx-auto w-3/5 text-xl font-normal'>
                Banking grade security technology makes it unhackable
              </p>
            </div>
            <div>
              <NextImage
                className='mx-auto h-52'
                useSkeleton
                src='/images/benefit-3.png'
                width='190'
                height='150'
                alt='Icon'
              />
              <h2 className='mb-8 text-4xl font-semibold'>Mobile</h2>
              <p className='mx-auto w-1/2 text-xl font-normal'>
                Carry your cold wallet around where ever you go and feel safe.
              </p>
            </div>
          </div>
        </section>
        <section className='bg-[#F8F8FA] py-24'>
          <div className='mb-16 text-center'>
            <h1 className='text-[3.5rem] font-semibold leading-tight'>
              Trusted by over 1000+ happy customers
            </h1>
            <p className='my-8 mx-auto w-[760px] whitespace-normal text-xl'>
              We’re proud to say that our customers love our product and the
              experience they have with our platform. Here are a few of their
              testimonials:
            </p>
          </div>
          <ScrollingCarousel>
            <Card
              name='Jason Affendi'
              position='IDNFT Cofounder'
              description='“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”'
            />
            <Card
              name='Jason Affendi'
              position='IDNFT Cofounder'
              description='“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”'
            />
            <Card
              name='Jason Affendi'
              position='IDNFT Cofounder'
              description='“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”'
            />
            <Card
              name='Jason Affendi'
              position='IDNFT Cofounder'
              description='“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”'
            />
            <Card
              name='Jason Affendi'
              position='IDNFT Cofounder'
              description='“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”'
            />
            <Card
              name='Jason Affendi'
              position='IDNFT Cofounder'
              description='“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”'
            />
          </ScrollingCarousel>
        </section>
        <section className='py-24'>
          <div className='mb-16 text-center'>
            <h1 className='text-[3.5rem] font-semibold leading-tight'>FAQs</h1>
            <p className='my-8 mx-auto w-[760px] whitespace-normal text-xl'>
              Xellar is your next generation decentralised Bank. Download the
              decentralised crypto wallet for free and protect your crypto.
            </p>
          </div>
          <div className='mx-96 mb-14 border-y border-black'>
            <Accordion open={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className='border-b border-black py-7 font-primary text-xl font-bold text-black'
              >
                How safe is the Xellar Cold Wallet?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className='border-b border-black py-7 font-primary text-xl font-bold text-black'
              >
                What if I lose my Cold Wallet?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className='border-b border-black py-7 font-primary text-xl font-bold text-black'
              >
                Can I customise my card?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 4}>
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className={
                  open === 4
                    ? 'border-b border-black py-7 font-primary text-xl font-bold text-black'
                    : 'border-none py-7 font-primary text-xl font-bold text-black'
                }
              >
                Can I use it with any Crypto Wallet?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
          </div>
        </section>
      </main>
    </Layout>
  );
}
