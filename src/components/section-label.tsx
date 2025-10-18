type Props = {
  label: string;
};

const SectionLabel = ({ label }: Props) => (
  <div className='w-full relative flex items-center justify-center'>
    <hr className='w-full absolute z-10' />
    <div className='absolute z-20 bg-base-100 px-4'>
      <h3 className='text-body text-center'>{label}</h3>
    </div>
  </div>
);
export default SectionLabel;
