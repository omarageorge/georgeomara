import clsx from 'clsx';

type Props = {
  label: string;
  left?: boolean;
};

const SectionHeading = ({ label, left }: Props) => (
  <div
    className={clsx(
      'w-full h-auto py-8 md:py-10 relative flex items-center justify-end',
      left && '!justify-start'
    )}
  >
    <hr className='w-full absolute z-10' />
    <div className='absolute z-20 bg-base-100 px-4'>
      <h2 className='font-bold text-3xl md:text-4xl lowercase'>{label}</h2>
    </div>
  </div>
);
export default SectionHeading;
