import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import * as React from 'react';

import Card from '@/components/Card';
import Layout from '@/components/layout/Layout';
import LayoutContainer from '@/components/layout/LayoutContainer';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function HomePage() {
  type reviewType = {
    name: string;
    companyName: string;
    jobTitle: string;
    review: string;
    image: string;
  };

  const reviews: Array<reviewType> = [
    {
      name: 'Matthew',
      companyName: 'Crypto Inc.',
      jobTitle: 'Senior Developer',
      review:
        'I have been using this cryptocurrency wallet for several months now and I am thoroughly impressed with its functionality and security. The user interface is intuitive and easy to navigate, and I appreciate the added layer of security measures that have been put in place.',
      image: '/images/person/gashashasa.png',
    },
    {
      name: 'Kevin',
      companyName: 'Swing',
      jobTitle: 'Marketing Manager',
      review:
        'As someone who is not particularly tech-savvy, I was hesitant to start using a cryptocurrency wallet. However, this particular wallet made the process incredibly simple and straightforward. I now feel confident in my ability to manage my digital assets.',
      image: '/images/person/vcjjvc bjbjjukkutuktktutuk.png',
    },
    {
      name: 'Alex Johnson',
      companyName: 'CryptoTrader LLC',
      jobTitle: 'CEO',
      review:
        'This wallet is an excellent option for both beginners and experienced cryptocurrency users. It provides a comprehensive range of features and tools that are designed to meet the needs of all types of investors.',
      image: '/images/person/zxzgzxgzxgzxgzg.png',
    },
    {
      name: 'Samantha Lee',
      companyName: 'Blockchain Ventures',
      jobTitle: 'Investor Relations',
      review:
        'I have tried several cryptocurrency wallets in the past, but this one stands out as the best. It is highly secure and offers a wide range of digital assets to choose from, making it an ideal choice for anyone who wants to invest in the cryptocurrency market.',
      image: '/images/person/woman1.jpg.png',
    },
    {
      name: 'Michael Chen',
      companyName: 'XXXXX Ventures',
      jobTitle: 'Cryptocurrency Analyst',
      review:
        'As someone who works in the cryptocurrency industry, I am constantly looking for new and innovative ways to manage my digital assets. This wallet offers a level of functionality and security that I have not found in any other wallet on the market.',
      image: '/images/person/sdaszxgxg.png',
    },
    {
      name: 'Emily Davis',
      companyName: 'Blockchain Solutions Inc.',
      jobTitle: 'Chief Technology Officer',
      review:
        'This wallet is incredibly user-friendly and easy to use, which makes it a great option for beginners. It also offers a range of advanced features that are perfect for more experienced users.',
      image: '/images/person/fqeqgqgqeg.png',
    },
    {
      name: 'David Kim',
      companyName: 'CryptoX',
      jobTitle: 'Customer Support Representative',
      review:
        'One of the things I appreciate most about this wallet is the excellent customer support. Whenever I have had a question or issue, the support team has been quick to respond and incredibly helpful.',
      image:
        '/images/person/avatar-gen119721b1951faad477d0cfd235dfa445.jpg.png',
    },
    {
      name: 'Roger Jones',
      companyName: 'Bitcoin Investments',
      jobTitle: 'Portfolio Manager',
      review:
        'I have been using this wallet to manage my digital assets for several months now and have been extremely satisfied with its performance. It is highly secure and offers a range of features that make it easy to manage a diverse portfolio of cryptocurrencies.',
      image:
        '/images/person/avatar-gen79879468ac6f09505f97806aa6bc5017.jpg-1.png',
    },
    {
      name: 'Petru Sidarta',
      companyName: 'CryptoVault',
      jobTitle: 'Operation Manager',
      review:
        'This wallet offers an excellent combination of security and functionality, which makes it an ideal choice for anyone who wants to invest in cryptocurrencies. The team behind the wallet is also highly responsive and dedicated to providing the best possible user experience.',
      image: '/images/person/mrykutlktjg.png',
    },
  ];

  return (
    <Layout useConstrainedBox={false}>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <LayoutContainer
          useConstrainedBox={false}
          className='sm:bg-transparent lg:bg-[#F8F8FA]'
        >
          <LayoutContainer>
            <section className='mx-6 my-6 flex flex-col md:mx-10 md:my-5 lg:mx-16 lg:my-10 lg:flex-row lg:justify-between xl:mx-24 xl:my-12'>
              <div className='order-2 h-full lg:order-1 lg:m-auto lg:w-3/4'>
                <p className='mt-5 text-base text-primary-700 md:text-2xl md:text-primary-900 lg:mb-6 lg:mt-auto'>
                  Introducing
                </p>
                <h1 className='my-2 w-auto text-3xl font-extrabold leading-normal md:mb-6 md:text-6xl lg:w-[82%]'>
                  Xellar Hardware Wallet
                </h1>
                <p className='leading-2 mb-5 whitespace-normal text-base md:mb-8 md:text-2xl lg:my-12 lg:leading-normal xl:w-7/12'>
                  The worlds most lightweight & secure hard wallet - connect to
                  any wallet
                </p>
                <ButtonLink
                  variant='dark'
                  href='/shop'
                  className='rounded-2xl px-14 py-4 font-bold'
                >
                  Shop Now
                </ButtonLink>
              </div>
              <div className='order-1 rounded-2xl bg-[#EFF1F3]  bg-gradient-to-br from-[#0286DEC2] via-[#34A3EE91] to-[#DCEEFFBA] lg:order-2 lg:rounded-none '>
                <NextImage
                  imgClassName='mx-auto my-auto p-5 md:w-2/3 lg:w-auto lg:h-auto lg:py-10 xl:py-0 2xl:max-h-[500px] 2xl:h-full w-full 2xl:max-w-[1000px]'
                  className='h-full w-full lg:mt-40 lg:mb-28 lg:ml-[0px] xl:ml-[-150px]'
                  useSkeleton
                  src='/images/hero-image.png'
                  width='2000'
                  height='2000'
                  alt='Icon'
                />
              </div>
            </section>
          </LayoutContainer>
        </LayoutContainer>
        <LayoutContainer>
          <section
            className='my-10 text-center md:my-20 md:mx-16 xl:mx-24'
            id='products'
          >
            <h1 className='mb-4 text-3xl font-[600] md:mb-6 md:text-5xl'>
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
                  Use our crypto wallet without the need to purchase a
                  hardwallet
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
        </LayoutContainer>
        <LayoutContainer>
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
                The worlds most lightweight & secure hard wallet - connect to
                any wallet
              </p>
            </div>
          </section>
        </LayoutContainer>
        <LayoutContainer>
          <section className='my-14 md:my-24 lg:my-52 xl:my-72'>
            <div className='mx-6 md:mx-16 md:text-center lg:my-16'>
              <h1 className='text-2xl font-bold leading-tight md:text-5xl md:font-semibold lg:text-[3.5rem]'>
                Trusted by over 500+ happy customers
              </h1>
              <p className='my-4 mx-auto whitespace-normal text-sm leading-tight md:my-8 md:text-xl md:leading-normal lg:w-[760px]'>
                We’re proud to say that our customers love our product and the
                experience they have with our platform. Here are a few of their
                testimonials:
              </p>
            </div>
            <ScrollingCarousel>
              {reviews.map((el) => {
                return (
                  <Card
                    key={el.name.toString()}
                    name={el.name}
                    position={`${el.companyName} - ${el.jobTitle}`}
                    description={`“${el.review}”`}
                    imageLink={el.image}
                  />
                );
              })}
            </ScrollingCarousel>
          </section>
        </LayoutContainer>
        <LayoutContainer>
          <section className='backgroundCard bg-primary-400 py-24 px-10 text-center shadow-lg'>
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
        </LayoutContainer>
      </main>
    </Layout>
  );
}
