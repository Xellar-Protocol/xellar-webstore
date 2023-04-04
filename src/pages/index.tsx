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
        <section className='lg:mx-16 lg:my-10 lg:flex lg:justify-between xl:mx-24 xl:my-12'>
          <div className='mx-6 my-4 h-full md:mx-10 md:my-5 lg:mx-0 lg:my-0 lg:w-full'>
            <p className='mt-10 text-base text-primary-700 md:text-2xl md:text-primary-900 lg:mb-6 lg:mt-auto'>
              Coming Soon
            </p>
            <h1 className='my-2 w-auto text-3xl font-extrabold leading-normal md:mb-6 md:text-6xl lg:w-2/3'>
              Introducing Xellar Hardware Wallet
            </h1>
            <p className='mb-5 whitespace-normal text-base leading-tight md:mb-8 md:text-2xl lg:my-12 lg:leading-loose xl:w-7/12'>
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
          <div className='bg-gradient-to-br from-[#0286DEC2] via-[#34A3EE91] to-[#DCEEFFBA] xl:w-5/12'>
            <NextImage
              imgClassName='mx-auto'
              className='mt-10 md:mt-20 lg:mt-40 lg:mb-28 lg:w-full xl:ml-[-150px]'
              useSkeleton
              src='/images/hero-image.png'
              width='670'
              height='520'
              alt='Icon'
            />
          </div>
        </section>
        <section className='my-10 text-center md:my-20 md:mx-16 xl:mx-24'>
          <h1 className='mb-4 text-3xl font-medium md:mb-6 md:text-5xl'>
            Products
          </h1>
          <p className='mx-auto hidden text-xl md:mb-6 md:block lg:w-1/2'>
            Xellar is your next generation decentralised Bank. Download the
            decentralised crypto wallet for free and protect your crypto.
          </p>
          <div className='px-6 text-left md:text-center lg:my-32 lg:grid lg:grid-cols-3 lg:px-0'>
            <div className='mb-12 md:mb-0'>
              <NextImage
                imgClassName='mx-auto py-2'
                className='h-52 w-full rounded-xl bg-[#EFF1F3] md:bg-transparent'
                useSkeleton
                src='/images/products-1.png'
                width='160'
                height='150'
                alt='Icon'
              />
              <h2 className='mt-2 mb-2 text-2xl font-semibold md:text-4xl lg:mb-8'>
                Crypto Wallet
              </h2>
              <p className='text-base font-normal leading-tight md:mx-auto md:my-4 md:w-2/3 md:text-xl md:leading-normal'>
                Use our crypto wallet without the need to purchase a hardwallet
              </p>
            </div>
            <div className='mb-12 md:mb-0 lg:mx-10'>
              <NextImage
                imgClassName='mx-auto px-3 md:px-16 lg:px-0 py-6'
                className='w-full rounded-xl bg-[#EFF1F3] md:bg-transparent lg:h-52'
                useSkeleton
                src='/images/products-2.png'
                width='300'
                height='500'
                alt='Icon'
              />
              <h2 className='mt-2 mb-2 text-2xl font-semibold md:text-4xl lg:mb-8'>
                Hardware
              </h2>
              <p className='text-base font-normal leading-tight md:mx-auto md:my-4 md:w-2/3 md:text-xl md:leading-normal'>
                Only if you want to protect your crypto with military grade
                security
              </p>
            </div>
            <div className='mb-12 md:mb-0'>
              <NextImage
                imgClassName='mx-auto py-4'
                className='h-52 w-full rounded-xl bg-[#EFF1F3] md:bg-transparent'
                useSkeleton
                src='/images/products-3.png'
                width='125'
                height='150'
                alt='Icon'
              />
              <h2 className='mt-2 mb-2 text-2xl font-semibold md:text-4xl lg:mb-8'>
                Wealth Management
              </h2>
              <p className='text-base font-normal leading-tight md:mx-auto md:my-4 md:w-2/3 md:text-xl md:leading-normal'>
                Don’t leave your crypto idle, gain interest or invest your
                portfolio to get real gains
              </p>
            </div>
          </div>
        </section>
        <section className='grid grid-cols-1 bg-gradient-to-b from-[#F8F8FA] to-[#F3F3F3] lg:grid-cols-2'>
          <NextImage
            imgClassName='xl:px-20 lg:px-14 mx-auto'
            className='mx-auto mb-10 sm:w-full md:w-auto lg:mb-[-90px] lg:mt-[30px] xl:mb-[-120px] xl:mt-[50px]'
            useSkeleton
            src='/images/image-1.png'
            width='675'
            height='565'
            alt='Icon'
          />
          <div className='order-first my-10 px-6 md:my-16 md:px-14 lg:order-last lg:my-auto lg:px-0 xl:ml-10'>
            <h1 className='mb-4 w-11/12 font-extrabold md:w-2/3 md:text-4xl md:leading-normal lg:my-6 lg:w-5/6 xl:text-5xl'>
              Next Generation Decentralised Bank
            </h1>
            <p className='w-11/12 whitespace-pre-line font-normal leading-tight md:w-2/3 md:text-xl md:leading-normal lg:w-5/6 xl:w-2/3'>
              The worlds most lightweight & secure hard wallet - connect to any
              wallet
            </p>
          </div>
        </section>
        <section className='my-14 md:my-24 lg:my-52 xl:my-72'>
          <div className='mx-6 md:mx-16 md:text-center lg:my-16'>
            <h1 className='text-2xl font-bold leading-tight md:text-5xl md:font-semibold lg:text-[3.5rem]'>
              Trusted by over 1000+ happy customers
            </h1>
            <p className='my-4 mx-auto whitespace-normal text-sm leading-tight md:my-8 md:text-xl md:leading-normal lg:w-[760px]'>
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
        <section className='bg-primary-400 py-24 px-10 text-center md:py-48'>
          <h1 className='text-3xl font-extrabold md:text-4xl lg:text-5xl'>
            Control your Cryptocurrency
          </h1>
          <p className='my-6 text-sm md:text-base lg:my-20 lg:text-lg'>
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
