import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface IProject {
  url: string;
  image: StaticImageData;
  title: string;
  description: string;
  stack: string[];
}

const Project = ({ url, image, title, description, stack }: IProject) => (
  <Link
    href={url}
    target='_blank'
    className='block w-full p-0 md:p-2 rounded-xl overflow-hidden hover:bg-base-300'
  >
    <div className='grid grid-cols-1 gap-2'>
      <Image
        src={image}
        alt=''
        className='aspect-16/9 hover:scale-105 rounded-xl overflow-hidden transition-all duration-500 ease-in-out'
      />

      <div className='flex flex-col items-start justify-between p-2 gap-y-2'>
        <h3 className='font-bold text-lg underline'>{title}</h3>
        <p className='text-md line-clamp-4'>{description}</p>
        <p className='font-semibold text-secondary'>{stack.join(', ')}</p>
      </div>
    </div>
  </Link>
);

export default Project;
