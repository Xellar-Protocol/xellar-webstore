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
  const [price] = React.useState<Array<string>>(['19.99', '36.99', '50.00']);
  const [amount, setAmount] = React.useState<number>(1);
  const [open, setOpen] = React.useState<number>(1);
  const [card, setCard] = React.useState<number>(1);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  React.useEffect(() => {
    setAmount(
      Number(window.localStorage.getItem('amount')) > 0
        ? Number(window.localStorage.getItem('amount'))
        : 1
    );
  }, []);

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
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='mx-6 my-6 flex flex-col md:mx-10 md:my-5 lg:mx-16 lg:my-10 lg:flex-row lg:justify-between xl:mx-24 xl:my-12'>
          <div className='order-2 my-auto h-full lg:order-1'>
            <p className='mb-6 hidden text-2xl lg:block'>Coming Soon</p>
            <div className='my-4 flex justify-between gap-2 text-base font-bold md:gap-4 md:text-lg lg:hidden'>
              <button
                className={`${card === 1 ? 'bg-black text-white' : 'bg-[#EFF1F3] text-black'
                  } w-full rounded-xl py-1`}
                onClick={() => {
                  setCard(1);
                  setAmount(1);
                  window.localStorage.setItem('amount', '1');
                }}
              >
                Single
              </button>
              <button
                className={`${card === 2 ? 'bg-black text-white' : 'bg-[#EFF1F3] text-black'
                  } w-full rounded-xl py-1`}
                onClick={() => {
                  setCard(2);
                  setAmount(2);
                  window.localStorage.setItem('amount', '2');
                }}
              >
                Double
              </button>
              <button
                className={`${card === 3 ? 'bg-black text-white' : 'bg-[#EFF1F3] text-black'
                  } w-full rounded-xl py-1`}
                onClick={() => {
                  setCard(3);
                  setAmount(3);
                  window.localStorage.setItem('amount', '3');
                }}
              >
                Triple
              </button>
            </div>
            <h1 className='lg:-2/3 mt-6 mb-2 text-3xl font-extrabold leading-normal md:mt-10 md:text-5xl lg:mt-0 lg:mb-6 xl:text-6xl'>
              Hardware Wallet
            </h1>
            <p className='mb-2 whitespace-normal text-lg leading-snug md:mb-4 md:text-2xl lg:mb-6 lg:w-7/12'>
              The worlds most lightweight & secure hard
            </p>
            <p className='w-7/12 text-2xl font-bold leading-loose lg:mb-16'>
              $
              {
                amount > 3 ?
                  (((amount - (amount % 3)) / 3) * Number(price[2]) + (amount % 3 > 0 ? Number(price[amount % 3 - 1]) : 0)).toFixed(2).toString() :
                  price[amount - 1]
              }
            </p>
            <div className='my-3 flex gap-6 md:my-6 lg:my-0'>
              <div className='flex items-center justify-center gap-3 rounded-2xl border border-gray-500 p-2'>
                <button
                  onClick={() => {
                    if (amount > 1) {
                      window.localStorage.setItem(
                        'amount',
                        (amount - 1).toString()
                      );
                      setAmount(amount - 1);
                    }
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
                    window.localStorage.setItem(
                      'amount',
                      (amount + 1).toString()
                    );
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
            imgClassName='mx-auto my-auto p-5 md:w-2/3 lg:w-auto lg:py-10 xl:py-0'
            className='order-1 w-full rounded-2xl border-black bg-[#EFF1F3] lg:order-2 lg:w-auto lg:rounded-none lg:border-r lg:bg-transparent lg:py-20 lg:px-10 xl:pr-28'
            useSkeleton
            src='/images/hero-image-shop.png'
            width='750'
            height='520'
            alt='Icon'
          />
          <div className='order-3 my-5 h-full w-full border-y border-black py-5 text-xl lg:my-auto lg:w-2/3 lg:border-none lg:py-0 lg:pl-3 xl:w-1/3 xl:pl-6'>
            <p className='mb-2 text-2xl font-semibold md:text-3xl lg:mb-8 lg:text-2xl'>
              Product Description
            </p>
            <p className='mb-5 text-base leading-tight md:text-lg lg:mb-32 lg:text-xl lg:leading-normal'>
              The worlds most lightweight & secure hard
            </p>
            <table className='hidden w-full table-auto border-collapse lg:block'>
              <tbody>
                <tr className='border-y border-black'>
                  <td className='flex justify-between gap-5 p-5 xl:gap-10'>
                    <Link
                      href='/shop/customer-info'
                      className='flex justify-between gap-5'
                      onClick={() => {
                        window.localStorage.setItem('amount', '1');
                      }}
                    >
                      <p>Single Card</p>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='mt-1 h-6 w-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
                        />
                      </svg>
                    </Link>
                  </td>
                </tr>
                <tr className='border-y border-black'>
                  <td className='flex justify-between gap-5 p-5 xl:gap-10'>
                    <Link
                      href='/shop/customer-info'
                      onClick={() => {
                        window.localStorage.setItem('amount', '2');
                      }}
                      className='flex justify-between gap-5'
                    >
                      <p>Double Bundle</p>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='mt-1 h-6 w-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
                        />
                      </svg>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className='my-10 text-center md:my-20 md:mx-16 xl:mx-24'>
          <h1 className='mb-4 text-3xl font-medium md:mb-6 md:text-5xl'>
            Benefits
          </h1>
          <p className='mx-auto hidden text-xl md:mb-6 md:block lg:w-1/2'>
            Xellar is your next generation decentralised Bank. Download the
            decentralised crypto wallet for free and protect your crypto.
          </p>
          <div className='px-6 text-left md:text-center lg:my-32 lg:grid lg:grid-cols-3 lg:px-0'>
            <div className='mb-12 md:mb-0'>
              <NextImage
                imgClassName='mx-auto my-auto h-full md:h-auto p-6 md:p-2'
                className='h-52 w-full rounded-xl bg-[#EFF1F3] md:bg-transparent'
                useSkeleton
                src='/images/benefit-1.png'
                width='300'
                height='300'
                alt='Icon'
              />
              <h2 className='mt-2 mb-2 text-2xl font-semibold md:text-4xl lg:mb-8'>
                Simple
              </h2>
              <p className='text-base font-normal leading-tight md:mx-auto md:my-4 md:w-2/3 md:text-xl md:leading-normal'>
                Easy to use and intuitively made. Remove complexity from your
                wallet
              </p>
            </div>
            <div className='mb-12 md:mb-0 lg:mx-10'>
              <NextImage
                imgClassName='mx-auto my-auto lg:my-0 h-full lg:h-5/6 lg:w-auto p-10 md:p-10 lg:p-0'
                className='w-full rounded-xl bg-[#EFF1F3] md:bg-transparent lg:h-52'
                useSkeleton
                src='/images/benefit-2.png'
                width='300'
                height='300'
                alt='Icon'
              />
              <h2 className='mt-2 mb-2 text-2xl font-semibold md:text-4xl lg:mb-8'>
                Secure
              </h2>
              <p className='text-base font-normal leading-tight md:mx-auto md:my-4 md:w-2/3 md:text-xl md:leading-normal'>
                Banking grade security technology makes it unhackable
              </p>
            </div>
            <div className='mb-12 md:mb-0'>
              <NextImage
                imgClassName='mx-auto my-auto h-full w-auto p-6 md:p-2'
                className='h-52 w-full rounded-xl bg-[#EFF1F3] md:bg-transparent'
                useSkeleton
                src='/images/benefit-3.png'
                width='125'
                height='150'
                alt='Icon'
              />
              <h2 className='mt-2 mb-2 text-2xl font-semibold md:text-4xl lg:mb-8'>
                Mobile
              </h2>
              <p className='text-base font-normal leading-tight md:mx-auto md:my-4 md:w-2/3 md:text-xl md:leading-normal'>
                Carry your cold wallet around where ever you go and feel safe.
              </p>
            </div>
          </div>
        </section>
        <section className='bg-[#F8F8FA] py-10 '>
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
        <section className='py-14 px-6 md:py-20 lg:py-32'>
          <div className='mb-6 text-left md:mb-16 md:text-center'>
            <h1 className='text-4xl font-semibold leading-tight md:text-[3.5rem]'>
              FAQs
            </h1>
            <p className='my-4 mx-auto whitespace-normal text-sm leading-tight md:my-8 md:text-xl md:leading-normal lg:w-[760px]'>
              Xellar is your next generation decentralised Bank. Download the
              decentralised crypto wallet for free and protect your crypto.
            </p>
          </div>
          <div className='flex flex-col gap-3 border-black md:gap-0 md:border-y lg:mx-20 xl:mx-72'>
            <Accordion
              open={open === 1}
              className='rounded-2xl border-2 md:rounded-none md:border-0'
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className={
                  open === 1
                    ? 'border-b p-3 text-left font-primary text-base font-bold text-black md:border-black md:py-7 md:px-0 md:text-center md:text-xl'
                    : 'border-none p-3 text-left font-primary text-base font-bold text-black md:border-b md:border-solid md:border-black md:py-7 md:px-0 md:text-center md:text-xl'
                }
              >
                How safe is the Xellar Cold Wallet?
              </AccordionHeader>
              <AccordionBody className='p-3 md:py-5 md:px-0'>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              className='rounded-2xl border-2 md:rounded-none md:border-0'
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className={
                  open === 2
                    ? 'border-b p-3 text-left font-primary text-base font-bold text-black md:border-black md:py-7 md:px-0 md:text-center md:text-xl'
                    : 'border-none p-3 text-left font-primary text-base font-bold text-black md:border-b md:border-solid md:border-black md:py-7 md:px-0 md:text-center md:text-xl'
                }
              >
                What if I lose my Cold Wallet?
              </AccordionHeader>
              <AccordionBody className='p-3 md:py-5 md:px-0'>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              className='rounded-2xl border-2 md:rounded-none md:border-0'
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className={
                  open === 3
                    ? 'border-b p-3 text-left font-primary text-base font-bold text-black md:border-black md:py-7 md:px-0 md:text-center md:text-xl'
                    : 'border-none p-3 text-left font-primary text-base font-bold text-black md:border-b md:border-solid md:border-black md:py-7 md:px-0 md:text-center md:text-xl'
                }
              >
                Can I customise my card?
              </AccordionHeader>
              <AccordionBody className='p-3 md:py-5 md:px-0'>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 4}
              className='rounded-2xl border-2 md:rounded-none md:border-0'
            >
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className={
                  open === 4
                    ? 'border-b p-3 text-left font-primary text-base font-bold text-black md:border-black md:py-7 md:px-0 md:text-center md:text-xl'
                    : 'border-none p-3 text-left font-primary text-base font-bold text-black md:border-black md:py-7 md:px-0 md:text-center md:text-xl'
                }
              >
                Can I use it with any Crypto Wallet?
              </AccordionHeader>
              <AccordionBody className='p-3 md:py-5 md:px-0'>
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
