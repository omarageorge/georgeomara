import Image, { StaticImageData } from 'next/image';

type Props = {
  image: StaticImageData;
  label: string;
};

const TechStack = ({ label, image }: Props) => (
  <div className='w-full p-4 border rounded-xl flex items-center gap-x-3 hover:shadow hover:bg-base-300 hover:scale-105 transition-all duration-500 ease-in-out'>
    <Image
      src={image}
      priority
      alt={`${label} logo svg image`}
      className='w-10 ms:w-12'
    />
    <h4 className='text-sm sm:text-base'>{label}</h4>
  </div>
);
export default TechStack;
