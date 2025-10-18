import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type Props = {
  url: string;
  image: StaticImageData;
  title: string;
  description: string;
  stack: string[];
};

const Project = ({ url, image, title, description, stack }: Props) => (
  <Link
    href={url}
    target='_blank'
    className='block w-full border-4 rounded-xl p-4 hover:bg-gray-900 hover:scale-105 shadow transition duration-500 ease-in-out'
  >
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <Image
        src={image}
        alt=''
        className='aspect-16/9  bg-slate-800 rounded-xl overflow-hidden '
      />

      <div className='flex flex-col items-start justify-between p-0 md:p-4 rounded-xl'>
        <h3 className='font-bold text-lg underline'>{title}</h3>
        <p className='text-md line-clamp-4'>{description}</p>
        <p className='font-semibold'>{stack.join(', ')}</p>
      </div>
    </div>
  </Link>
);

export default Project;
