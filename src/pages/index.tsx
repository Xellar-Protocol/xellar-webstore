import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import * as React from 'react';

import Card from '@/components/Card';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='flex justify-between px-24'>
          <div className='my-auto mx-20 h-full'>
            <p className='mb-6 text-2xl'>Coming Soon</p>
            <h1 className='mb-6 w-2/3 text-6xl font-extrabold leading-normal'>
              Introducing Xellar Hardware Wallet
            </h1>
            <p className='mb-20 w-7/12 whitespace-normal text-2xl leading-loose'>
              The worlds most lightweight & secure hard wallet - connect to any
              wallet
            </p>
            <ButtonLink
              variant='dark'
              href='/shop'
              className='rounded-2xl px-14 py-4 font-bold'
            >
              Shop Now
            </ButtonLink>
          </div>
          <div className='w-5/12 bg-gradient-to-br from-[#0286DEC2] via-[#34A3EE91] to-[#DCEEFFBA]'>
            <NextImage
              className='mt-40 mb-28'
              style={{ marginLeft: '-150px' }}
              useSkeleton
              src='/images/hero-image.png'
              width='670'
              height='520'
              alt='Icon'
            />
          </div>
        </section>
        <section className='my-20 text-center'>
          <h1 className='mb-10 text-5xl font-medium'>Products</h1>
          <p className='mx-auto w-1/3 text-xl'>
            Xellar is your next generation decentralised Bank. Download the
            decentralised crypto wallet for free and protect your crypto.
          </p>
          <div className='my-48 grid grid-cols-3 px-52 text-center'>
            <div>
              <NextImage
                className='mx-auto h-52'
                useSkeleton
                src='/images/products-1.png'
                width='160'
                height='150'
                alt='Icon'
              />
              <h2 className='mb-8 text-4xl font-semibold'>Crypto Wallet</h2>
              <p className='mx-auto w-1/2 text-xl font-normal'>
                Use our crypto wallet without the need to purchase a hardwallet
              </p>
            </div>
            <div className='mx-10'>
              <NextImage
                className='mx-auto h-52'
                useSkeleton
                src='/images/products-2.png'
                width='300'
                height='150'
                alt='Icon'
              />
              <h2 className='mb-8 text-4xl font-semibold'>Hardware</h2>
              <p className='mx-auto w-3/5 text-xl font-normal'>
                Only if you want to protect your crypto with military grade
                security
              </p>
            </div>
            <div>
              <NextImage
                className='mx-auto h-52'
                useSkeleton
                src='/images/products-3.png'
                width='125'
                height='150'
                alt='Icon'
              />
              <h2 className='mb-8 text-4xl font-semibold'>Wealth Management</h2>
              <p className='mx-auto w-3/5 text-xl font-normal'>
                Don’t leave your crypto idle, gain interest or invest your
                portfolio to get real gains
              </p>
            </div>
          </div>
        </section>
        <section className='grid grid-cols-2 bg-gradient-to-b from-[#F8F8FA] to-[#F3F3F3]'>
          <NextImage
            className='mx-auto'
            style={{ marginBottom: '-120px', marginTop: '50px' }}
            useSkeleton
            src='/images/image-1.png'
            width='675'
            height='565'
            alt='Icon'
          />
          <div className='my-auto ml-10 pt-16'>
            <h1 className='my-6 w-2/3 text-6xl font-extrabold leading-normal'>
              Next Generation Decentralised Bank
            </h1>
            <p className='w-2/3 whitespace-pre-line text-2xl font-normal'>
              The worlds most lightweight & secure hard wallet - connect to any
              wallet
            </p>
          </div>
        </section>
        <section className='mt-72 mb-64'>
          <div className='my-16 text-center'>
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
        <section className='bg-primary-400 py-48 text-center'>
          <h1 className='text-5xl font-extrabold'>
            Control your Cryptocurrency
          </h1>
          <p className='my-20 mt-10 text-lg font-medium'>
            There has never been a better time than right now.
          </p>
          <ButtonLink
            variant='dark'
            href='/shop'
            className='rounded-2xl px-14 py-4 font-bold'
          >
            Shop Now
          </ButtonLink>
        </section>
      </main>
    </Layout>
  );
}
