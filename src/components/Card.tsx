import NextImage from '@/components/NextImage';

type CardProps = {
  name?: string;
  position?: string;
  description?: string;
  imageLink?: string | undefined;
};

export default function Card({
  name,
  position,
  description,
  imageLink,
}: CardProps) {
  return (
    <div className='my-8 ml-4 w-64 rounded-2xl bg-primary-400 p-5 md:ml-8 md:w-80 md:p-7'>
      <div className='mb-5 flex items-center gap-5'>
        {imageLink ? (
          <NextImage
            useSkeleton
            color='#D9D9D9'
            src={imageLink ?? ''}
            width='50'
            height='50'
            alt='Icon'
          />
        ) : (
          <div className='h-[50px] w-[50px] rounded-full bg-[#D9D9D9]' />
        )}
        <div>
          <p className='text-xl font-extrabold'>{name}</p>
          <p>{position}</p>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}
